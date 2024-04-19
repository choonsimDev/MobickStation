import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export default async function handler(req, res) {
  console.log("req.body", req.body);
  if (req.method === "POST") {
    const data = await client.dbNotice.findMany();
    console.log("data", data);
    res.status(200).json(data);
  }
}
