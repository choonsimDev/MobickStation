import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  padding: 20px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const AllProductsTitle = styled.div`
  width: 1200px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: black;
  border-bottom: 1px solid lightgray;
`;

const ProductsBoxWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* 각 상품 박스 사이와 컨테이너 좌우 끝 간의 간격을 균등하게 분배 */
  align-items: flex-start; /* 상품 박스를 상단 정렬 */
  gap: 50px; /* 상품 박스 사이의 수직 간격 */
`;

const ProductBox = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid lightgray;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
`;

const ProductInfo = styled.div`
  text-align: center;
  border: 1px solid lightgray;
  & div:nth-child(1) {
    font-size: 20px;
    font-weight: bold;
  }
  & div:nth-child(2) {
    font-size: 16px;
  }
  & div:nth-child(3) {
    font-size: 16px;
  }
`;

export default function BestProductsSection() {
  const products = [
    {
      imageUrl: "/path/to/product1.jpg",
      title: "Product 1",
      description: "Description 1",
      price: "$100",
    },
    {
      imageUrl: "/path/to/product2.jpg",
      title: "Product 2",
      description: "Description 2",
      price: "$200",
    },
    {
      imageUrl: "/path/to/product3.jpg",
      title: "Product 3",
      description: "Description 3",
      price: "$300",
    },
    {
      imageUrl: "/path/to/product4.jpg",
      title: "Product 4",
      description: "Description 4",
      price: "$400",
    },
    {
      imageUrl: "/path/to/product5.jpg",
      title: "Product 5",
      description: "Description 5",
      price: "$500",
    },
    {
      imageUrl: "/path/to/product6.jpg",
      title: "Product 6",
      description: "Description 6",
      price: "$600",
    },
    {
      imageUrl: "/path/to/product7.jpg",
      title: "Product 7",
      description: "Description 7",
      price: "$700",
    },
    {
      imageUrl: "/path/to/product8.jpg",
      title: "Product 8",
      description: "Description 8",
      price: "$800",
    },
    {
      imageUrl: "/path/to/product9.jpg",
      title: "Product 9",
      description: "Description 9",
      price: "$900",
    },
    {
      imageUrl: "/path/to/product10.jpg",
      title: "Product 10",
      description: "Description 10",
      price: "$1000",
    },
  ];

  return (
    <SectionContainer>
      <AllProductsTitle>전체 상품</AllProductsTitle>
      <ProductsBoxWrapper>
        {products.map((product, index) => (
          <div key={index}>
            <ProductBox imageUrl={product.imageUrl} />
            <ProductInfo>
              <div>{product.title}</div>
              <div>{product.description}</div>
              <div>{product.price}</div>
            </ProductInfo>
          </div>
        ))}
      </ProductsBoxWrapper>
    </SectionContainer>
  );
}
