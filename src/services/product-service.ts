export class ProductService {
  static canReserve(status: string): boolean {
    return status === "AVAILABLE";
  }
}
