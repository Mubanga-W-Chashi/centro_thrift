export const USER_ROLES = ["ADMIN", "SALES_ASSISTANT"] as const;

export type UserRole = (typeof USER_ROLES)[number];
