import Styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
// import Link from "next/link";
// import Image from "next/image";

const StyledLogoSearchWrapper = Styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
const StyledLogoBox = Styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
        text-decoration: none;
        color: black;
    `;

const StyledSearchWrapper = Styled.div`
    width: 40%;
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
    border: 1px solid black;
    border-radius: 5px;
    border-color: lightgray;
    margin-left: 10px;
    padding: 5px;
`;

const StyledNavigation = Styled.div`
    height: 40px;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem; 
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightgray;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // 그림자 추가
    & div {
        display: flex;
        gap: 2rem;
    }
`;
const StyledLink = Styled.a`
    text-decoration: none;
    color: black;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: 0; // 왼쪽 끝에서 시작
        bottom: -7px;
        width: 100%;
        height: 1px;
        background-color: gray;
        transform: scaleX(0);
        transform-origin: 50%; // 확대/축소의 기준점을 가로축의 중앙으로 설정
        transition: transform 0.3s ease;
    }

    &:hover:after {
        transform: scaleX(1); // 호버 시 양쪽으로 펼쳐지도록 설정
    }
`;

export default function LogoAndSearch() {
  return (
    <StyledLogoSearchWrapper>
      <StyledLogoBox>
        <StyledLogo>
          <StyledLogoLink href="/">모빅 스테이션</StyledLogoLink>
        </StyledLogo>
        <StyledSearchWrapper>
          <StyledInput placeholder="비트모빅 종이지갑"></StyledInput>
          <div>
            <IoSearchOutline />
          </div>
        </StyledSearchWrapper>
      </StyledLogoBox>
      <StyledNavigation>
        <div>
          <StyledLink href="/bestProducts">베스트</StyledLink>
          <StyledLink href="/newProducts">신상품</StyledLink>
          <StyledLink href="/event">이벤트</StyledLink>
          <StyledLink href="/community">커뮤니티</StyledLink>
          <StyledLink href="/trade">중고거래</StyledLink>
          <StyledLink href="/limited">한정상품</StyledLink>
          <StyledLink href="/sales">특가할인</StyledLink>
          <StyledLink href="/volume">대량/법인</StyledLink>
        </div>
      </StyledNavigation>
    </StyledLogoSearchWrapper>
  );
}
