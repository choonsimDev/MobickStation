import React, { useState } from "react";
import styled from "styled-components";
import SwiperBanner from "./Swiper";

const StyledBannerWrapper = styled.div`
  width: 1920px;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  margin-top: 40px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); // 그림자 추가 */
  z-index: 1; /* 배너의 z-index 값을 낮게 설정 */
`;

const MainBanner = styled.div`
  width: 1800px;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

const MainBannerImgBox = styled.a`
  height: 100%;
  cursor: pointer;
`;

export default function Banner() {
  return (
    <div>
      <StyledBannerWrapper>
        <MainBanner>
          <MainBannerImgBox href="/store">
            <SwiperBanner />
          </MainBannerImgBox>
        </MainBanner>
      </StyledBannerWrapper>
    </div>
  );
}
