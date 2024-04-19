import Styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import React, { useState } from "react";
import ModalReady from "../modal/ModalReady";
// import Link from "next/link";
// import Image from "next/image";

const StyledLogoSearchWrapper = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    @media (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
  }
`;

const StyledLogoBox = Styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 6rem;  
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

const StyledLogoLink = Styled.a`
    position: relative;
    font-size: 28px;
    font-weight: bold;
    text-decoration: none;
        text-decoration: none;
        color: black;
        margin-left: 10px;
    `;

const StyledSearchWrapper = Styled.div`
    width: 600px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    & div {
      position: relative;
      left: -50px;
      top: 2px;
      font-size: 1.2rem;  
    }
`;
const StyledInput = Styled.input`
    width: 100%;
    height: 40px;
    border: 3px solid #f6931a;
    border-radius: 5px;
    border-color: #f6931a;
    margin-left: 10px;
    padding: 5px;
`;

const StyledNavigation = Styled.div`
    height: 40px;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem; 
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #f6931a;
    & div {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    position: relative;

  cursor: pointer;
}


`;
const StyledLinkFirst = Styled.a`
    color: #f6931a;
    font-weight: bold;
    text-decoration: none;
    text-align: flex-end;
    position: relative;



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

const StyledLink = Styled.a`
   color: black;
    /* font-weight: bold; */
    text-decoration: none;
    position: relative;
    text-align: flex-end;



    &:after { // 기본 :after 스타일 정의
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 1px;
      background-color: gray;
      transform: scaleX(0); // 초기 상태에서는 가로 길이 0으로 설정
      transform-origin: 50%;
      transition: transform 0.3s ease;
    }

    &:hover:after { // div에 마우스를 올렸을 때 :after 스타일 변경
      transform: scaleX(1); // 호버 시 scaleX를 1로 설정하여 전체 너비로 확장
    }

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
    <StyledLogoSearchWrapper>
      <StyledLogoBox>
        <StyledLogo>
          <div>
            <img src="/images/logo/Logo_01.png" alt="Logo" width={60} />
          </div>
          <StyledLogoLink href="/">MOBICK STATION</StyledLogoLink>
        </StyledLogo>
        <StyledSearchWrapper>
          <StyledInput placeholder="비트모빅 종이지갑"></StyledInput>
          <div>
            <IoSearchOutline onClick={showModal} />
          </div>
        </StyledSearchWrapper>
      </StyledLogoBox>
      <StyledNavigation>
        <div>
          <StyledLinkFirst onClick={showModal}>모린이 가이드</StyledLinkFirst>
          <StyledLinkFirst href="/community/mobicker">커뮤니티</StyledLinkFirst>
          <StyledLink onClick={showModal}>베스트</StyledLink>
          <StyledLink onClick={showModal}>신상품</StyledLink>
          <StyledLink onClick={showModal}>이벤트</StyledLink>

          {/* <StyledLink href="/trade">중고거래</StyledLink>
          <StyledLink href="/limited">한정상품</StyledLink>
          <StyledLink href="/sales">특가할인</StyledLink>
          <StyledLink href="/volume">대량/법인</StyledLink> */}
        </div>
      </StyledNavigation>
      {isModalVisible && <ModalReady onClose={hideModal} />}
    </StyledLogoSearchWrapper>
  );
}
