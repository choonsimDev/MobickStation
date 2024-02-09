import Styled from "styled-components";

const StyledDiv = Styled.div`
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
    justify-content: center;
    align-items: center;
    background-color: lightyellow;
`;
const StyledSearch = Styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
`;

export default function LogoAndSearch() {
  return (
    <StyledDiv>
      <StyledLogo>로고</StyledLogo>
      <StyledSearch>검색</StyledSearch>
    </StyledDiv>
  );
}
