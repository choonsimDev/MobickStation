import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "@/components/Main/Header";
import Center from "@/components/Main/Center";
import LogoAndSearch from "@/components/Main/LogoAndSearch";
import Footer from "@/components/Main/Footer";
import ModalPagePreparing from "@/components/Modal/ModalPagePreparing";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDiv2 = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledTitle = styled.div`
  width: 1200px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const StyledItemClass = styled.div`
  width: 1200px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
  & div:nth-child(1) {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & div:nth-child(2) {
    width: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & div:nth-child(3) {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & div:nth-child(4) {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & div:nth-child(5) {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledCartListWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex;
`;

const StyledCheckboxContainer = styled.div`
  width: 50px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
`;

const StyledCartList = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledCartListItem = styled.div`
  width: 650px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid lightgray;
  gap: 12px;
`;

const StyledCartListItemImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  padding: 10px;
  border: 1px solid lightgray;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
`;

const StyledCartListQuantity = styled.div`
  width: 100px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
`;

const StyledCartListPrice = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
`;

const StyledCartListDelivery = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
`;

const StyledTotalOrderWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledTotalOrderTitle = styled.div`
  width: 1200px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
  font-size: 20px;
  margin-top: 20px;
`;

const StyledTotalOrderDetail = styled.div`
  width: 1200px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
  font-size: 20px;
  margin-top: 20px;
  gap: 20px;
`;

const StyledOrderButtonBox = styled.div`
  width: 1200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid #f6931a;
`;

const StyledOrderButton = styled.button`
  width: 240px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #f6931a;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e5821a;
  }
`;

const StyledCartAd = styled.div`
  width: 1200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: 1px solid lightgray;
  background-color: lightgray;
`;

const StyledBack = styled.a`
  top: 20px;
  left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #999999;
  text-decoration: none;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Cart() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(true); // 페이지 로드 시 모달을 자동으로 열기
  }, []);

  const closeModal = () => {
    setIsModalVisible(false); // 모달 닫기 함수
  };

  return (
    <StyledDiv>
      {isModalVisible && <ModalPagePreparing onClose={closeModal} />}

      <Header />
      <Center>
        <LogoAndSearch />
        <StyledDiv2>
          <StyledTitle>장바구니</StyledTitle>
          <StyledItemClass>
            <div>선택</div>
            <div>상품정보</div>
            <div>수량</div>
            <div>주문금액</div>
            <div>배송정보</div>
          </StyledItemClass>
          <StyledCartListWrapper>
            <StyledCartList>
              <StyledCheckboxContainer>
                <input type="checkbox" />
              </StyledCheckboxContainer>
              <StyledCartListItem>
                <StyledCartListItemImage src="/images/preparition_01.png" />
                <div>상품정보</div>
              </StyledCartListItem>
              <StyledCartListQuantity>수량</StyledCartListQuantity>
              <StyledCartListPrice>주문금액</StyledCartListPrice>
              <StyledCartListDelivery>배송정보</StyledCartListDelivery>
            </StyledCartList>
          </StyledCartListWrapper>
          <StyledTotalOrderWrapper>
            <StyledTotalOrderTitle>총 주문상품 </StyledTotalOrderTitle>
            <StyledTotalOrderDetail>
              <p>(상품금액 + 배송비 = 000,000원)</p>
              <p>총 주문상품 Detail</p>
            </StyledTotalOrderDetail>
          </StyledTotalOrderWrapper>
          <StyledOrderButtonBox>
            <StyledOrderButton>주문하기</StyledOrderButton>
            <StyledBack href="/">계속 쇼핑하기</StyledBack>
          </StyledOrderButtonBox>
          <StyledCartAd>CartAd</StyledCartAd>
        </StyledDiv2>
      </Center>
      <Footer />
    </StyledDiv>
  );
}
