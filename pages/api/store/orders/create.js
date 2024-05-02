import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { orderId, orderName, status, total, productId, customerInfo } =
      req.body;
    console.log("Received order data:", req.body);
    try {
      const order = await prisma.dbOrder.create({
        data: {
          orderId,
          orderName,
          status,
          total,
          productId,
          customerInfo: {
            create: { ...customerInfo },
          },
        },
      });
      console.log("Order created:", order);
      res.status(201).json(order);
    } catch (error) {
      console.error("Error creating order:", error);
      res
        .status(500)
        .json({ error: "Failed to create order", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
