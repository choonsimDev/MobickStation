import Styled from 'styled-components';

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;

`;
const StyledLogo = Styled.div`
    height: 100px;
    width: 100%;
    background-color: red;
`;
const StyledSearch = Styled.div`
    height: 40px;
    width: 100%;
    background-color: blue;
`;

export default function LogoAndSearch() {
    return (
        <StyledDiv>
            <StyledLogo>로고</StyledLogo>
            <StyledSearch>검색</StyledSearch>
        </StyledDiv>
    );
}