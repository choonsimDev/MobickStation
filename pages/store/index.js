import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "@/components/common/Header";
import Center from "@/components/common/Center";
import LogoAndSearch from "@/components/common/LogoAndSearch";
import Banner from "@/components/store/mainpage/Banner";
import CategorySection from "@/components/store/stores/storeCategorySection";
import BestProductsSection from "@/components/store/stores/storeBestProductsSection";
import AllProductsSection from "@/components/store/stores/storeAllProductsSection";
import Footer from "@/components/common/Footer";
import ModalPagePreparing from "@/components/modal/ModalPagePreparing";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDiv2 = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StoreCategory = styled.div`
  width: 1200px;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  font-size: 24px;
  font-weight: bold;
  color: black;
  background-color: lightgray;
`;

const StyledBack = styled.a`
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #999999;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function BestProducts() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(true); // 페이지 로드 시 모달을 자동으로 열기
  }, []);

  const closeModal = () => {
    setIsModalVisible(false); // 모달 닫기 함수
  };

  return (
    <StyledDiv>
      {isModalVisible && <ModalPagePreparing onClose={closeModal} />}
      <Center>
        <Header />
        <LogoAndSearch />
        <StyledDiv2>
          <Banner />
          <CategorySection />
          <BestProductsSection />
          <AllProductsSection />
          <StyledBack href="/">돌아가기</StyledBack>
        </StyledDiv2>
        <Footer />
      </Center>
    </StyledDiv>
  );
}
