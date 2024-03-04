import styled from "styled-components";
import YouTubeVideo from "./YoutubeVideo";
import { products, videos } from "../../DataBase/YoutubeDB"; // 데이터 파일에서 상품 데이터 가져오기

const StyledTopMidWraper = styled.div`
  width: 1200px;
  height: 392px;
  margin-top: 20px;
  border: 1px solid lightgray;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // 그림자 추가
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
            src={videos[0]} // 첫 번째 비디오 링크 사용
          />
        </StyledYoutubeContents>
        <StyledYoutubeBox>
          <StyledProductPic>
            <StyledProductPicTitle>관련 상품</StyledProductPicTitle>

            <SyledProductPicBox>
              <StyledProductPicImage>
                <img src={products[0].image} alt="wallet" />
              </StyledProductPicImage>
              <StyledProductPicText>
                <div>{products[0].description}</div>
                <div>{products[0].title}</div>
                <div>{products[0].seller}</div>
              </StyledProductPicText>
            </SyledProductPicBox>
          </StyledProductPic>
          <StyledProductLine></StyledProductLine>
          <StyledProductVideos>
            {videos.slice(1).map(
              (
                src,
                index // 첫 번째를 제외한 나머지 비디오 링크들 사용
              ) => (
                <YouTubeVideo key={index} width={140} height={80} src={src} />
              )
            )}
          </StyledProductVideos>
        </StyledYoutubeBox>
      </StyledYoutubeContentsWraper>
    </StyledTopMidWraper>
  );
}
