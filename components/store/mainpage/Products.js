import styled from "styled-components";
import React from "react";

const StyledTopMidWraper = styled.div`
  width: 1200px;
  height: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
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
  padding-left: 20px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
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
  padding-left: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
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
  overflow: hidden;
  border: 1px solid lightgray;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // 그림자 추가
  cursor: pointer;
  img {
    max-width: 100%;
    max-height: 100%;
    padding: 10px;
    object-fit: contain;
    object-position: center;
    cursor: pointer;
    transition: transform 0.3s ease-in-out; // 부드러운 변환 효과 추가

    &:hover {
      transform: scale(1.1); // 마우스 호버 시 이미지 10% 확대
    }
  }

  &:hover {
    text-decoration: underline; // Underline on hover
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  border-bottom: 1px solid lightgray;

  cursor: pointer;
  img {
    width: 100%; // 이미지의 너비를 컨테이너의 너비와 동일하게 설정
    height: 100%; // 이미지의 높이를 컨테이너의 높이와 동일하게 설정
    padding: 10px;
    object-fit: contain;
    object-position: center; // 이미지를 가운데 정렬
    cursor: pointer;
    transition: transform 0.3s ease-in-out; // 부드러운 변환 효과 추가
    &:hover {
      transform: scale(1.1); // 마우스 호버 시 이미지 10% 확대
    }
  }
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

const products = [
  {
    imageUrl: "/images/store/wallet_1.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "₩99,000",
  },
  {
    imageUrl: "/images/store/o4fan.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "₩50,000",
  },
  {
    imageUrl: "/images/store/cjman.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "₩39,800",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "₩170,000",
  },
];

const pubBookImg = [
  {
    id: 1,
    src: "/images/store/jufrieden.png",
  },
  {
    id: 2,
    src: "/images/store/chrischoi02.png",
  },
];

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
                  <StyledProductImage href="/productDetail">
                    <img src={product.imageUrl} alt="4thWallet" />
                  </StyledProductImage>
                  <StyledProductName href="/productDetail">
                    {product.name}
                  </StyledProductName>
                  <StyledProductDescription href="/productDetail">
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
        <StyledPubBookTitle>할인 상품</StyledPubBookTitle>
        <StyledPubBookImageBox>
          {pubBookImg.map((image, index) => (
            <React.Fragment key={image.id}>
              <StyledPubBookImage href="/productsDetail">
                <img src={image.src} />
              </StyledPubBookImage>
              {index !== pubBookImg.length - 1 && <StyledPubBookLine />}
            </React.Fragment>
          ))}
        </StyledPubBookImageBox>
      </StyledPubBook>
    </StyledTopMidWraper>
  );
}