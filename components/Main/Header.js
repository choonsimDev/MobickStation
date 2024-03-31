import styled from "styled-components";
import React, { useState } from "react";
import ModalReady from "./ModalReady";
import AuthButtons from "@/components/Main/AuthButtons";
import Center from "./Center";

const HeaderWrapper = styled.div`
  width: 100vw; // 화면 너비에 맞게 조정
  position: absolute; // 부모 컨테이너의 규격을 벗어나도록 설정
  left: 50%; // 중앙 정렬을 위해 설정
  transform: translateX(-50%); // 정확한 중앙 정렬을 위해 설정
  background-color: #f6931a; // 배경색 지정
  @media (max-width: 768px) {
    position: static; // 모바일 화면에서는 position: absolute를 제거하여 기본 흐름에 따르도록 함
    width: 100%; // 모바일 화면에서는 너비를 100%로 조정하여 부모 컨테이너에 맞춤
    transform: none;
    left: 0;
  }
`;

const StyledHeader = styled.div`
  width: 1200px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
      <Center>
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
      </Center>
      {isModalVisible && <ModalReady onClose={hideModal} />}
    </HeaderWrapper>
  );
}
