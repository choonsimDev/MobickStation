import styled from "styled-components";

const StyledTopMidWraper = styled.div`
    width: 1200px;
    height : 400px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    background-color: gray;
`;
const StyledNewsSection = styled.div`
    width: 400px;

    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: lightpink;
`;
const StyledNewsContents = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    & > div {
        width: 800px;
        height: 370px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: lightyellow;
    }
`;


export default function NewsSection() {
    return (
        <StyledTopMidWraper>
            <StyledNewsSection>
                NewsSection
            </StyledNewsSection>
            <StyledNewsContents>
                <div>오태민 컬럼</div>
                <div>토닥토닥</div>
            </StyledNewsContents>
        </StyledTopMidWraper>
    );
}