import { prisma } from "@/prisma/client";

export class ProductRepository {
  findAvailable() {
    return prisma.product.findMany({
      where: { status: "AVAILABLE" },
      include: { images: true },
      orderBy: { createdAt: "desc" },
    });
  }
}
