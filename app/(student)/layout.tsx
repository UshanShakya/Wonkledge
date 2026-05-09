import { auth } from "@clerk/nextjs/server";
import { requireAppRole, studentRouteRoles } from "@/lib/auth/app-user";
import type { ReactNode } from "react";

export default async function StudentRouteGroupLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  await auth.protect();
  await requireAppRole(studentRouteRoles, {
    createIfMissing: true,
    unauthorizedRedirectTo: "/access-pending?role=student"
  });

  return <>{children}</>;
}
