import React from "react";
import styled from "styled-components";
import {
  todakImage,
  newsDetail1,
  newsDetail2,
} from "../../DataBase/TodakAndNewsDB";

const StyledTodakAndNewsWrapper = styled.div`
  width: 1200px;
  height: 640px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // 그림자 추가
`;

const StyledTodakAndNewsBox = styled.div`
  flex: 1; // 박스가 부모 컨테이너의 크기에 맞추어 자동으로 조정되도록 변경
  height: 640px;
  display: flex;
  flex-direction: column;
  &:first-child {
    border-right: 1px solid lightgray; // 첫 번째 박스의 오른쪽에만 테두리를 추가
  }
  &:last-child {
    border-left: none; // 마지막 박스의 왼쪽 테두리 제거
  }
`;

const StyledTodakAndNewsTitleBox = styled.div`
  width: 100%;
  height: 30px;
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
  width: 100%; // 부모의 너비에 맞게 조정
  flex: 1; // 높이를 유동적으로 조정
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  cursor: pointer;
`;

const StyledTodakImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // 그림자 추가
`;

const StyledNewsBoxWrapper0 = styled.div`
  width: 100%; // 부모의 너비에 맞게 조정
  flex: 1; // 높이를 유동적으로 조정
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;
  padding: 12px; // 내부 패딩으로 인해 자식 컴포넌트들이 경계 밖으로 나가지 않도록 함
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // 그림자 추가
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
          <StyledTodakImage>
            <img
              src={todakImage[0].imageUrl}
              alt="otc_image"
              style={{ objectFit: "cover" }}
              width={576}
              height={576}
            />
          </StyledTodakImage>
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
