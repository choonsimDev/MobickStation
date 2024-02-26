import styled from "styled-components";

const StyledAdandInterviewWrapper = styled.div`
  width: 1200px;
  height: 380px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const AdWrapper = styled.div`
  width: 617px;
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
  width: 583px;
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
  background-color: lightgreen;
`;

const InterviewContentBoxImage = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightpink;
`;

const InterviewContentBoxTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: lightcoral;
  overflow: hidden; // 넘치는 내용 숨기기
  white-space: nowrap; // 텍스트를 한 줄로 만들기
  text-overflow: ellipsis; // 넘치는 텍스트를 ... 으로 대체
`;

const InterviewContentBoxText = styled.div`
  width: 100%; // 박스의 폭을 유지
  height: 20px; // 높이 설정, 필요에 따라 조정 가능
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: lightblue;
  color: darkgray;
  overflow: hidden; // 넘치는 내용 숨기기
  white-space: nowrap; // 텍스트를 한 줄로 만들기
  text-overflow: ellipsis; // 넘치는 텍스트를 ... 으로 대체
`;

const InterviewDetail1 = [
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
const InterviewDetail2 = [
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

export default function AdAndInterview() {
  return (
    <StyledAdandInterviewWrapper>
      <AdWrapper>
        <AdLabel>AD</AdLabel>
        <img src="/images/AdAndInterview03.png" alt="wallet" width={593} />
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
                    width={60}
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
          <InterviewContentBox>
            <InterviewContentBoxImage />
            <InterviewContentBoxTitle />
            <InterviewContentBoxText />
          </InterviewContentBox>
          <InterviewContentBox>
            <InterviewContentBoxImage />
            <InterviewContentBoxTitle />
            <InterviewContentBoxText />
          </InterviewContentBox>
        </InterviewContent>
        <InterviewContent>
          <InterviewContentBox>
            <InterviewContentBoxImage />
            <InterviewContentBoxTitle />
            <InterviewContentBoxText />
          </InterviewContentBox>
          <InterviewContentBox>
            <InterviewContentBoxImage />
            <InterviewContentBoxTitle />
            <InterviewContentBoxText />
          </InterviewContentBox>
          <InterviewContentBox>
            <InterviewContentBoxImage />
            <InterviewContentBoxTitle />
            <InterviewContentBoxText />
          </InterviewContentBox>
        </InterviewContent>
      </InterviewWrapper>
    </StyledAdandInterviewWrapper>
  );
}
