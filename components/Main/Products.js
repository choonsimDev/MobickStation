import styled from "styled-components";
import React from "react";

import { products, pubBookImg } from "../../DataBase/ProductsDB";

const StyledTopMidWraper = styled.div`
  width: 1200px;
  height: 400px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
`;
const StyledNowBook = styled.div`
  width: 959px;
  height: 398px;
  display: flex;
  flex-direction: column;
`;
const StyledNowBookTitle = styled.div`
  width: 959px;
  height: 30px;
  padding-left: 30px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;
const StyledNowBookList = styled.div`
  width: 959px;
  height: 368px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledNowBookListBox = styled.div`
  width: 959px;
  height: 340px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
`;
const StyledPubBook = styled.div`
  width: 238px;
  height: 398px;
  border-left: 1px solid lightgray;
`;
const StyledPubBookTitle = styled.div`
  width: 238px;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  padding-left: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;
const StyledPubBookImageBox = styled.div`
  width: 238px;
  height: 338px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
`;
const StyledPubBookImage = styled.a`
  width: 188px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & :hover {
    border: 1px solid lightgray;
  }
`;

const StyledPubBookLine = styled.div`
  width: 100px;
  height: 1px;
  background-color: darkgrey;
`;
// 추가 코드

const StyledProductBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid lightgray;
  overflow: hidden;
`;
const StyledProductImage = styled.a`
  height: 65%;
  background-color: skyblue; // 임시 배경색
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
`;
const StyledProductName = styled.a`
  margin-top: 1.2rem;
  padding: 0rem 1rem;
  font-size: 13px;
  font-weight: bold;
  color: black; /* 링크의 기본 색상 변경 */
  text-decoration: none; /* 밑줄 제거 */
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;
const StyledProductDescription = styled.a`
  padding: 0rem 1rem;
  margin-top: 0.5rem;
  line-height: 1.4;
  font-size: 12px;
  color: gray;
  flex-grow: 1;
  text-decoration: none; /* 밑줄 제거 */
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;
const StyledProductPrice = styled.div`
  margin-bottom: 1.2rem;
  padding: 0rem 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

export default function Products() {
  // 상품 데이터

  return (
    <StyledTopMidWraper>
      <StyledNowBook>
        <StyledNowBookTitle>카테고리별 판매량 1위</StyledNowBookTitle>
        <StyledNowBookList>
          <StyledNowBookListBox>
            {products.map((product, index) => {
              return (
                <StyledProductBox key={index}>
                  <StyledProductImage href="/productsDetail">
                    <img src={product.imageUrl} alt="4thWallet" />
                  </StyledProductImage>
                  <StyledProductName href="/productsDetail">
                    {product.name}
                  </StyledProductName>
                  <StyledProductDescription href="/productsDetail">
                    {product.description}
                  </StyledProductDescription>
                  <StyledProductPrice>{product.price}</StyledProductPrice>
                </StyledProductBox>
              );
            })}
          </StyledNowBookListBox>
        </StyledNowBookList>
      </StyledNowBook>
      <StyledPubBook>
        <StyledPubBookTitle>오독클 추천 서적</StyledPubBookTitle>
        <StyledPubBookImageBox>
          {pubBookImg.map((image, index) => (
            <React.Fragment key={image.id}>
              <StyledPubBookImage
                href="/productsDetail"
                style={{ backgroundImage: `url(${image.src})` }}
                alt={image.alt}
              />
              {index !== pubBookImg.length - 1 && <StyledPubBookLine />}
            </React.Fragment>
          ))}
        </StyledPubBookImageBox>
      </StyledPubBook>
    </StyledTopMidWraper>
  );
}
