import styled from "styled-components";
import YouTubeVideo from "./YoutubeVideo";

const StyledTopMidWraper = styled.div`
  width: 1200px;
  height: 392px;
  margin-top: 20px;
  border: 1px solid lightgray;
`;
const StyledYoutubeTitle = styled.div`
  height: 30px;
  padding-left: 30px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;
const StyledYoutubeContentsWraper = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledYoutubeContents = styled.div`
  width: 700px;
  height: 370px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 12px;
  /* background-color: lightyellow; */
`;

const StyledYoutubeBox = styled.div`
  width: 598px;
  height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 30px;
  font-size: 14px;
  margin-left: 5px;
  margin-top: 5px;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
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
  cursor: pointer;
`;

const StyledProductPicText = styled.div`
  width: 340px;
  height: 230px;
  margin-top: 0.5rem;

  & > div {
    margin-bottom: 0.9rem;
    padding: 0px 20px;
    margin-top: 1.5rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
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
  width: 480px;
  height: 92px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2.5rem;
  align-items: end;
`;

const StyledProductLine = styled.div`
  width: 500px;
  height: 1px;
  background-color: whitesmoke;
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
          <StyledProductLine></StyledProductLine>
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
