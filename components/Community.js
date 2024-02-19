import styled from "styled-components";

const StyledCommunityWrapper = styled.div`
  width: 1200px;
  height: 660px;
  margin-top: 20px;
  border: 1px solid lightgray;
`;

const CommunityTitleBox = styled.div`
  width: 1200px;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 16px;
  font-weight: bold;
`;

const CommunityNoticeBox = styled.div`
  width: 1200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid lightgray;
  font-style: italic;
`;
const NoticeText = styled.span`
  color: dodgerblue;
  font-weight: bold;

  cursor: pointer;
`;

const CommunityBoxWrapper = styled.div`
  width: 1200px;
  height: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommunityLeftBox = styled.div`
  width: 600px;
  height: 570px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  gap: 12px;
`;

const CommunityOtaverse = styled.div`
  width: 575px;
  height: 312px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CommunityOtaverseTitle = styled.div`
  width: 574px;
  height: 30px;
  padding-top: 4px;
  padding-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
  font-size: 16px;
  font-weight: bold;
`;

const CommunityOtaverseBoxWrapper = styled.div`
  width: 574px;
  height: 150px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid lightgray;
  gap: 0.8rem;
`;

const CommunityOtaverseBoxImage = styled.div`
  width: 110px;
  height: 60px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;
const CommunityOtaverseBoxText = styled.div`
  width: 462px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;

  & > div:nth-child(1) {
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    cursor: pointer;
  }
  & > div:nth-child(2) {
    font-size: 13px;
    margin-top: 0.5rem;
    color: darkgray;
    cursor: pointer;
  }
`;
const CommunityOtaverseBoxTextTitle = styled.div`
  width: 382px;
  height: 100%;
`;
const CommunityOtaverseBoxTextDate = styled.div`
  width: 80px;
  height: 100%;
  font-size: 12px;
  color: darkgray;
`;

const CommunityOtaeminColumn = styled.div`
  width: 574px;
  height: 272px;
  border: 1px solid lightgray;
`;

const CommunityOtaeminColumnTitle = styled.div`
  width: 574px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
`;

const CommunityOtaeminColumnBoxDetail = styled.div`
  width: 574px;
  height: 189px;
  display: flex;
  flex-direction: row;
`;

const CommunityOtaeminColumnBoxWrapper = styled.div`
  width: 574px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CommunityOtaeminColumnBoxImage = styled.div`
  width: 127px;
  height: 125px;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;
const CommunityOtaeminColumnBoxTitle = styled.div`
  width: 128px;
  height: 37px;
  cursor: pointer;
`;
const CommunityOtaeminColummBoxDescription = styled.div`
  width: 128px;
  color: darkgray;
  cursor: pointer;
`;
const CommunityOtaeminColumnBoxDate = styled.div`
  width: 128px;
  color: darkgray;
`;

const OtaverseDetails1 = [
  {
    imageUrl: "/images/OtaverseDetail01.png",
    title: "JTBC 모빅프로젝트 킥오프 날",
    detail:
      "김감독이 임원이하 직원들에게 블록체인 사용 체험 시키고 제가 협업 그 이상의  상상을 말합니다 . . .",
    date: "2024-02-16",
  },
  {
    imageUrl: "/images/OtaverseDetail02.png",
    title: "2024년 1월 결산 보고합니다.",
    detail:
      "2024년 10억원을 확보해서 모빅생태계를 널리 알리기 위해 홍보, 마케팅, 홈페이지와 시스템 구축 . . . ",
    location: "위치 | 성남시 분당구",
    date: "2024-01-16",
  },
  {
    imageUrl: "/images/OtaverseDetail03.png",
    title: "보기만 해도 흐뭇한 사진 뙇",
    detail:
      "산모님들 아기와 함께 건강히 미래를 열어 가시길 기도합니다. 모빅이 함께 합니다 . . .",
    date: "2024-01-10",
  },
  {
    imageUrl: "/images/OtaverseDetail04.png",
    title: "다섯살 모빅과 영살 도윤 아기와의 약속",
    id: "2024년 1월 1일 태어난 이도윤 아기가 첫번째 토닥토닥 프로젝트의 주인공이 되었습니다 . . .",
    detail: "위치 | 성남시 분당구",
    date: "2024-01-01",
  },
];

const OtaverseDetails2 = [
  {
    imageUrl: "/images/OtaverseDetail01.png",
    title: "JTBC 모빅프로젝트..",
    date: "2024-01-16",
    view: "조회 1029",
  },
  {
    imageUrl: "/images/OtaverseDetail02.png",
    title: "2024년 1월 결산 보고합니다.",
    date: "2024-01-16",
    view: "조회 856",
  },
  {
    imageUrl: "/images/OtaverseDetail03.png",
    title: "보기만 해도 흐뭇한 사진 뙇",
    date: "2024-01-10",
    view: "조회 1200",
  },
  {
    imageUrl: "/images/OtaverseDetail04.png",
    title: "다섯살 모빅과 영살 도윤 아기와의 약속",
    date: "2024-01-01",
    view: "조회 654",
  },
];

const CommunityRightBox = styled.div`
  width: 600px;
  height: 570px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

const MobickCommunity = styled.div`
  width: 574px;
  height: 546px;
  border: 1px solid lightgray;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MobickCommunityTitleBox = styled.div`
  width: 574px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid lightgray;
`;

const MobickCommunityDetail = styled.div`
  width: 573px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;
const MobickCommunityDetailBox = styled.div`
  width: 574px;
  height: 37px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
  background-color: ${(props) => (props.isBold ? "whitesmoke" : "transparent")};

  border-bottom: 1px solid lightgray;
  & > div:nth-child(1) {
    width: 15%;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  & > div:nth-child(2) {
    width: 70%;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  & > div:nth-child(3) {
    width: 10%;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div:nth-child(4) {
    width: 20%;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CommunityData = [
  {
    category: "잡담",
    title: "서초동 인터넷 일시 장애로 지갑서버 및 모빅매니아 서비스에 ..",
    thumb: "396",
    date: "2024-2-18",
  },
  {
    category: "잡담",
    title: "어제 회관에서 있었던 공좍님의 롤강의 입니다.",
    thumb: "356",
    date: "2024-2-13",
  },
  {
    category: "정보",
    title: "중요‼‼‼ 텔레그램에서 스캠피싱하는애들 모빅에도 꼬였습니다",
    thumb: "293",
    date: "2024-2-13",
  },
  {
    category: "잡담",
    title: "공좍님이 보시는 빨간색과 제가 보는 빨간색이 같은건가요?",
    thumb: "21",
    date: "2024-2-18",
  },
  {
    category: "홍보",
    title: "모빅 카페는 가지 4단계를 유지하고 있는 카페 입니다!",
    thumb: "6",
    date: "2024-2-18",
  },
  {
    category: "잡담",
    title: "서초동 인터넷 일시 장애로 지갑서버 및 모빅매니아 서비스에..",
    thumb: "5",
    date: "2024-2-18",
  },
  {
    category: "잡담",
    title: "롤하지마세요 질병겜입니다",
    thumb: "12",
    date: "2024-2-18",
  },
  {
    category: "잡담",
    title: "일반 예능 채널에도 비트코인 얘기가 나오는군요. ",
    thumb: "9",
    date: "2024-2-18",
  },
  {
    category: "잡담",
    title: "해운대에서 갤럭시 오픈런을 한다면 이런모습일까요? ㅎㅎㅎ",
    thumb: "6",
    date: "2024-2-18",
  },
  {
    category: "잡담",
    title: "전 영화한편~~퇴장합니다~~~",
    thumb: "18",
    date: "2024-2-18",
  },
  {
    category: "잡담",
    title: " 라방 넘 좋았네요 오늘 ㅎㅎ ",
    thumb: "11",
    date: "2024-2-18",
  },
  {
    category: "잡담",
    title: "대장님(비트코인) 캘록 캘록 ",
    thumb: "25",
    date: "2024-2-18",
  },
  {
    category: "잡담",
    title: "오늘의 방송 한마디 [작업중이니까 조용해봐.]",
    thumb: "8",
    date: "2024-2-18",
  },
  {
    category: "잡담",
    title: "일반 예능 채널에도 비트코인 얘기가 나오는군요. ",
    thumb: "12",
    date: "2024-2-18",
  },
];

export default function Community() {
  return (
    <StyledCommunityWrapper>
      <CommunityTitleBox>커뮤니티</CommunityTitleBox>
      <CommunityNoticeBox>
        <NoticeText> [공지사항] ‘모빌렛 5차’ - 추가 입고되었습니다.</NoticeText>
      </CommunityNoticeBox>
      <CommunityBoxWrapper>
        <CommunityLeftBox>
          <CommunityOtaverse>
            <CommunityOtaverseTitle>Otaverse 최신글</CommunityOtaverseTitle>
            {OtaverseDetails1.map((item, index) => (
              <CommunityOtaverseBoxWrapper key={index}>
                <CommunityOtaverseBoxImage
                  imageUrl={item.imageUrl}
                ></CommunityOtaverseBoxImage>
                <CommunityOtaverseBoxText>
                  <div>
                    <CommunityOtaverseBoxTextTitle>
                      {item.title}
                    </CommunityOtaverseBoxTextTitle>
                    <CommunityOtaverseBoxTextDate>
                      {item.date}
                    </CommunityOtaverseBoxTextDate>
                  </div>
                  <div>{item.detail}</div>
                </CommunityOtaverseBoxText>
              </CommunityOtaverseBoxWrapper>
            ))}
          </CommunityOtaverse>
          <CommunityOtaeminColumn>
            <CommunityOtaeminColumnTitle>
              오태민 칼럼
            </CommunityOtaeminColumnTitle>
            <CommunityOtaeminColumnBoxDetail>
              <CommunityOtaeminColumnBoxWrapper>
                {OtaverseDetails2.map((column, index) => {
                  return (
                    <div key={index}>
                      <CommunityOtaeminColumnBoxImage>
                        <img src={column.imageUrl} alt="4thWallet" />
                      </CommunityOtaeminColumnBoxImage>
                      <CommunityOtaeminColumnBoxTitle>
                        {column.title}
                      </CommunityOtaeminColumnBoxTitle>
                      <CommunityOtaeminColummBoxDescription>
                        {column.name}
                      </CommunityOtaeminColummBoxDescription>
                      <CommunityOtaeminColumnBoxDate>
                        {column.date}
                      </CommunityOtaeminColumnBoxDate>
                    </div>
                  );
                })}
              </CommunityOtaeminColumnBoxWrapper>
            </CommunityOtaeminColumnBoxDetail>
          </CommunityOtaeminColumn>
        </CommunityLeftBox>
        <CommunityRightBox>
          <MobickCommunity>
            <MobickCommunityTitleBox>일반 게시판</MobickCommunityTitleBox>
            <MobickCommunityDetail>
              {/* 커뮤니티 글제목들 매핑 부분 */}

              {CommunityData.map((item, index) => (
                <MobickCommunityDetailBox
                  key={index}
                  // 처음 세 번째 데이터에 대해서만 isBold를 true로 설정
                  isBold={index < 3}
                >
                  <div>{item.category}</div>
                  <div>{item.title}</div>
                  <div>{item.thumb}</div>
                  <div>{item.date}</div>
                </MobickCommunityDetailBox>
              ))}
            </MobickCommunityDetail>
          </MobickCommunity>
        </CommunityRightBox>
      </CommunityBoxWrapper>
    </StyledCommunityWrapper>
  );
}
