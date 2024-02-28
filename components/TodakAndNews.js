import React from "react";
import styled from "styled-components";
import { newsDetail1, newsDetail2 } from "../DataBase/TodakAndNewsDB";

const StyledTodakAndNewsWrapper = styled.div`
  width: 1200px;
  height: 630px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
`;

const StyledTodakAndNewsBox = styled.div`
  width: 620px;
  height: 630px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
`;

const StyledTodakAndNewsTitleBox = styled.div`
  width: 100%;
  height: 33px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const StyledTodakImageBox = styled.div`
  width: 598px;
  height: 598px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  cursor: pointer;
`;

const StyledNewsBoxWrapper0 = styled.div`
  width: 574px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 12px;
`;

const StyledNewsBoxWrapper = styled.div`
  width: 574px;
  height: 280px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 24px;
`;

const StyledNewsBox = styled.div`
  width: 275px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledNewsImage = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledNewsText = styled.div`
  width: 275px;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding-top: 10px;

  & > div {
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
  }

  & > div:nth-child(1) {
    height: 20%;
    font-size: 16px;
    color: black;
    font-weight: bold;
  }
  & > div:nth-child(2) {
    height: 20%;
    font-size: 14px;
    color: gray;
  }
`;

export default function TodakAndNews() {
  return (
    <StyledTodakAndNewsWrapper>
      <StyledTodakAndNewsBox>
        <StyledTodakAndNewsTitleBox>토닥토닥</StyledTodakAndNewsTitleBox>
        <StyledTodakImageBox>
          <div>
            <img
              src="/images/Todaktodak.png"
              alt="Todaktodak"
              width={576}
              height={576}
            />
          </div>
        </StyledTodakImageBox>
      </StyledTodakAndNewsBox>
      <StyledTodakAndNewsBox>
        <StyledTodakAndNewsTitleBox>BTCMobick 뉴스</StyledTodakAndNewsTitleBox>
        <StyledNewsBoxWrapper0>
          <StyledNewsBoxWrapper>
            {newsDetail1.map((newsDetail1, index) => {
              return (
                <StyledNewsBox key={index}>
                  <StyledNewsImage>
                    <img
                      src={newsDetail1.imageUrl}
                      alt="otc_image"
                      style={{ objectFit: "cover" }}
                    />
                  </StyledNewsImage>
                  <StyledNewsText>
                    <div>{newsDetail1.title}</div>
                    <div>{newsDetail1.detail}</div>
                  </StyledNewsText>
                </StyledNewsBox>
              );
            })}
          </StyledNewsBoxWrapper>
          <StyledNewsBoxWrapper>
            {newsDetail2.map((newsDetail2, index) => {
              return (
                <StyledNewsBox key={index}>
                  <StyledNewsImage>
                    <img
                      src={newsDetail2.imageUrl}
                      alt="otc_image"
                      style={{ objectFit: "cover" }}
                    />
                  </StyledNewsImage>
                  <StyledNewsText>
                    <div>{newsDetail2.title}</div>
                    <div>{newsDetail2.detail}</div>
                  </StyledNewsText>
                </StyledNewsBox>
              );
            })}
          </StyledNewsBoxWrapper>
        </StyledNewsBoxWrapper0>
      </StyledTodakAndNewsBox>
    </StyledTodakAndNewsWrapper>
  );
}
