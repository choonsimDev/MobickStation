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
  /* background-color: lightyellow; */
`;

const StyledYoutubeBox = styled.div`
  width: 500px;
  height: 370px;
  display: flex;
  flex-direction: column;
`;
const StyledProductPic = styled.div`
  width: 500px;
  height: 270px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const StyledProductPicTitle = styled.div`
  width: 100%;
  height: 50px;
  font-size: 14px;
  font-weight: bold;
  padding-top: 20px;
  padding-left: 5px;
`;

const SyledProductPicBox = styled.div`
  width: 500px;
  height: 220px;
  display: flex;
  flex-direction: row;
`;
const StyledProductPicImage = styled.div`
  width: 160px;
  height: 220px;
  display: flex;

  align-items: center;
`;

const StyledProductPicText = styled.div`
  width: 340px;
  height: 230px;

  & > div {
    margin-bottom: 0.9rem;
    padding: 0px 20px;
    margin-top: 1.5rem;
  }
  & > div:first-child {
    margin-top: 1rem;
    font-size: 1rem;
    color: dodgerblue;
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 1rem;
    font-weight: bold;
    color: black;
  }
  & > div:nth-child(3) {
    font-size: 0.8rem;
    text-align: justify;
    font-weight: bold;
    color: gray;
  }
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
            width={640}
            height={360}
            src="https://www.youtube.com/embed/QW8f4y0RGew"
          />
        </StyledYoutubeContents>
        <StyledYoutubeBox>
          <StyledProductPic>
            <StyledProductPicTitle>관련 상품</StyledProductPicTitle>
            <SyledProductPicBox>
              <StyledProductPicImage>
                <img src="/images/wallet_genesis.png" alt="wallet" />
              </StyledProductPicImage>
              <StyledProductPicText>
                <div>
                  <p>누구나 쉽게 사용할 수 있는 비트코인 종이지갑,</p>
                  <p>당신의 암호화폐를 안전하게 보관하세요.</p>
                </div>
                <div>모빌렛 - Genesis Edition</div>
                <div>판매 | 모비커스</div>
              </StyledProductPicText>
            </SyledProductPicBox>
          </StyledProductPic>
          <StyledProductVideos>
            <YouTubeVideo
              width={140}
              height={80}
              src="https://www.youtube.com/embed/GC15P3b29GY"
            />
            <YouTubeVideo
              width={140}
              height={80}
              src="https://www.youtube.com/embed/PEUaW9K087U"
            />
            <YouTubeVideo
              width={140}
              height={80}
              src="https://www.youtube.com/embed/YtaERuB_yCA"
            />
          </StyledProductVideos>
        </StyledYoutubeBox>
      </StyledYoutubeContentsWraper>
    </StyledTopMidWraper>
  );
}
