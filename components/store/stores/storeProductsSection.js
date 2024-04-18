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

const ProductsBoxWrapper = styled.a`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 각 상품 박스 사이와 컨테이너 좌우 끝 간의 간격을 균등하게 분배 */
  align-items: flex-start; /* 상품 박스를 상단 정렬 */
  color: black;
  text-decoration: none;
  margin-top: 20px;
  gap: 50px; /* 상품 박스 사이의 수직 간격 */
  cursor: pointer;
  & :hover {
    & div:nth-child(1) {
      text-decoration: underline;
      color: #f6931a;
    }
  }
`;

const ProductBox = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid lightgray;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;

  & div:nth-child(1) {
    font-size: 20px;
    font-weight: bold;
  }
  & div:nth-child(2) {
    font-size: 16px;
  }
  & div:nth-child(3) {
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export default function ProductsSection({ products }) {
  return (
    <SectionContainer>
      <AllProductsTitle>전체 상품</AllProductsTitle>
      <ProductsBoxWrapper href="/productsDetail">
        {products.map((product, index) => (
          <div key={index}>
            <ProductBox imageUrl={product.imageUrl} />
            <ProductInfo>
              <div>{product.name}</div>
              <div>{product.description}</div>
              <div>₩{product.price}</div>
            </ProductInfo>
          </div>
        ))}
      </ProductsBoxWrapper>
    </SectionContainer>
  );
}
