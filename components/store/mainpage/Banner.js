import React, { useState } from "react";
import styled from "styled-components";
import SwiperBanner from "./Swiper";

const StyledBannerWrapper = styled.div`
  width: 1200px;
  height: 421px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  border: 1px solid lightgray;
  margin-top: 10px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); // 그림자 추가 */
  z-index: 1; /* 배너의 z-index 값을 낮게 설정 */
`;

const BannerTitle = styled.a`
  width: 1200px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding-left: 20px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
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

const MainCategoryItem = styled.a`
  margin: 2px 0;
  margin-left: 10px;
  font-size: 14px;
  text-align: left;
  text-decoration: none; /* 밑줄 제거 */
  cursor: pointer;
`;

const DetailCategory = styled.div`
  width: 120px;
  height: 100%;
  padding-top: 30px;
  font-size: 0.8rem;
  border-right: 1px solid lightgray;
  display: flex;
  flex-direction: column;
`;

const DetailCategoryItem = styled.a`
  margin-bottom: 20px;
  margin-left: 10px;
  font-size: 14px;
  /* font-weight: bold; */
  text-align: left;
  color: #333333; /* 링크의 기본 색상 변경 */
  text-decoration: none; /* 밑줄 제거 */
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    font-size: border;
  }
`;

const MainBanner = styled.div`
  width: 960px;
  height: 100%;
  background-color: #777;
`;

const MainBannerImgBox = styled.a`
  height: 100%;

  cursor: pointer;
`;
const MainBannerImgButton = styled.div`
  height: 20%;
`;

export default function Banner() {
  const [selectedCategory, setSelectedCategory] = useState("종이지갑"); // 예시로 "종이지갑"이 존재하는지 확인하세요

  const detailCategories = {
    종이지갑: [
      { name: "모니카 상점", url: "https://open.kakao.com/o/siXxiehg" },
      {
        name: "알약 상점",
        url: "https://smartstore.naver.com/mobicker-salon/category/ALL?cp=1",
      },
      { name: "주성원 상점", url: "https://open.kakao.com/o/sWQeWprf" },
      { name: "춘심소프트", url: "https://open.kakao.com/o/sTMJroag" },
    ],
    굿즈: [
      {
        name: "롱지노 도마",
      },
      { name: "망고케이스" },
      { name: "오태민사생팬", url: "https://marpple.shop/kr/otm4fan" },
      {
        name: "크리스 최 / 타마",
        url: "https://smartstore.naver.com/cloversekorea/category/ALL?cp=1",
      },
      { name: "Dulgi", url: "https://marpple.shop/kr/goodmobick" },
    ],
    생활용품: [
      {
        name: "cj man",
        url: "https://shop.coupang.com/A00286520?source=brandstore_sdp_atf&ocid=16961952&checkBatchDelivery=true&pid=7568664672&viid=87054167546&platform=p&locale=ko_KR",
      },
    ],
    상생마켓: [
      {
        name: "준비중입니다",
      },
    ],
  };

  return (
    <div>
      <BannerTitle href="/store">입점 마켓</BannerTitle>
      <StyledBannerWrapper>
        <MainCategory>
          {Object.keys(detailCategories).map((category, idx) => (
            <MainCategoryItem
              key={idx}
              target="_blank"
              onMouseEnter={() => setSelectedCategory(category)}
            >
              {category}
            </MainCategoryItem>
          ))}
        </MainCategory>
        <DetailCategory>
          {selectedCategory &&
            detailCategories[selectedCategory].map((item) => (
              <DetailCategoryItem
                href={item.url}
                key={item.name}
                target="_blank"
              >
                {item.name}
              </DetailCategoryItem>
            ))}
        </DetailCategory>
        <MainBanner>
          <MainBannerImgBox href="/store">
            <SwiperBanner />
          </MainBannerImgBox>
        </MainBanner>
      </StyledBannerWrapper>
    </div>
  );
}
