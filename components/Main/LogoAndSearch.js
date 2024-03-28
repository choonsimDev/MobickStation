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
    width: 500px;
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
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #f6931a;

`;
const StyledLink = Styled.a`
  display: flex;
  gap: 3rem;
  position: relative;
  cursor: pointer;
  
  & div:first-child {
    color: #f6931a;
    font-weight: bold;
  }

  & div {
    color: black;
    position: relative; // 각 div에 대해 position을 relative로 설정

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
  }
`;

export default function LogoAndSearch() {
  return (
    <StyledLogoSearchWrapper>
      <StyledLogoBox>
        <StyledLogo>
          <div>
            <img src="/images/Logo_01.png" alt="Logo" width={60} />
          </div>
          <StyledLogoLink href="/">MOBICK STATION</StyledLogoLink>
        </StyledLogo>
        <StyledSearchWrapper>
          <StyledInput placeholder="비트모빅 종이지갑"></StyledInput>
          <div>
            <IoSearchOutline />
          </div>
        </StyledSearchWrapper>
      </StyledLogoBox>
      <StyledNavigation>
        <StyledLink>
          <div href="/community">커뮤니티</div>
          <div href="/bestProducts">베스트</div>
          <div href="/newProducts">신상품</div>
          <div href="/event">이벤트</div>
          {/* <StyledLink href="/trade">중고거래</StyledLink>
          <StyledLink href="/limited">한정상품</StyledLink>
          <StyledLink href="/sales">특가할인</StyledLink>
          <StyledLink href="/volume">대량/법인</StyledLink> */}
        </StyledLink>
      </StyledNavigation>
    </StyledLogoSearchWrapper>
  );
}
