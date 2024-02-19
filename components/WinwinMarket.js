import React from "react";
import WinwinMarketSwiper from "./WinwinMarketSwiper";
import styled from "styled-components";

const StyledWinwinMarket = styled.div`
  width: 1200px;
  height: 700px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
`;

const StyledWinwinMarketTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid lightgray;
`;
const StyledWinwinMarketSlideBox = styled.div`
  width: 1200px;
  height: 676px;
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid lightgray;
`;

export default function WinwinMarket() {
  return (
    <StyledWinwinMarket>
      <StyledWinwinMarketTitle>BTCMobick 상생마켓</StyledWinwinMarketTitle>
      <StyledWinwinMarketSlideBox>
        <WinwinMarketSwiper />
      </StyledWinwinMarketSlideBox>
    </StyledWinwinMarket>
  );
}
