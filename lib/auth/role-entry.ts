export type RoleEntryKey = "student" | "teacher" | "admin";

export type RoleEntryOption = {
  accountCopy: string;
  actionCopy: string;
  contactCopy: string;
  description: string;
  key: RoleEntryKey;
  label: string;
  signInHref: string;
  signUpHref: string;
  workspaceHref: string;
};

export const dashboardHref = "/dashboard";
export const signupRoleMetadataKey = "wonkledgeSignupRole";

const studentRoleEntryOption: RoleEntryOption = {
  accountCopy: "Create a student account",
  actionCopy: "Create student account",
  contactCopy: "Start learning",
  description: "For learners preparing with lessons, practice, plans, and progress.",
  key: "student",
  label: "Student",
  signInHref: `/sign-in?role=student&redirect=${dashboardHref}`,
  signUpHref: `/sign-up?role=student&redirect=${dashboardHref}`,
  workspaceHref: "/student"
};

const teacherRoleEntryOption: RoleEntryOption = {
  accountCopy: "Create a teacher reviewer account",
  actionCopy: "Create teacher account",
  contactCopy: "Request teacher access",
  description: "For reviewers giving rubric-guided feedback and final responses.",
  key: "teacher",
  label: "Teacher",
  signInHref: `/sign-in?role=teacher&redirect=${dashboardHref}`,
  signUpHref: `/sign-up?role=teacher&redirect=${dashboardHref}`,
  workspaceHref: "/teacher"
};

const adminRoleEntryOption: RoleEntryOption = {
  accountCopy: "Admin access is assigned by Wonkledge",
  actionCopy: "Request admin access",
  contactCopy: "Request admin access",
  description: "For teams managing content, subscriptions, payments, and quality.",
  key: "admin",
  label: "Admin",
  signInHref: `/sign-in?role=admin&redirect=${dashboardHref}`,
  signUpHref: `/sign-up?role=admin&redirect=${dashboardHref}`,
  workspaceHref: "/admin"
};

export const roleEntryOptions: RoleEntryOption[] = [
  studentRoleEntryOption,
  teacherRoleEntryOption,
  adminRoleEntryOption
];

export function getRoleEntryOption(role: string | undefined) {
  return roleEntryOptions.find((option) => option.key === role);
}

export function getRoleOption(key: RoleEntryKey) {
  return getRoleEntryOption(key) ?? studentRoleEntryOption;
}

export function getSafeRoleRedirect(redirect: string | undefined, role: string | undefined) {
  const selectedRole = getRoleEntryOption(role);

  if (redirect === dashboardHref) {
    return redirect;
  }

  if (redirect && selectedRole && redirect === selectedRole.workspaceHref) {
    return redirect;
  }

  return dashboardHref;
}
