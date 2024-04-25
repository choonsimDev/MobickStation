import { useState } from "react";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import styled from "styled-components";
import Header from "@/components/common/Header";
import Center from "@/components/common/Center";
import Logo from "@/components/common/Logo";
import Footer from "@/components/common/Footer";
import ModalPagePreparing from "@/components/modal/ModalPagePreparing";

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

export default function OrderPage() {
  const handleClick = async () => {
    try {
      const TossPayments = await loadTossPaymentsScript();
      const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;
      const tossPayments = TossPayments(clientKey);

      await tossPayments.requestPayment("카드", {
        amount: 1000,
        orderId: "123456",
        orderName: "테스트 주문",
        successUrl: "https://mobickstation/store/payment/complete",
        failUrl: "https://example.com/fail",
      });
    } catch (error) {
      console.error("토스 결제 초기화 실패:", error);
      alert("결제 실패: " + error.message);
    }
  };

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

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("주문 데이터:", orderData);
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
            <TossButton type="button" onClick={handleClick}>
              토스페이
            </TossButton>{" "}
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
          <Section>
            <h2>Order Details</h2>
            <p>Store Name: 스토어 이름</p>
            <p>
              Product Details: 상품 이미지, 상품 타이틀, 상품 설명, 가격, 수량
            </p>
            <p>Total Product Price: 100,000원</p>
            <p>Shipping Fee: 3,000원</p>
            <p>Total Price: 103,000원</p>
          </Section>
          <SubmitButton type="submit">주문하기</SubmitButton>
        </Form>
      </Center>
      <Footer />
    </StyledDiv>
  );
}
