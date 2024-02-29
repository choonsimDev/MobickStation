import styled from "styled-components";
import {
  CommunityData,
  OtaverseDetails1,
  OtaverseDetails2,
} from "../DataBase/CommunityDB";

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
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
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
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
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
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
  }
  & > div:nth-child(2) {
    font-size: 13px;
    margin-top: 0.5rem;
    color: darkgray;
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
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
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
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
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;
const CommunityOtaeminColummBoxDescription = styled.div`
  width: 128px;
  color: darkgray;
  cursor: pointer;
`;
const CommunityOtaeminColumnBoxDate = styled.div`
  width: 128px;
  color: darkgray;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

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
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
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
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }

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
