import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  ensureCurrentAppUserForDashboard,
  getCurrentSignupRoleIntent,
  getDashboardHrefForAppUser
} from "@/lib/auth/app-user";

export default async function DashboardPage() {
  await auth.protect();

  const appUser = await ensureCurrentAppUserForDashboard();
  const dashboardHref = getDashboardHrefForAppUser(appUser);

  if (dashboardHref) {
    redirect(dashboardHref);
  }

  const signupRoleIntent = await getCurrentSignupRoleIntent();
  const roleQuery = signupRoleIntent ? `?role=${signupRoleIntent}` : "";

  redirect(`/access-pending${roleQuery}`);
}
