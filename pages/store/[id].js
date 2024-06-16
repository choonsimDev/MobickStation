import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Center from "@/components/common/Center";
import LogoAndSearch from "@/components/common/Header";
import Banner from "@/components/store/mainpage/Banner";
import CategorySection from "@/components/store/stores/storeCategorySection";
import BestProductsSection from "@/components/store/stores/storeBestProductsSection";
import AllProductsSection from "@/components/store/stores/storeAllProductsSection";
import ProductsSection from "@/components/store/stores/storeProductsSection";
import Footer from "@/components/common/Footer";

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
  const [filterCategoryId, setFilterCategoryId] = useState(null); // Allow null for 'View All'
  const [categoryId, setCategoryId] = useState(null); // Allow null for 'View All'

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setIsModalVisible(true);
    if (id) {
      const fetchData = async () => {
        // const res = await fetch(`http://localhost:3000/api/store/stores/${id}`);
        const res = await fetch(`/api/store/stores/${id}`);
        const data = await res.json();
        if (data && data.products) {
          const filteredProducts = filterCategoryId
            ? data.products.filter(
                (product) => product.categoryId === filterCategoryId
              )
            : data.products;
          setStore({ ...data, products: filteredProducts });
        }
        // 스토아의 프로덕트에 카테고리 아이디만 추출(중복제거), 어레이
        // useState에 저장 (이름)

        // API에서 전체 카테고리 데이터를 가져옴
        const categoriesResponse = await fetch(
          "/api/store/categories/getCategories"
        );
        const categoriesData = await categoriesResponse.json();

        // 카테고리 데이터를 ID를 키로 사용하는 객체로 변환
        const categoriesById = categoriesData.reduce((acc, category) => {
          acc[category.id] = category.name;
          return acc;
        }, {});

        // 제품 데이터에서 카테고리 ID 추출 및 고유 ID 필터링
        if (data && data.products) {
          const categoryIds = data.products.map(
            (product) => product.categoryId
          );
          const uniqueCategoryIds = [...new Set(categoryIds)];

          // 고유 카테고리 ID를 사용하여 카테고리 이름과 함께 배열 생성
          const categoriesWithNames = uniqueCategoryIds.map((id) => ({
            id: id,
            name: categoriesById[id] || "Unknown Category", // 카테고리 이름이 없는 경우 대비
          }));

          setCategoryId(categoriesWithNames); // 상태 설정 함수 호출
        }
      };

      fetchData();
    }
  }, [id, filterCategoryId]);

  const handleCategoryChange = (newCategoryId) => {
    setFilterCategoryId(newCategoryId);
  };

  return (
    <StyledDiv>
      <Center>
        <LogoAndSearch />
        <StyledDiv2>
          <Banner />
          <CategorySection
            onCategoryChange={handleCategoryChange}
            categoryIds={categoryId}
          />

          <ProductsSection products={store ? store.products : []} />
          <StyledBack href="/">돌아가기</StyledBack>
        </StyledDiv2>
        <Footer />
      </Center>
    </StyledDiv>
  );
}
