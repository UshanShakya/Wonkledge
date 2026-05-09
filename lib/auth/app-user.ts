import "server-only";

import { AppRole, UserStatus, type User, type UserRole } from "@prisma/client";
import { auth, currentUser } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import { signupRoleMetadataKey } from "@/lib/auth/role-entry";
import { prisma } from "@/lib/prisma";

export type AppUserWithRoles = User & {
  roles: UserRole[];
};

export const studentRouteRoles = [AppRole.STUDENT] as const;

export const teacherRouteRoles = [AppRole.TEACHER_REVIEWER] as const;

export const adminRouteRoles = [
  AppRole.CONTENT_ADMIN,
  AppRole.REVIEWER_ADMIN,
  AppRole.SUPER_ADMIN
] as const;

type AppRoleInput = AppRole | readonly AppRole[];
type SignupRoleIntent = "student" | "teacher" | "admin";

type CurrentAppUserOptions = {
  createIfMissing?: boolean;
  createRole?: AppRole | null;
  unauthorizedRedirectTo?: string;
};

function normalizeAllowedRoles(roles: AppRoleInput): readonly AppRole[] {
  return typeof roles === "string" ? [roles] : roles;
}

function getPrimaryEmail(
  clerkUser: Awaited<ReturnType<typeof currentUser>>
): string | null {
  if (!clerkUser) {
    return null;
  }

  const primaryEmail = clerkUser.emailAddresses.find(
    (emailAddress) => emailAddress.id === clerkUser.primaryEmailAddressId
  );

  return primaryEmail?.emailAddress ?? clerkUser.emailAddresses[0]?.emailAddress ?? null;
}

function getDisplayName(
  clerkUser: Awaited<ReturnType<typeof currentUser>>
): string | null {
  if (!clerkUser) {
    return null;
  }

  const fullName = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ");

  return fullName || clerkUser.username || null;
}

function isSignupRoleIntent(value: unknown): value is SignupRoleIntent {
  return value === "student" || value === "teacher" || value === "admin";
}

function getSignupRoleIntentFromClerkUser(
  clerkUser: Awaited<ReturnType<typeof currentUser>>
): SignupRoleIntent | null {
  if (!clerkUser) {
    return null;
  }

  const unsafeRole = clerkUser.unsafeMetadata?.[signupRoleMetadataKey];
  const publicRole = clerkUser.publicMetadata?.[signupRoleMetadataKey];

  if (isSignupRoleIntent(unsafeRole)) {
    return unsafeRole;
  }

  if (isSignupRoleIntent(publicRole)) {
    return publicRole;
  }

  return null;
}

function getDefaultCreateRole(signupRoleIntent: SignupRoleIntent | null) {
  if (signupRoleIntent === "teacher" || signupRoleIntent === "admin") {
    return null;
  }

  return AppRole.STUDENT;
}

function getDashboardCreateRoleForNewUser(signupRoleIntent: SignupRoleIntent | null) {
  if (signupRoleIntent === "teacher") {
    return AppRole.TEACHER_REVIEWER;
  }

  if (signupRoleIntent === "admin") {
    return null;
  }

  return AppRole.STUDENT;
}

function getDashboardCreateRoleForExistingUser(signupRoleIntent: SignupRoleIntent | null) {
  if (signupRoleIntent === "student") {
    return AppRole.STUDENT;
  }

  if (signupRoleIntent === "teacher") {
    return AppRole.TEACHER_REVIEWER;
  }

  return null;
}

async function createAppUserForClerkUser({
  clerkUser,
  role,
  userId
}: {
  clerkUser: Awaited<ReturnType<typeof currentUser>>;
  role: AppRole | null;
  userId: string;
}) {
  const email = getPrimaryEmail(clerkUser);
  const imageUrl = clerkUser?.imageUrl ?? null;
  const name = getDisplayName(clerkUser);

  return prisma.user.upsert({
    where: { clerkUserId: userId },
    update: {
      email,
      imageUrl,
      name
    },
    create: {
      clerkUserId: userId,
      email,
      imageUrl,
      name,
      ...(role
        ? {
            roles: {
              create: {
                role
              }
            }
          }
        : {}),
      status: UserStatus.ACTIVE
    },
    include: { roles: true }
  });
}

async function grantRoleToUser(user: AppUserWithRoles, role: AppRole) {
  return prisma.user.update({
    where: { id: user.id },
    data: {
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
    },
    include: { roles: true }
  });
}

export function hasAnyRole(user: AppUserWithRoles, allowedRoles: readonly AppRole[]) {
  return user.roles.some((role) => allowedRoles.includes(role.role));
}

export function getDashboardHrefForAppUser(user: AppUserWithRoles) {
  if (hasAnyRole(user, adminRouteRoles)) {
    return "/admin";
  }

  if (hasAnyRole(user, teacherRouteRoles)) {
    return "/teacher";
  }

  if (hasAnyRole(user, studentRouteRoles)) {
    return "/student";
  }

  return null;
}

export async function getCurrentSignupRoleIntent() {
  return getSignupRoleIntentFromClerkUser(await currentUser());
}

export async function getCurrentAppUser(
  options: CurrentAppUserOptions = {}
): Promise<AppUserWithRoles | null> {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const existingUser = await prisma.user.findUnique({
    where: { clerkUserId: userId },
    include: { roles: true }
  });

  if (existingUser || !options.createIfMissing) {
    return existingUser;
  }

  const clerkUser = await currentUser();
  const signupRoleIntent = getSignupRoleIntentFromClerkUser(clerkUser);
  const role = "createRole" in options
    ? options.createRole ?? null
    : getDefaultCreateRole(signupRoleIntent);

  return createAppUserForClerkUser({ clerkUser, role, userId });
}

export async function ensureCurrentAppUserForDashboard(): Promise<AppUserWithRoles> {
  const { userId } = await auth();

  if (!userId) {
    notFound();
  }

  const existingUser = await prisma.user.findUnique({
    where: { clerkUserId: userId },
    include: { roles: true }
  });
  const clerkUser = await currentUser();
  const signupRoleIntent = getSignupRoleIntentFromClerkUser(clerkUser);

  if (!existingUser) {
    const role = getDashboardCreateRoleForNewUser(signupRoleIntent);

    return createAppUserForClerkUser({ clerkUser, role, userId });
  }

  if (existingUser.status !== UserStatus.ACTIVE) {
    notFound();
  }

  const role = getDashboardCreateRoleForExistingUser(signupRoleIntent);

  if (role && existingUser.roles.length === 0) {
    return grantRoleToUser(existingUser, role);
  }

  return existingUser;
}

export async function requireCurrentAppUser(
  options: CurrentAppUserOptions = {}
): Promise<AppUserWithRoles> {
  const user = await getCurrentAppUser(options);

  if (!user || user.status !== UserStatus.ACTIVE) {
    if (options.unauthorizedRedirectTo) {
      redirect(options.unauthorizedRedirectTo);
    }

    notFound();
  }

  return user;
}

export async function requireAppRole(
  allowedRoles: AppRoleInput,
  options: CurrentAppUserOptions = {}
): Promise<AppUserWithRoles> {
  const user = await requireCurrentAppUser(options);
  const normalizedRoles = normalizeAllowedRoles(allowedRoles);

  if (!hasAnyRole(user, normalizedRoles)) {
    if (options.unauthorizedRedirectTo) {
      redirect(options.unauthorizedRedirectTo);
    }

    notFound();
  }

  return user;
}
