import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const categories = await prisma.dbStoreCategory.findMany({
      select: { id: true, name: true },
    });
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("Server error");
  }
}
