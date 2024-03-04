import styled from "styled-components";
import React, { useState } from "react";

const StyledAdandInterviewWrapper = styled.div`
  width: 1200px;
  height: 380px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // 그림자 추가
`;

const AdWrapper = styled.div`
  width: 601px;
  height: 380px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  position: relative;
  cursor: pointer;
`;

const InterviewWrapper = styled.div`
  width: 599px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid lightgray;
  border-left: none;
`;
const AdLabel = styled.span`
  position: absolute; /* 절대 위치 지정 */
  top: 25px; /* 위에서 10px만큼 내림 */
  left: 30px; /* 왼쪽에서 10px만큼 이동 */
  padding: 5px 10px; /* 내부 여백 설정 */
  border-radius: 5px; /* 테두리를 둥글게 */
  color: white; /* 글자색 흰색 */
  background-color: gray; /* 배경색 회색 */
  font-weight: bold; /* 굵은 글씨체 */
`;

const InterviewTitle = styled.div`
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

const InterviewContent = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 12px;
  //  background-color: lightyellow;
`;

const InterviewContentBox = styled.div`
  width: 180px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InterviewContentBoxImage = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const InterviewContentBoxTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden; // 넘치는 내용 숨기기
  white-space: nowrap; // 텍스트를 한 줄로 만들기
  text-overflow: ellipsis; // 넘치는 텍스트를 ... 으로 대체
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const InterviewContentBoxText = styled.div`
  width: 100%; // 박스의 폭을 유지
  height: 20px; // 높이 설정, 필요에 따라 조정 가능
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: darkgray;
  overflow: hidden; // 넘치는 내용 숨기기
  white-space: nowrap; // 텍스트를 한 줄로 만들기
  text-overflow: ellipsis; // 넘치는 텍스트를 ... 으로 대체
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const Popup = styled.div`
  width: 500px;
  height: 200px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // 정확히 중앙에 위치시키기
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 1000; // 다른 요소들 위에 표시
  font-size: 20px;
  gap: 25px;
`;

const InterviewDetail1 = [
  {
    imageUrl: "/images/Interview01.png",
    title:
      "리플의 새로운 흐름, 스위프트 대체할 수 있을까? [토크라운지]ㅣ오태민 교수 2부",
    detail: "박작가의크립토연구소",
  },
  {
    imageUrl: "/images/Interview02.png",
    title: "비트코인을 만든 사토시의 정체를 말씀드립니다 (ft. 오태민 작가)",
    detail: "전인구경제연구소",
  },
  {
    imageUrl: "/images/Interview03.png",
    title:
      "비트코인 못가도 2억, 미국 대선 이후 최고 5억원까지 봅니다! (오태민 작가 1편)",
    detail: "이유TV, 모든 투자에는 이유가 있다",
  },
];
const InterviewDetail2 = [
  {
    imageUrl: "/images/Interview04.png",
    title:
      "1182. 비트코인 반감기 폭등 시나리오 전격 공개 [오태민 작가님 합방 1부]",
    detail: "할 수 있다! 알고 투자",
  },
  {
    imageUrl: "/images/Interview05.png",
    title:
      "[최경영의 경제오도독] 100만원 넣고는 인생역전 안돼요~ 시청자들 위한 오태민 교수의 친절한 코인 관련 '정밀분석'",
    detail: "오마이TV",
  },
  {
    imageUrl: "/images/Interview06.png",
    title: "비트코인 2024년 반드시 주목해야 할 2가지 이유",
    detail: "오태민의 지혜의족보",
  },
];

export default function AdAndInterview() {
  const [showPopup, setShowPopup] = useState(false);

  const handleAdClick = () => {
    setShowPopup(true); // 팝업을 보여주는 함수
  };

  const handleClose = (event) => {
    event.stopPropagation(); // 버블링 방지
    setShowPopup(false); // 팝업을 숨기는 함수
  };

  return (
    <StyledAdandInterviewWrapper>
      <AdWrapper onClick={handleAdClick}>
        {showPopup && (
          <Popup onClick={(e) => e.stopPropagation()}>
            {/* 팝업 자체에서의 클릭 이벤트 버블링 방지 */}
            <img
              src="/images/popup01.png"
              alt="Popup"
              style={{ width: "20%", borderRadius: "5px 5px 0 0" }}
            />
            준비중입니다.
            <button onClick={handleClose}>닫기</button>
          </Popup>
        )}
        <AdLabel>AD</AdLabel>
        <img src="/images/AdAndInterview03.png" alt="wallet" width={575} />
      </AdWrapper>
      <InterviewWrapper>
        <InterviewTitle>InterviewTitle</InterviewTitle>
        <InterviewContent>
          {InterviewDetail1.map((InterviewDetail1, index) => {
            return (
              <InterviewContentBox key={index}>
                <InterviewContentBoxImage>
                  <img
                    src={InterviewDetail1.imageUrl}
                    alt="Interview"
                    width={180}
                  />
                </InterviewContentBoxImage>
                <InterviewContentBoxTitle>
                  {InterviewDetail1.title}
                </InterviewContentBoxTitle>
                <InterviewContentBoxText>
                  {InterviewDetail1.detail}
                </InterviewContentBoxText>
              </InterviewContentBox>
            );
          })}
        </InterviewContent>
        <InterviewContent>
          {InterviewDetail2.map((InterviewDetail2, index) => {
            return (
              <InterviewContentBox key={index}>
                <InterviewContentBoxImage>
                  <img
                    src={InterviewDetail2.imageUrl}
                    alt="Interview"
                    width={180}
                  />
                </InterviewContentBoxImage>
                <InterviewContentBoxTitle>
                  {InterviewDetail2.title}
                </InterviewContentBoxTitle>
                <InterviewContentBoxText>
                  {InterviewDetail2.detail}
                </InterviewContentBoxText>
              </InterviewContentBox>
            );
          })}
        </InterviewContent>
      </InterviewWrapper>
    </StyledAdandInterviewWrapper>
  );
}
