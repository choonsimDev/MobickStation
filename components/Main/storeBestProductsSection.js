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

const BestProductsTitle = styled.div`
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

const ProductsBoxWrapper = styled.a`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
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

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
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
  ];

  return (
    <SectionContainer>
      <BestProductsTitle>베스트 상품</BestProductsTitle>
      <ProductsContainer>
        <ProductsBoxWrapper>
          {products.map((product, index) => (
            <div key={index}>
              <ProductBox imageUrl={product.imageUrl} />
              <ProductInfo href="/productsDetail">
                <div>{product.title}</div>
                <div>{product.description}</div>
                <div>{product.price}</div>
              </ProductInfo>
            </div>
          ))}
        </ProductsBoxWrapper>
      </ProductsContainer>
    </SectionContainer>
  );
}
