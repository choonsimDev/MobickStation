import Styled from "styled-components";

const StyledLogoSearchWrapper = Styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

`;
const StyledLogo = Styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 6rem;  
    background-color: lightyellow;
`;
const StyledInput = Styled.input`
    width: 40%;
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
        gap: 1rem;
    }
`;
const StyledLink = Styled.a`
    text-decoration: none;
    color: black;
`;

export default function LogoAndSearch() {
  return (
    <StyledLogoSearchWrapper>
      <StyledLogo>
        <img src="/images/logo.png" alt="logo" />
        <StyledInput placeholder="비트모빅 종이지갑"></StyledInput>
      </StyledLogo>
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
