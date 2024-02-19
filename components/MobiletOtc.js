import React from "react";

import styled from "styled-components";

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

const buyProducts = [
  {
    imageUrl: "/images/wallet_JTBC.png",
    name: "모빌렛 [비트모빅 컨퍼런스 - JTBC] - 0.2 Mo",
    id: "choonsim1126",
    location: "위치 | 강남 서초구",
    price: "₩1,000,000",
  },
  {
    imageUrl: "/images/wallet_Glenfiddich2.png",
    name: "모빌렛 [춘심] - 1 Mo",
    id: "azerc",
    location: "위치 | 성남시 분당구",
    price: "₩1,000,000",
  },
];
const sellProducts = [
  {
    imageUrl: "/images/wallet_Glenfiddich.png",
    name: "모빌렛 [글렉피딕 18] - 0.635 Mo",
    id: "neo2",
    location: "위치 | 안산시 상록구",
    price: "₩1,000,000",
  },
  {
    imageUrl: "/images/Wallet_1.png",
    name: "모빌렛 [Genesis Edition - 1차] - 0.1 Mo",
    id: "domino",
    location: "위치 | 수원시 팔달구",
    price: "₩1,000,000",
  },
];

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
