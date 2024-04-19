// pages/api/stores/getStores.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const stores = await prisma.store.findMany();
    console.log("Fetched stores:", stores); // 로그 출력
    res.status(200).json(stores);
  } catch (error) {
    console.error("Error fetching stores:", error); // 에러 로깅
    res.status(500).json({ error: "Failed to retrieve stores." });
  }
}
