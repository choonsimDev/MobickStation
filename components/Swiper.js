import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function SwiperBanner() {
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
          <img src="/images/1stWallet.png" alt="4thWallet" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/3rdWallet.png" alt="4thWallet" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/4thWallet.png" alt="4thWallet" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/5thWallet.png" alt="4thWallet" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/1stWallet.png" alt="4thWallet" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/3rdWallet.png" alt="4thWallet" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/4thWallet.png" alt="4thWallet" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/5thWallet.png" alt="4thWallet" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
