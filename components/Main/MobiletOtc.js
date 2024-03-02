import React from "react";
import styled from "styled-components";
import { buyProducts, sellProducts } from "../../DataBase/MobiletOtcDB.js";

const StyledOtcWrapper = styled.div`
  width: 1200px;
  height: 538px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
`;

const OtcTitleBox = styled.div`
  width: 100%;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-left: 30px;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const OtcBuySellWrapper = styled.div`
  width: 100%;
  height: 509px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const OtcBuySellBox = styled.div`
  width: 50%;
  height: 509px;
  display: flex;
  flex-direction: column;
`;

const OtcBuySellText = styled.div`
  width: 600px;
  height: 74px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 30px;
  gap: 0.6rem;
  border: 1px solid lightgray;
  border-left: none;

  & > div {
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
  }
  & > div:first-child {
    font-size: 16px;
    font-weight: bold;
  }
  & > div:last-child {
    font-size: 14px;
    font-weight: 400;
    color: dodgerblue;
  }
`;

const OtcBuySellProductWrapper = styled.div`
  width: 600px;
  height: 437px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  border-top: none;
  border-left: none;
  border-bottom: none;
  gap: 12px;
`;

const OtcBuySellProductBox = styled.div`
  width: 568px;
  height: 200px;
  display: flex;
  flex-direction: row;
  /* border: 1px solid lightgray; */
`;
const OtcBuySellProductBoxLine = styled.div`
  width: 80%;
  height: 1px;
  border: 1px solid lightgray;
  /* border: 1px solid lightgray; */
`;

const OtcBuySellProductImageBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;
const OtcBuySellProductTextBox = styled.div`
  width: 368px;
  height: 200px;
  padding-top: 10px;

  & > div {
    width: 100%;
    display: flex;
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
    /* padding-left: 22px; */
  }
  & > div:first-child {
    margin-top: 1rem;
    font-size: 16px;
    font-weight: bold;
    color: black;
    cursor: pointer;
  }
  & > div:nth-child(2) {
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 16px;
    font-weight: 400;
    margin-top: 15px;
    color: gray;
    cursor: pointer;
  }
  & > div:nth-child(3) {
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 16px;
    font-weight: 400;
    margin-top: 8px;
    color: gray;
    cursor: pointer;
  }
  & > div:nth-child(4) {
    font-size: 18px;
    font-weight: bold;
    margin-top: 16px;
    color: black;
  }
`;

export default function MobiletOtc() {
  return (
    <StyledOtcWrapper>
      <OtcTitleBox>모빌렛 - 삽니다 / 팝니다 (OTC)</OtcTitleBox>
      <OtcBuySellWrapper>
        <OtcBuySellBox>
          <OtcBuySellText>
            <div>삽니다</div>
            <div>지금 가장 인기있는 종이지갑을 구매해보세요.</div>
          </OtcBuySellText>
          <OtcBuySellProductWrapper>
            {sellProducts.map((buyProduct, index) => {
              return (
                <OtcBuySellProductBox key={index}>
                  <OtcBuySellProductImageBox>
                    <img src={buyProduct.imageUrl} alt="otc_image" />
                  </OtcBuySellProductImageBox>
                  <OtcBuySellProductTextBox>
                    <div>{buyProduct.name}</div>
                    <div>{buyProduct.id}</div>
                    <div>{buyProduct.location}</div>
                    <div>{buyProduct.price}</div>
                  </OtcBuySellProductTextBox>
                </OtcBuySellProductBox>
              );
            })}
          </OtcBuySellProductWrapper>
        </OtcBuySellBox>
        <OtcBuySellBox>
          <OtcBuySellText>
            <div>팝니다</div>
            <div>여러분의 모빌렛을 판매해보세요.</div>
          </OtcBuySellText>
          <OtcBuySellProductWrapper>
            {buyProducts.map((sellProduct, index) => {
              return (
                <OtcBuySellProductBox key={index}>
                  <OtcBuySellProductImageBox>
                    <img src={sellProduct.imageUrl} alt="otc_image" />
                  </OtcBuySellProductImageBox>
                  <OtcBuySellProductTextBox>
                    <div>{sellProduct.name}</div>
                    <div>{sellProduct.id}</div>
                    <div>{sellProduct.location}</div>
                    <div>{sellProduct.price}</div>
                  </OtcBuySellProductTextBox>
                </OtcBuySellProductBox>
              );
            })}
          </OtcBuySellProductWrapper>
        </OtcBuySellBox>
      </OtcBuySellWrapper>
    </StyledOtcWrapper>
  );
}
