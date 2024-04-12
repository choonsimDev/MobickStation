import styled from "styled-components";
import SwiperBanner from "../Main/Swiper";

const StyledTopMidWraper = styled.div`
  width: 1200px;
  height: 400px;

  margin-top: 20px;
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
`;

const StyledNowBook = styled.div`
  width: 959px;
  height: 398px;
  display: flex;
  flex-direction: column;
`;
const StyledNowBookTitle = styled.div`
  width: 959px;
  height: 30px;
  padding-left: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const StyledNowBookList = styled.div`
  width: 959px;
  height: 370px;
  background-color: lightyellow;
`;
const StyledPubBook = styled.div`
  width: 238px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid lightgray;
`;
const StyledPubBookTitle = styled.div`
  width: 238px;
  height: 30px;
  padding-left: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const StyledPubBookImage = styled.div`
  width: 200px;
  height: 340px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

export default function PopularBooks() {
  return (
    <StyledTopMidWraper>
      <StyledPubBook>
        <StyledPubBookTitle>PopBooks</StyledPubBookTitle>
        <StyledPubBookImage>이미지</StyledPubBookImage>
      </StyledPubBook>
      <StyledNowBook>
        <StyledNowBookTitle>PopularBooks</StyledNowBookTitle>
        <StyledNowBookList>
          <SwiperBanner />
        </StyledNowBookList>
      </StyledNowBook>
    </StyledTopMidWraper>
  );
}
