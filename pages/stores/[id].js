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
  const [filterCategoryId, setFilterCategoryId] = useState(null); // Allow null for 'View All'
  const [categoriId, setCategoryId] = useState(null); // Allow null for 'View All'

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setIsModalVisible(true);
    if (id) {
      const fetchData = async () => {
        const res = await fetch(`http://localhost:3000/api/storeStores/${id}`);
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
        <Header />
        <LogoAndSearch />
        <StyledDiv2>
          <Banner />
          <CategorySection
            onCategoryChange={handleCategoryChange}
            categoryIds={
              store && store.products.map((product) => product.categoryId)
            }
          />
          {store && (
            <div>
              <h1>{store.name}</h1>
              <ul>
                {store.products.map((product) => (
                  <li key={product.id}>
                    {product.name} - ${product.price} -{product.categoryId}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <BestProductsSection />
          <AllProductsSection />
          <StyledBack href="/">돌아가기</StyledBack>
        </StyledDiv2>
        <Footer />
      </Center>
    </StyledDiv>
  );
}
