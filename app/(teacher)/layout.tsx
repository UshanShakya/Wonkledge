import { auth } from "@clerk/nextjs/server";
import { requireAppRole, teacherRouteRoles } from "@/lib/auth/app-user";
import type { ReactNode } from "react";

export default async function TeacherRouteGroupLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  await auth.protect();
  await requireAppRole(teacherRouteRoles, {
    unauthorizedRedirectTo: "/access-pending?role=teacher"
  });

  return <>{children}</>;
}
