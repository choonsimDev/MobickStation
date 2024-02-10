import styled from "styled-components";
import YouTubeVideo from "./YoutubeVideo";

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

const StyledProductBox = styled.div`
    width: 500px;
    height: 370px;
    display: flex;
    flex-direction: column;

`;
const StyledProductPic = styled.div`
width: 500px;
height: 270px;
`;
const StyledProductVideos = styled.div`
width: 500px;
height: 100px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`;


export default function Youtube() {
    return (
        <StyledTopMidWraper>
            <StyledYoutubeTitle>Youtube</StyledYoutubeTitle>
            <StyledYoutubeContentsWraper>
                <StyledYoutubeContents>
                    <YouTubeVideo width={700} height={370} src="https://www.youtube.com/embed/gqW0GELqDk4" />
                </StyledYoutubeContents>
                <StyledProductBox>
                    <StyledProductPic></StyledProductPic>
                    <StyledProductVideos>
                        <YouTubeVideo width={120} height={80} src="https://www.youtube.com/embed/GC15P3b29GY" />
                        <YouTubeVideo width={120} height={80} src="https://www.youtube.com/embed/GC15P3b29GY" />
                        <YouTubeVideo width={120} height={80} src="https://www.youtube.com/embed/GC15P3b29GY" />
                    </StyledProductVideos>
                </StyledProductBox>
            </StyledYoutubeContentsWraper>
        </StyledTopMidWraper>
    );
}
