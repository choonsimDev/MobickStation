import Styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

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
    & img {
      width: 50px;
    }
    & div {
      font-size: 1rem;
      font-weight: 600;
      color: #999999;
    }
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
    border-color: lightblue;
    margin-left: 10px;
    padding: 5px;
    
`;

const StyledNavigation = Styled.div`
    height: 40px;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightblue;
    & div {
        display: flex;
        gap: 2rem;
    }
    /* & div:first-child {
        font-size: 0.9rem;
    }
    & div:last-child {
        font-size: 0.8rem;
        font-weight: 200;
    } */
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
        height: 2px;
        background-color: blue;
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
          <img src="/images/btcmobicklogo.png" alt="logo" width={50} height={50} />
          <div>BTCmobick</div>
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
          <StyledLink href="#">베스트</StyledLink>
          <StyledLink href="#">신상품</StyledLink>
          <StyledLink href="#">이벤트</StyledLink>
          <StyledLink href="#">커뮤니티</StyledLink>
          <StyledLink href="#">모빅당근</StyledLink>
        </div>
        <div>
          <StyledLink href="#">한정상품</StyledLink>
          <StyledLink href="#">특가할인</StyledLink>
          <StyledLink href="#">대량/법인</StyledLink>
        </div>
      </StyledNavigation>
    </StyledLogoSearchWrapper>
  );
}
