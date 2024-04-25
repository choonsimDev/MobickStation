export default async function Page() {
  const secretKey = process.env.TOSS_SECRET_KEY || "";
  const basicToken = Buffer.from(`${secretKey}:`, `utf-8`).toString(base64);

  const url = `https://api.tosspayments.com/v1/payments/orders/${searchParams.orderId}`;
  const payments = await fetch(url, {
    headers: {
      Authorization: `Basic ${basicToken}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  const { card } = payments;
  return (
    <div>
      <h1>결제가 완료되었습니다.</h1>
      <ul>
        <li>결제 상품: {payments.orderName}</li>
        <li>주문번호: {payments.orderId}</li>
        <li>카드사: {payments.company}</li>
        <li>카드번호: {card.company}</li>
        <li>결제금액: {card.amount}</li>
        <li>
          결제일시: {Intl.DateTimeFormat().format(new Date(payments.approveAt))}
        </li>
      </ul>
    </div>
  );
}
