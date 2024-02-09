import styled from "styled-components";

const StyledTopMidWraper = styled.div`
    width: 1200px;
    height : 600px;
    margin-top: 20px;
    background-color: gray;
`;

const StyledNoticeTitle = styled.div`
    height: 30px;
    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: lightpink;
`;
const StyledMultiSectionContents = styled.div`
    display: flex;
    flex-direction: row;
    & > div {
        width: 50%;
        height: 570px;
        background-color: lightgray;
    }
    & > div:first-child {
 
        background-color: lightblue;
    }
    & > div:last-child {
        background-color: lightgreen;
    }
`;


export default function MultiSectionOTC() {
    return (
        <StyledTopMidWraper>
            <StyledNoticeTitle>NOTICE</StyledNoticeTitle>
            <StyledMultiSectionContents>
                <div>EVENT</div>
                <div>BOOK</div>
            </StyledMultiSectionContents>
        </StyledTopMidWraper>
    );
}