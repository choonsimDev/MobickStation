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
          <img src="/images/WinWinMarket01.png" alt="Market" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/WinWinMarket02.png" alt="Market" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/WinWinMarket03.png" alt="Market" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/WinWinMarket04.png" alt="Market" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/WinWinMarket05.png" alt="Market" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/WinWinMarket06.png" alt="Market" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
