import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function SWinwinMarketSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper" // 모듈 스타일 적용
      >
        <SwiperSlide>
          <img src="/images/WinwinMarket01.png" alt="4thWallet" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/WinwinMarket02.png" alt="4thWallet" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/WinwinMarket03.png" alt="4thWallet" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/WinwinMarket04.png" alt="4thWallet" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/WinwinMarket05.png" alt="4thWallet" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/WinwinMarket06.png" alt="4thWallet" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
