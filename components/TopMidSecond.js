import styled from "styled-components";

const StyledTopMidWraper = styled.div`
    width: 1200px;
    height : 400px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    background-color: lightgray;
`;

const StyledPopularBook = styled.div`
    width: 959px;
    height: 400px;
    background-color: lightgreen;
`;
const StyledPopBook = styled.div`
    width: 238px;
    height: 400px;
    background-color: lightgray;
`;


export default function TopMidSecond() {
    return (
        <StyledTopMidWraper>
            <StyledPopularBook>PopularBook</StyledPopularBook>
            <StyledPopBook>PopBook</StyledPopBook>
        </StyledTopMidWraper>
    );
}