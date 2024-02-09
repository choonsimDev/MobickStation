import styled from "styled-components";

const StyledTopMidWraper = styled.div`
    width: 1200px;
    height : 400px;
    margin-top: 20px;
    background-color: lightgray;
`;
const StyledYoutubeTitle = styled.div`
    height: 30px;
    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: lightpink;
`;
const StyledYoutubeContentsWraper = styled.div`
    display: flex;
    flex-direction: row;
`;
const StyledYoutubeContents = styled.div`
    width: 700px;
    height: 370px;
    background-color: lightyellow;
`;


export default function Youtube() {
    return (
        <StyledTopMidWraper>
            <StyledYoutubeTitle>Youtube</StyledYoutubeTitle>
            <StyledYoutubeContentsWraper>
                <StyledYoutubeContents>youtube</StyledYoutubeContents>
                <div>관련상품</div>
            </StyledYoutubeContentsWraper>
        </StyledTopMidWraper>
    );
}