import { auth } from "@clerk/nextjs/server";
import { adminRouteRoles, requireAppRole } from "@/lib/auth/app-user";
import type { ReactNode } from "react";

export default async function AdminRouteGroupLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  await auth.protect();
  await requireAppRole(adminRouteRoles, {
    unauthorizedRedirectTo: "/access-pending?role=admin"
  });

  return <>{children}</>;
}
