import styled from "styled-components";

const StyledTopMidWraper = styled.div`
    width: 1200px;
    height : 400px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    background-color: lightgray;
`;

const StyledNowBook = styled.div`
    width: 959px;
    height: 400px;
    background-color: lightgreen;
`;
const StyledPubBook = styled.div`
    width: 238px;
    height: 400px;
    background-color: lightgray;
`;


export default function TopMid() {
    return (
        <StyledTopMidWraper>
            <StyledNowBook>NowBook</StyledNowBook>
            <StyledPubBook>PubBook</StyledPubBook>
        </StyledTopMidWraper>
    );
}