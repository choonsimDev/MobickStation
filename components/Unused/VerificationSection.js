import styled from "styled-components";

const StyledTopMidWraper = styled.div`
    width: 1200px;
    height : 400px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    border: 1px solid lightgray;
`;
const StyledNewsSection = styled.div`
    width: 800px;
    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-right: 1px solid lightgray;
`;
const StyledNewsContents = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    & > div {
        width: 400px;
        height: 740px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


export default function VerificationSection() {
    return (
        <StyledTopMidWraper>
            <StyledNewsSection>
                wallet verification
            </StyledNewsSection>
            <StyledNewsContents>
                <div>인터뷰</div>
            </StyledNewsContents>
        </StyledTopMidWraper>
    );
}