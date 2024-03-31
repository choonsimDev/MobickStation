import styled from "styled-components";
import React, { useState } from "react";
import ModalReady from "./ModalReady";
import AuthButtons from "@/components/Main/AuthButtons";
import Center from "./Center";

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6931a;
`;

const StyledHeader = styled.div`
    width: 1200px;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
  & > div {
    height: 20px;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
  
  }
`;

const StyledLink = styled.a`
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Header() {
  // 모달 표시 상태를 관리하는 상태 변수와 setter 함수
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 모달을 표시하는 함수
  const showModal = () => {
    setIsModalVisible(true);
  };

  // 모달을 숨기는 함수
  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <HeaderWrapper>
      <StyledHeader>
        <div>
          <StyledLink href="/store">종이지갑</StyledLink>
          <StyledLink href="/store">강연 및 서적</StyledLink>
          <StyledLink href="/store">굿즈</StyledLink>
          <StyledLink href="/store">식품</StyledLink>
          <StyledLink href="/store">패션</StyledLink>
          <StyledLink href="/community">커뮤니티</StyledLink>
          {/* <StyledLink href="/preparing">모빅정보</StyledLink> */}
        </div>
        <div>
          <AuthButtons>로그인</AuthButtons>
          <StyledLink onClick={showModal}>회원가입</StyledLink>
          <StyledLink href="/cart">장바구니</StyledLink>
          <StyledLink onClick={showModal}>주문조회</StyledLink>
          <StyledLink onClick={showModal}>고객센터</StyledLink>
        </div>
      </StyledHeader>
      {isModalVisible && <ModalReady onClose={hideModal} />}
    </HeaderWrapper>
  );
}
