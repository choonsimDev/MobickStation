import styled from "styled-components";

const StyledTopMidWraper = styled.div`
    width: 1200px;
    height : 600px;
    margin-top: 20px;
    background-color: gray;
`;
const StyledMarketTitle = styled.div`
    height: 30px;
    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: lightpink;
`;


export default function Market() {
    return (
        <StyledTopMidWraper>
            <StyledMarketTitle>
                Market
            </StyledMarketTitle>
        </StyledTopMidWraper>
    );
}