-- user_roles is the source of truth for application authorization roles.
ALTER TABLE "users" DROP COLUMN "primaryRole";
