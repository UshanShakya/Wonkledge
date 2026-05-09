import { auth } from "@clerk/nextjs/server";
import type { ReactNode } from "react";

export default async function TeacherRouteGroupLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  await auth.protect();

  return <>{children}</>;
}
