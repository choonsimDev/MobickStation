import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "@/components/Main/Header";
import Center from "@/components/Main/Center";
import LogoAndSearch from "@/components/Main/LogoAndSearch";
import Banner from "@/components/Main/Banner";
import CategorySection from "@/components/Store/storeCategorySection";
import BestProductsSection from "@/components/Store/storeBestProductsSection";
import AllProductsSection from "@/components/Store/storeAllProductsSection";
import Footer from "@/components/Main/Footer";
import ModalPagePreparing from "@/components/Modal/ModalPagePreparing";

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
  const [store, setStore] = useState(null);
  const [filterCategoryId, setFilterCategoryId] = useState(1); // Default filter category ID

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setIsModalVisible(true); // 페이지 로드 시 모달을 자동으로 열기
    if (id) {
      const fetchData = async () => {
        const res = await fetch(`http://localhost:3000/api/storeStores/${id}`);
        const data = await res.json();
        if (data && data.products) {
          const filteredProducts = data.products.filter(
            (product) => product.categoryId === filterCategoryId
          );
          setStore({ ...data, products: filteredProducts });
        }
      };

      fetchData();
    }
  }, [id, filterCategoryId]); // Re-fetch when category filter changes

  const closeModal = () => {
    setIsModalVisible(false); // 모달 닫기 함수
  };

  // 필터 카테고리 변경하는 핸들러
  const handleCategoryChange = (newCategoryId) => {
    setFilterCategoryId(newCategoryId);
  };

  return (
    <StyledDiv>
      {/* {isModalVisible && <ModalPagePreparing onClose={closeModal} />} */}
      <Center>
        <Header />
        <LogoAndSearch />
        <StyledDiv2>
          <Banner />
          <button onClick={() => handleCategoryChange(null)}>View All</button>

          <button onClick={() => handleCategoryChange(1)}>
            Category 1 : 일반형 지갑
          </button>
          <button onClick={() => handleCategoryChange(2)}>
            Category 2 : 이벤트 지갑
          </button>
          <button onClick={() => handleCategoryChange(3)}>
            Category 3 : 행사 지갑
          </button>
          <button onClick={() => handleCategoryChange(4)}>
            Category 4 : 제작 지갑
          </button>
          <button onClick={() => handleCategoryChange(5)}>
            Category 5 : 기타 지갑
          </button>

          {store && (
            <div>
              <h1>{store.name}</h1>
              <ul>
                {store.products.map((product) => (
                  <li key={product.id}>
                    {product.name} - ${product.price}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
