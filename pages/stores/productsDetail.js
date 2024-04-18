import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Header from "@/components/common/Header";
import Center from "@/components/common/Center";
import LogoAndSearch from "@/components/common/LogoAndSearch";
import Footer from "@/components/common/Footer";
import ModalPagePreparing from "@/components/modal/ModalPagePreparing";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductsDetailWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ProductsCategoryWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const ProductsCategory = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 16px;
  color: #666;
  border-bottom: 1px lightgray solid;
`;

const StyledBack = styled.a`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  padding-right: 20px;
  color: gray;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;

const ProductImageBox = styled.div`
  width: 550px;
  height: 550px;
  margin-top: 20px;
  display: flex;

  /* border: 1px solid lightgray; */
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ProductDetailRightBox = styled.div`
  flex: 1;
  margin-top: 20px;
`;

const ProductTitleBox = styled.div`
  width: 100%;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const ProductDescriptionBox = styled.div`
  width: 100%;
  height: 200px;
  font-size: 16px;
  color: gray;
  line-height: 1.5;
  border-bottom: 1px solid lightgray;
`;

const ProductDetailBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 16px;
  color: gray;
`;

const ProductQuantitylBox = styled.div`
  height: 60px;
  background-color: whitesmoke;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  gap: 30px;
  & div {
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
      background-color: #ddd;
    }
  }
  span {
    font-weight: bold;
    font-size: 16px;
  }
`;

const ProductPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const ProductBuyCartLike = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  button {
    background: #e5821a;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background: #f6931a;
    }
  }
`;

export default function ProductsDetail() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("100,000");

  //모달
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    setIsModalVisible(true);
  }, []);
  const closeModal = () => {
    setIsModalVisible(false);
  };
  // 모달

  return (
    <StyledDiv>
      {isModalVisible && <ModalPagePreparing onClose={closeModal} />}

      <Header />
      <Center>
        <LogoAndSearch />
        <ProductsDetailWrapper>
          <ProductsCategoryWrapper>
            <ProductsCategory>Home / Category / Product Name</ProductsCategory>{" "}
            <StyledBack href="/store">돌아가기</StyledBack>
          </ProductsCategoryWrapper>
          <div style={{ display: "flex", width: "100%" }}>
            <ProductImageBox>
              <img src="./images/mobilet01-1.png" alt="Product Image" />
            </ProductImageBox>
            <ProductDetailRightBox>
              <ProductTitleBox>Product Title</ProductTitleBox>
              <ProductDescriptionBox>
                This is the product description. Here you can add more details
                about the product.
              </ProductDescriptionBox>
              <ProductDetailBox>
                <div>배송 방법</div>
                <div>배송비 | 2,500원(50,000원 이상 무료 배송)</div>
              </ProductDetailBox>
              <ProductQuantitylBox>
                구매 수량
                <div>
                  <button
                    onClick={() => {
                      setQuantity(quantity > 1 ? quantity - 1 : 1);
                      let copy = [quantity];
                      if (copy > 0) {
                        copy--;
                      }
                      setQuantity(copy);
                      setPrice(100000 * copy);
                    }}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => {
                      setQuantity(quantity > 1 ? quantity + 1 : 1);
                      let copy = [quantity];
                      if (copy > 0) {
                        copy++;
                      }
                      setQuantity(copy);
                      setPrice(100000 * copy);
                    }}
                  >
                    +
                  </button>
                </div>
              </ProductQuantitylBox>
              <ProductPriceBox>Total Price: {price}원</ProductPriceBox>
              <ProductBuyCartLike>
                <button>Buy Now</button>
                <button>Add to Cart</button>
                <button>♥</button>
              </ProductBuyCartLike>
            </ProductDetailRightBox>
          </div>
        </ProductsDetailWrapper>
        <Footer />
      </Center>
    </StyledDiv>
  );
}
