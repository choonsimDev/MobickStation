import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req, res) {
  const { orderId, paymentKey, amount } = req.query;
  const secretKey = process.env.TOSS_SECRET_KEY;

  const url = `https://api.tosspayments.com/v1/payments/payments/confirm`;
  const basicToken = Buffer.from(`${secretKey}:`, `utf-8`).toString("base64");

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        amount,
        orderId,
        paymentKey,
      }),
      headers: {
        Authorization: `Basic ${basicToken}`,
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    console.log("Toss Payment Confirmation Response:", responseData);
    if (responseData.success) {
      res.redirect(`/store/payment/complete?orderId=${orderId}&status=success`);
    } else {
      res.redirect(`/store/payment/complete?orderId=${orderId}&status=fail`);
    }
  } catch (error) {
    console.error("Error during Toss Payment Confirmation:", error);
    res.status(500).json({ error: "Failed to confirm payment" });
  }
}
