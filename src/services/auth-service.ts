export class AuthService {
  static canManageSettings(role: string): boolean {
    return role === "ADMIN";
  }
}
