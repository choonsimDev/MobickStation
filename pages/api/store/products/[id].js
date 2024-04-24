import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    // 상품을 찾고, views를 1 증가시킵니다.
    const product = await prisma.dbStoreProduct.findUnique({
      where: { id: parseInt(id) },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // views 값을 업데이트합니다.
    const updatedProduct = await prisma.dbStoreProduct.update({
      where: { id: parseInt(id) },
      data: { views: product.views + 1 },
    });

    // 업데이트된 상품 정보를 반환합니다.
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
