export default async function handler(req, res) {
  const { orderId, paymentKey, amount } = req.query;
  const secretKey = process.env.TOSS_SECRET_KEY;

  const url = `https://api.tosspayments.com/v1/payments/payments/confirm`;
  const basicToken = Buffer.from(`${secretKey}:`, `utf-8`).toString("base64");

  await fetch(url, {
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
  }).then((response) => response.json());

  res.redirect("/store/payment/complete?orderId=${orderId}");
}
