import React, { useState } from "react";
import styled from "styled-components";
import ModalReady from "@/components/modal/ModalReady";

const MainContainer = styled.div`
  width: 1800px;
  margin: 0 auto;
  margin-top: 40px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const MoreButton = styled.button`
  width: 115px;
  height: 44px;
  background-color: #e5e5e5;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: black;
  &:hover {
    background-color: #d4d4d4;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ProductBox = styled.div`
  width: 340px;
  height: 416px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 340px;
  height: 240px;
  object-fit: cover;
`;

const ProductContent = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const ProductTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
const PriceNumber = styled.span`
  color: #0078ff;
`;

const PriceUnit = styled.span`
  color: black;
`;

const popularProducts = [
  {
    imageUrl: "/images/store/wallet_1.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "99,000",
  },
  {
    imageUrl: "/images/store/o4fan.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "50,000",
  },
  {
    imageUrl: "/images/store/cjman.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "39,800",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
];

const walletProducts = [
  {
    imageUrl: "/images/store/wallet_1.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "99,000",
  },
  {
    imageUrl: "/images/store/o4fan.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "50,000",
  },
  {
    imageUrl: "/images/store/cjman.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "39,800",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
];

const goodsProducts = [
  {
    imageUrl: "/images/store/wallet_1.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "99,000",
  },
  {
    imageUrl: "/images/store/o4fan.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "50,000",
  },
  {
    imageUrl: "/images/store/cjman.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "39,800",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
];

function ProductSection({ title, link, products }) {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <MoreButton href={link}>+더보기</MoreButton>
      </SectionHeader>
      <ProductsContainer>
        {products.map((product, index) => (
          <ProductBox key={index}>
            <ProductImage src={product.imageUrl} alt={product.name} />
            <ProductContent>
              <div>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
              </div>
              <ProductPrice>
                <PriceNumber>{product.price}</PriceNumber>
                <PriceUnit> 원</PriceUnit>
              </ProductPrice>
            </ProductContent>
          </ProductBox>
        ))}
      </ProductsContainer>
    </Section>
  );
}

export default function MainPage() {
  return (
    <MainContainer>
      <ProductSection
        title="인기상품"
        link="/popular"
        products={popularProducts}
      />
      <ProductSection
        title="종이지갑 상품"
        link="/wallet"
        products={walletProducts}
      />
      <ProductSection
        title="굿즈 상품"
        link="/goods"
        products={goodsProducts}
      />
    </MainContainer>
  );
}
