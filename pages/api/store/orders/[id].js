// pages/api/orders/[id].js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      const order = await prisma.dbOrder.findUnique({
        where: { id: parseInt(id) },
        include: { customerInfo: true, products: true },
      });
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ message: "Order not found" });
      }
    } catch (error) {
      console.error("Error retrieving order:", error);
      res.status(500).json({ error: "Failed to retrieve order" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
