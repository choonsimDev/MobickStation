import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "@/components/common/Header";
import Center from "@/components/common/Center";
import Logo from "@/components/common/Logo";
import Footer from "@/components/common/Footer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  width: 100%;
  max-width: 600px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
const Section = styled.section`
  margin-bottom: 20px;
`;
const OrderDetailSection = styled.section`
  margin-bottom: 20px;
  & div:nth-child(1) {
    font-size: 20px;
    font-weight: bold;
  }
  & div:nth-child(2) {
    font-size: 16px;
    font-weight: bold;
  }
  & div:nth-child(3) {
    font-size: 16px;
    font-weight: bold;
  }
  & div:nth-child(4) {
    font-size: 16px;
    font-weight: bold;
  }
  & div:nth-child(5) {
    font-size: 16px;
    font-weight: bold;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;
const Button = styled.button`
  background-color: #f6931a;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: darken(#f6931a, 10%);
  }
`;
const TossButton = styled.button`
  background-color: #0064ff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: darken(#0064ff, 10%);
  }
`;
const NaverButton = styled.button`
  background-color: #2db400;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: darken(#2db400, 10%);
  }
`;
const KakaoButton = styled.button`
  background-color: #fee500;
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: darken(#fee500, 10%);
  }
`;
const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;

// 토스 결제 SDK 로드
function loadTossPaymentsScript() {
  return new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && !window.TossPayments) {
      const script = document.createElement("script");
      script.src = "https://js.tosspayments.com/v1";
      script.onload = () => resolve(window.TossPayments);
      script.onerror = () => reject(new Error("토스 결제 SDK 로드 실패"));
      document.head.appendChild(script);
    } else {
      resolve(window.TossPayments);
    }
  });
}

export default function PaymentPage() {
  const router = useRouter();
  const { id, quantity, totalPrice } = router.query;
  const [product, setProduct] = useState(null);
  const [success, setSuccess] = useState(false);
  const [orderData, setOrderData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    recipient: "",
    contact1: "",
    contact2: "",
    address: "",
    deliveryNote: "",
    paymentMethod: "",
  });

  useEffect(() => {
    if (id) {
      fetch(`/api/store/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    try {
      const TossPayments = await loadTossPaymentsScript();
      const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;
      const tossPayments = TossPayments(clientKey);

      await tossPayments.requestPayment("카드", {
        amount: totalPrice,
        orderId: `order_${new Date().getTime()}`,
        orderName: product.name,
        successUrl: "https://mobickstation.com/store/payment/complete",
        failUrl: "https://mobickstation.com/store/payment/fail",
      });

      submitOrderData();
    } catch (error) {
      console.error("토스 결제 초기화 실패:", error);
    }
  };

  const submitOrderData = async () => {
    const dbOrderData = {
      orderId: `order_${new Date().getTime()}`,
      orderName: product?.name,
      status: "success",
      total: totalPrice,
      productId: product?.id,
      customerInfo: orderData,
    };

    console.log("Submitting order data:", dbOrderData);

    try {
      const response = await fetch("/api/store/orders/create", {
        method: "POST",
        body: JSON.stringify(dbOrderData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("Response from order create:", data);
    } catch (error) {
      console.error("Failed to submit order data:", error);
      alert("Failed to submit order data. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment();
  };

  return (
    <StyledDiv>
      <Header />
      <Center>
        <Logo />
        <Form onSubmit={handleSubmit}>
          <h1>주문 / 결제</h1>
          {/* 주문자정보 */}
          <Section>
            <h2>주문자 정보</h2>
            <Input
              type="text"
              name="name"
              placeholder="이름을 입력해주세요."
              onChange={handleChange}
            />
            <Input
              type="tel"
              name="phone"
              placeholder="전화번호를 입력해주세요."
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="주문 내역을 받을 이메일을 입력해주세요."
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="주문 내역을 확인할 비밀번호를 입력해주세요"
              onChange={handleChange}
            />
          </Section>
          {/* 배송지정보 */}
          <Section>
            <h2>배송지 정보</h2>
            <Input
              type="text"
              name="recipient"
              placeholder="수령인 이름을 적어주세요."
              onChange={handleChange}
            />
            <Input
              type="tel"
              name="contact1"
              placeholder="연락처 1"
              onChange={handleChange}
            />
            <Input
              type="tel"
              name="contact2"
              placeholder="연락처 2"
              onChange={handleChange}
            />
            <div>
              <Button type="button">우편번호 검색</Button>
              <Input
                type="text"
                name="address"
                placeholder="주소 입력"
                onChange={handleChange}
              />
            </div>
            <div>배송 메모</div>
            <select name="deliveryNote" onChange={handleChange}>
              <option value="">배송 전에 미리 연락바랍니다.</option>
              <option value="call_first">부재 시 경비실에 맡겨주세요.</option>
              <option value="leave_at_security">
                부재 시 문앞에 놔주세요.
              </option>
              <option value="custom">직접 입력</option>
            </select>
          </Section>
          {/* 결제방법 선택 */}
          <Section>
            <h2>결제 방법 선택</h2>
            <TossButton onClick={handlePayment}>토스페이</TossButton>

            <NaverButton
              type="button"
              onClick={() =>
                setOrderData({ ...orderData, paymentMethod: "naverpay" })
              }
            >
              Naver Pay
            </NaverButton>
            <KakaoButton
              type="button"
              onClick={() =>
                setOrderData({ ...orderData, paymentMethod: "kakaopay" })
              }
            >
              카카오페이
            </KakaoButton>
            <Button
              type="button"
              onClick={() =>
                setOrderData({ ...orderData, paymentMethod: "bank_transfer" })
              }
            >
              실시간 계좌이체
            </Button>
          </Section>
          <OrderDetailSection>
            <div>Order Details</div>
            {product && (
              <>
                <div>상품명 : {product.name}</div>
                <div>가격 : {product.price}</div>
                <div>주문 수량 : {quantity}</div>
                <div>Total Price: {totalPrice}</div>
              </>
            )}
          </OrderDetailSection>
          <SubmitButton type="submit">주문하기</SubmitButton>
        </Form>
      </Center>
      <Footer />
    </StyledDiv>
  );
}
