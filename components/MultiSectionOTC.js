import styled from "styled-components";

const StyledTopMidWraper = styled.div`
    width: 1200px;
    height : 600px;
    margin-top: 20px;
    border: 1px solid lightgray;
`;

const StyledNoticeTitle = styled.div`
    height: 30px;
    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid lightgray;
`;
const StyledMultiSectionContents = styled.div`
    display: flex;
    flex-direction: row;
    & > div {
        width: 50%;
        height: 570px;

    }
    & > div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid lightgray;
 
    }
    & > div:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
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