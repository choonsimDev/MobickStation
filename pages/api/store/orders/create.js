import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("ORDER req.body ========", req.body);
    const { orderId, status, total, products, customerInfo } = req.body;

    try {
      const order = await prisma.dbOrder.create({
        data: {
          orderId,
          status,
          total,
          products,
          customerInfo,
        },
      });
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: "Failed to create order" });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
