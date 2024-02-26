import React from "react";
import styled from "styled-components";

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
const newsDetail1 = [
  {
    imageUrl: "/images/News01.png",
    title: "좋은소식과 나쁜소식이 있습니다.",
    detail:
      "좋은소식은 모비커스가 아래 주식을 단기바닥에서 잘샀습니다. 나쁜소식은 얼마안샀다는",
  },
  {
    imageUrl: "/images/News02.png",
    title: "퀸스산부인과, 모비커스 ‘토닥토닥 프로젝트’ 참여",
    detail:
      "충남 천안시 소재 퀸스산부인과가 올해 태어나는 모든 신생아에게 암호화폐 비트모빅을 증정하는 모비커스의 ‘토닥토닥 프로젝트’에 참여한다.",
  },
];
const newsDetail2 = [
  {
    imageUrl: "/images/News03.png",
    title:
      "퀸스산부인과, 비트모빅 오태민 교수 초청 ‘토닥토닥 프로젝트’ 행사 개최",
    detail:
      "충남 천안 소재 퀸스산부인과는 6일 올해 태어나는 모든 신생아에게 암호화폐 비트모빅을 증정하는 ‘토닥토닥 프로젝트’ 참여행사를 개최했다.",
  },
  {
    imageUrl: "/images/News04.png",
    title: "마중물장학회, 춘천여고에 장학금 1천만원 전달",
    detail:
      "춘천여고(교장:김난희) 졸업생 모임인 마중물장학회는 28일 모교를 방문해 장학금 1,000만원을 전달했다. ",
  },
];

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
