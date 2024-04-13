import styled from "styled-components";
import React, { useState } from "react";
import ModalReady from "@/components/Modal/ModalReady";
import AuthButtons from "@/components/Main/AuthButtons";

const HeaderWrapper = styled.div`
  width: 100vw; // 화면 너비에 맞게 조정
  position: absolute; // 부모 컨테이너의 규격을 벗어나도록 설정
  left: 50%; // 중앙 정렬을 위해 설정
  transform: translateX(-50%); // 정확한 중앙 정렬을 위해 설정
  background-color: #f6931a; // 배경색 지정
  display: flex; // 자식 요소를 가로로 나열
  justify-content: center;
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
  //ReadyModal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      {isModalVisible && <ModalReady onClose={hideModal} />}
      <HeaderWrapper>
        <StyledHeader>
          <div>
            <StyledLink href="/store">종이지갑</StyledLink>
            <StyledLink href="/store">굿즈</StyledLink>
            <StyledLink href="/store">생활용품</StyledLink>
            <StyledLink href="/store">상생마켓</StyledLink>
            {/* <StyledLink href="/community/mobicker">커뮤니티</StyledLink> */}
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
      </HeaderWrapper>
    </div>
  );
}
