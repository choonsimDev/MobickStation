import Styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import React, { useState } from "react";
import AuthButtons from "../auth/AuthButtons";
import ModalReady from "../modal/ModalReady";
// import Link from "next/link";
// import Image from "next/image";

const StyledHeader = Styled.div`
    width: 1920px;
    height: 80px;
    display: flex;
    padding-left: 50px;
    padding-right: 50px;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
    border-bottom: 1px solid #e5e5e5 ;
`;

const Divider = Styled.span`
  margin: 0 10px;
  color: #e5e5e5;
`;

const StyledLogoBox = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    & div {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
`;

const StyledLogo = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    cursor: pointer;
    & div:first-child {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

const StyledLinkFirst = Styled.a`
    color: #0078FF;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    gap: 20px;
    
    &:after { // 기본 :after 스타일 정의
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 1px;
      background-color: #f6931a;
      transform: scaleX(0); // 초기 상태에서는 가로 길이 0으로 설정
      transform-origin: 50%;
      transition: transform 0.3s ease;
    }
    &:hover:after { // div에 마우스를 올렸을 때 :after 스타일 변경
      transform: scaleX(1); // 호버 시 scaleX를 1로 설정하여 전체 너비로 확장
    }

`;

const SearchLoginBox = Styled.div`
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
`;

const SearchBar = Styled.div`
    width: 400px;
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 20px;
`;

const StyledInput = Styled.input`
    height: 44px;
    background-color: #f2f2f2;
    border: none;
    border-radius: 10px;
    font-size: 20px;
`;

export default function LogoAndSearch() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <StyledHeader>
      <StyledLogoBox>
        <StyledLogo>
          <img
            src="/images/logo/Logo_MobickStation_Black.png"
            alt="Logo"
            width={240}
          />
        </StyledLogo>
        <Divider>|</Divider>

        <div>
          <StyledLinkFirst onClick={showModal}>쇼핑몰</StyledLinkFirst>
          <StyledLinkFirst href="/community/mobicker">커뮤니티</StyledLinkFirst>
        </div>
      </StyledLogoBox>
      {/* {isModalVisible && <ModalReady onClose={hideModal} />} */}
      <SearchLoginBox>
        <SearchBar>
          <StyledInput placeholder="비트모빅 종이지갑"></StyledInput>
          <img src="/images/buttons/search.png" alt="Logo" width={24} />{" "}
        </SearchBar>
        <AuthButtons />
      </SearchLoginBox>
    </StyledHeader>
  );
}
