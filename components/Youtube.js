import styled from "styled-components";
import YouTubeVideo from "./YoutubeVideo";

const StyledTopMidWraper = styled.div`
  width: 1200px;
  height: 400px;
  margin-top: 20px;
  border: 1px solid lightgray;
`;
const StyledYoutubeTitle = styled.div`
  height: 30px;
  padding-left: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;
const StyledYoutubeContentsWraper = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledYoutubeContents = styled.div`
  width: 700px;
  height: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
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
          <YouTubeVideo
            width={700}
            height={370}
            src="https://www.youtube.com/embed/QW8f4y0RGew"
          />
        </StyledYoutubeContents>
        <StyledProductBox>
          <StyledProductPic></StyledProductPic>
          <StyledProductVideos>
            <YouTubeVideo
              width={120}
              height={70}
              src="https://www.youtube.com/embed/GC15P3b29GY"
            />
            <YouTubeVideo
              width={120}
              height={70}
              src="https://www.youtube.com/embed/GC15P3b29GY"
            />
            <YouTubeVideo
              width={120}
              height={70}
              src="https://www.youtube.com/embed/GC15P3b29GY"
            />
          </StyledProductVideos>
        </StyledProductBox>
      </StyledYoutubeContentsWraper>
    </StyledTopMidWraper>
  );
}
