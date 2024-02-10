import React, { useState } from "react";
import styled from "styled-components";
import SwiperBanner from "./Swiper";

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
  width: 120px;
  height: 100%;
  padding-top: 30px;
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  gap: 1.5rem;
  font-size: 0.9rem;
  background-color: lightpink;
`;

const MainCategoryItem = styled.div`
  margin: 2px 0;
  margin-left: 10px;
  text-align: left;
`;

const DetailCategory = styled.div`
  width: 120px;
  height: 100%;
  padding-top: 30px;
  font-size: 0.8rem;
  background-color: lightgray;
`;

const DetailCategoryItem = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  text-align: left;
`;

const MainBanner = styled.div`
  width: 960px;
  height: 100%;
  background-color: blue;
`;

const MainBannerImgBox = styled.div`
  height: 100%;
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
    // "모빅회관",
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
        {Object.keys(detailCategories).map((category, idx) => (
          <MainCategoryItem
            key={idx}
            onMouseEnter={() => setSelectedCategory(category)}
          // onMouseLeave={() => setSelectedCategory(null)}
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
        <MainBannerImgBox>
          <SwiperBanner />
        </MainBannerImgBox>
        {/* <MainBannerImgButton></MainBannerImgButton> */}
      </MainBanner>
    </StyledBannerWrapper>
  );
}
