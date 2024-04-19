// pages/api/stores/getStore/[id].js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const store = await prisma.dbStoreName.findUnique({
      where: { id: parseInt(id) },
      include: { products: true },
    });
    if (store) {
      res.status(200).json(store);
    } else {
      res.status(404).json({ error: "Store not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve store." });
  }
}
