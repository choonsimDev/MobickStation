import styled from "styled-components";
import React, { useState } from "react";

const StyledBannerWrapper = styled.div`
  width: 1200px;
  height: 421px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: gray;
  text-align: center;
`;

const MainCategory = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  padding: 20px 0;
  background-color: lightpink;
`;

const MainCategoryItem = styled.div`
  margin: 5px 0;
  margin-left: 10px;
  text-align: left;
`;

const DetailCategory = styled.div`
  width: 10%;
  height: 100%;
  background-color: lightgray;
`;

const DetailCategoryItem = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  text-align: left;
`;

const MainBanner = styled.div`
  background-color: blue;
  width: 80%;
  height: 100%;
`;

const MainBannerImgBox = styled.div`
  height: 80%;
  background-color: lightblue;
`;
const MainBannerImgButton = styled.div`
  height: 20%;
  background-color: lightpink;
`;

const detailCategories = {
  "강연 및 서적": [
    "강연",
    "회랑학파 강의",
    "오태민 칼럼",
    "오독클 추천 책",
    "인터넷 강의",
  ],
  "굿즈 ": [
    "퍼즐",
    "장난감/인형",
    "타로카드",
    "겜블",
    "포커/바카라",
    "브라만의 눈물",
    "웹툰",
  ],
  "특별상품 ": ["에어드랍 지갑", "비트맥시 에디션", "모빅 빌런즈"],
  "종이지갑 ": ["주성원", "알약", "오프라인 판매점"],
  "상생마켓 게시판": [
    "식료품",
    "가전제품",
    "패션",
    "전자기기",
    "카페",
    "종합쇼핑몰",
    "오프라인매장",
  ],
  "커뮤니티 ": [
    "모빅당근",
    "춘심 OTC",
    "모빅회관",
    "위조검증",
    "공지사항",
    "모빅회관",
    "이벤트",
    "리뷰",
  ],
  "모빅 정보": ["춘심 퀀트", "지갑 설명", "모빅 앱"],
};

export default function Banner() {
  const [selectedCategory, setSelectedCategory] = useState("강연 및 서적");

  return (
    <StyledBannerWrapper>
      <MainCategory>
        {Object.keys(detailCategories).map((category) => (
          <MainCategoryItem
            key={category}
            onMouseEnter={() => setSelectedCategory(category)}
            onMouseLeave={() => setSelectedCategory(null)}
          >
            {category}
          </MainCategoryItem>
        ))}
      </MainCategory>
      <DetailCategory>
        {selectedCategory &&
          detailCategories[selectedCategory].map((item) => (
            <DetailCategoryItem key={item}>{item}</DetailCategoryItem>
          ))}
      </DetailCategory>
      <MainBanner>
        <MainBannerImgBox></MainBannerImgBox>
        <MainBannerImgButton></MainBannerImgButton>
      </MainBanner>
    </StyledBannerWrapper>
  );
}
