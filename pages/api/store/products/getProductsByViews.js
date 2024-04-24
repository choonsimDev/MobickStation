// 조회수 순
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const products = await prisma.dbStoreProduct.findMany({
      orderBy: {
        views: "desc", // 'desc'는 내림차순을 의미합니다.
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve products." });
  }
}
