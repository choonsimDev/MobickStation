import React, { useState } from "react";
import styled from "styled-components";
import SwiperBanner from "./Swiper";
import { detailCategories } from "../DataBase/BannerDB";

const StyledBannerWrapper = styled.div`
  width: 1200px;
  height: 421px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid lightgray;
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
  border-right: 1px solid lightgray;
`;

const MainCategoryItem = styled.div`
  margin: 2px 0;
  margin-left: 10px;
  text-align: left;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const DetailCategory = styled.div`
  width: 120px;
  height: 100%;
  padding-top: 30px;
  font-size: 0.8rem;
  border-right: 1px solid lightgray;
`;

const DetailCategoryItem = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  text-align: left;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const MainBanner = styled.div`
  width: 960px;
  height: 100%;
  background-color: blue;
`;

const MainBannerImgBox = styled.div`
  height: 100%;
  cursor: pointer;
`;
const MainBannerImgButton = styled.div`
  height: 20%;
`;

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
