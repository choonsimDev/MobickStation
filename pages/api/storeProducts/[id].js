// pages/api/products/getProduct/[id].js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const product = await prisma.dbStoreProduct.findUnique({
      where: { id: parseInt(id) },
    });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve product." });
  }
}
