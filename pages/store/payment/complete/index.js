import { useEffect } from "react";
import { useRouter } from "next/router";

export default function PaymentComplete() {
  const router = useRouter();
  const { orderId, status } = router.query;

  useEffect(() => {
    if (status === "success") {
      // Assume you store order details in local storage or manage state
      const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
      saveOrderDetails(orderId, orderDetails);
    }
  }, [orderId, status]);

  const saveOrderDetails = async (orderId, orderDetails) => {
    try {
      const response = await fetch("/api/store/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId,
          status: "Completed",
          ...orderDetails,
        }),
      });
      const data = await response.json();
      console.log("Order saved:", data);
    } catch (error) {
      console.error("Failed to save order:", error);
    }
  };

  return (
    <div>
      {status === "success" ? (
        <h1>Payment Successful</h1>
      ) : (
        <h1>Payment Failed</h1>
      )}
      <button onClick={() => router.push("/")}>Go to Home</button>
    </div>
  );
}
