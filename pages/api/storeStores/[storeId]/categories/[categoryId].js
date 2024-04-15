// pages/api/storeStores/[storeId]/categories/[categoryId].js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { storeId, categoryId } = req.query;

  try {
    const products = await prisma.dbStoreProduct.findMany({
      where: {
        storeId: parseInt(storeId),
        categoryId: parseInt(categoryId),
      },
    });

    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res
        .status(404)
        .json({ error: "No products found for this store and category." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve products." });
  }
}
