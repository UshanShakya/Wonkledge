#!/usr/bin/env node

import { PrismaClient, AppRole, UserStatus } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adminRoles = {
  content_admin: AppRole.CONTENT_ADMIN,
  reviewer_admin: AppRole.REVIEWER_ADMIN,
  super_admin: AppRole.SUPER_ADMIN
};

function readArgs(argv) {
  const args = {};

  for (let index = 0; index < argv.length; index += 1) {
    const current = argv[index];

    if (!current.startsWith("--")) {
      continue;
    }

    const key = current.slice(2);
    const next = argv[index + 1];

    if (!next || next.startsWith("--")) {
      args[key] = "true";
      continue;
    }

    args[key] = next;
    index += 1;
  }

  return args;
}

function printUsage() {
  console.log(`
Usage:
  npm run grant:admin -- --email user@example.com --clerk-user-id user_xxx

Options:
  --email <email>                 User email. Required when creating a new internal user.
  --clerk-user-id <clerk id>      Clerk user id. Required when creating a new internal user.
  --name <name>                   Optional display name.
  --role <role>                   super_admin | content_admin | reviewer_admin. Defaults to super_admin.

Examples:
  npm run grant:admin -- --email founder@example.com --clerk-user-id user_123
  npm run grant:admin -- --email editor@example.com --role content_admin
`);
}

function getDatabaseUrl() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required. Set it before running this script.");
  }

  return process.env.DATABASE_URL;
}

async function findUser(prisma, { clerkUserId, email }) {
  if (clerkUserId) {
    return prisma.user.findUnique({
      where: { clerkUserId },
      include: { roles: true }
    });
  }

  if (!email) {
    return null;
  }

  const matches = await prisma.user.findMany({
    where: { email },
    include: { roles: true },
    orderBy: { createdAt: "asc" }
  });

  if (matches.length > 1) {
    throw new Error(
      `Found ${matches.length} users with email ${email}. Re-run with --clerk-user-id to avoid updating the wrong account.`
    );
  }

  return matches[0] ?? null;
}

async function main() {
  const args = readArgs(process.argv.slice(2));

  if (args.help) {
    printUsage();
    return;
  }

  const email = args.email?.trim().toLowerCase();
  const clerkUserId = args["clerk-user-id"]?.trim();
  const roleKey = args.role?.trim().toLowerCase() ?? "super_admin";
  const role = adminRoles[roleKey];

  if (!role) {
    throw new Error(
      `Invalid admin role "${args.role}". Use one of: ${Object.keys(adminRoles).join(", ")}.`
    );
  }

  if (!email && !clerkUserId) {
    printUsage();
    throw new Error("Provide --email, --clerk-user-id, or both.");
  }

  const adapter = new PrismaPg({ connectionString: getDatabaseUrl() });
  const prisma = new PrismaClient({ adapter, log: ["error", "warn"] });

  try {
    let user = await findUser(prisma, { clerkUserId, email });

    if (!user) {
      if (!clerkUserId || !email) {
        throw new Error(
          "No internal user found. Provide both --email and --clerk-user-id to create one, or ask the user to sign up first."
        );
      }

      user = await prisma.user.create({
        data: {
          clerkUserId,
          email,
          name: args.name?.trim() || null,
          status: UserStatus.ACTIVE,
          roles: {
            create: { role }
          }
        },
        include: { roles: true }
      });

      console.log(`Created internal user ${user.id} for ${email}.`);
    } else {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          email: email ?? user.email,
          name: args.name?.trim() || user.name,
          status: UserStatus.ACTIVE,
          roles: {
            upsert: {
              where: {
                userId_role: {
                  userId: user.id,
                  role
                }
              },
              update: {},
              create: { role }
            }
          }
        }
      });

      console.log(`Updated internal user ${user.id}.`);
    }

    console.log(`Granted ${role} to ${email ?? clerkUserId}.`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
