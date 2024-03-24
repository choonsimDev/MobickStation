import styled from "styled-components";
import { useState } from "react";
import React from "react";
import Header from "@/components/Main/Header";
import LogoAndSearch from "@/components/Main/LogoAndSearch";
import Footer from "@/components/Main/Footer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledBack = styled.a`
  top: 20px;
  left: 20px;
  margin-top: 50px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #999999;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #333; // 호버 색상 변경
  }
`;

const ProductsDetailWrapper = styled.div`
  width: 1200px;
  height: 2000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px; // 패딩 추가
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // 그림자 추가
`;

const ProductsCategory = styled.div`
  width: 1200px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: left;
  gap: 1.5rem;
  font-size: 0.9rem;
  border: 1px solid lightgray;
`;
const ProductsDetailBox = styled.div`
  width: 1200px;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: left;
  gap: 1.5rem;
  font-size: 0.9rem;
  border: 1px solid lightgray;
`;

const ProductDetailLeftBox = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductImageBox = styled.div`
  width: 550px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const ProductDetailRightBox = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ProductTitleBox = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid lightgray;
`;
const ProductDescriptionBox = styled.div`
  width: 600px;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  color: gray;
  border-bottom: 1px solid lightgray;
`;
const ProductDetailBox = styled.div`
  width: 600px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 14px;
  color: gray;
  border-bottom: 1px solid lightgray;
`;
const ProductQuantitylBox = styled.div`
  width: 600px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 14px;
  font-weight: bold;
  gap: 1rem;
  background-color: lightgray;
  border-bottom: 1px solid lightgray;
  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    height: 50px;
    font-size: 14px;
  }
`;

const ProductPriceBox = styled.div`
  width: 600px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  color: gray;
  border-bottom: 1px solid lightgray;
`;

const ProductBuyCartLike = styled.div`
  width: 600px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  & > div {
    font-size: 14px;
    font-weight: bold;
    width: 150px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border: 1px solid lightgray;
  }
`;

const ProductsNavi = styled.div`
  width: 1200px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.9rem;
  border-bottom: 1px solid lightgray;
`;

const ProductNaviDetail = styled.div`
  width: 1200px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: left;
  gap: 1.5rem;
  font-size: 14px;
  border: 1px solid lightgray;
`;

export default function productsDetail() {
  let [수량, 수량변경] = useState(1);
  let [가격, 가격변경] = useState("100,000");
  return (
    <StyledDiv>
      <Header />
      <LogoAndSearch />
      <ProductsDetailWrapper>
        <ProductsCategory></ProductsCategory>
        <ProductsDetailBox>
          {" "}
          <ProductDetailLeftBox>
            <ProductImageBox>Product Image</ProductImageBox>
          </ProductDetailLeftBox>
          <ProductDetailRightBox>
            <ProductTitleBox>Product Title</ProductTitleBox>
            <ProductDescriptionBox>Product Description</ProductDescriptionBox>
            <ProductDetailBox>
              <div>배송 방법</div>
              <div>배송비 | 2,500원(50,000원 이상 무료배송)</div>
            </ProductDetailBox>
            <ProductQuantitylBox>
              <div>수량</div>
              <div>
                <button
                  onClick={() => {
                    let copy = [수량];
                    if (copy > 0) {
                      copy--;
                    }
                    수량변경(copy);
                    가격변경(100000 * copy);
                  }}
                >
                  -
                </button>
                <span>{수량}</span>
                <button
                  onClick={() => {
                    let copy = [수량];
                    copy++;
                    수량변경(copy);
                    가격변경(100000 * copy);
                  }}
                >
                  +
                </button>
                <div>{가격}원</div>
              </div>
            </ProductQuantitylBox>
            <ProductPriceBox>
              <div>총 상품금액 (10개)</div>
              <div>100,000원</div>
            </ProductPriceBox>
            <ProductBuyCartLike>
              <div>구매하기</div>
              <div>장바구니</div>
              <div>♥</div>
            </ProductBuyCartLike>
          </ProductDetailRightBox>
        </ProductsDetailBox>
        <ProductsNavi>
          <div>상품정보</div>/<div>리뷰</div>/<div>Q&A</div>
        </ProductsNavi>
        <ProductNaviDetail></ProductNaviDetail>
        <StyledBack href="/">돌아가기</StyledBack>
      </ProductsDetailWrapper>
      <Footer />
    </StyledDiv>
  );
}
