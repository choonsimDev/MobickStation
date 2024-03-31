import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  CommunityData,
  OtaverseDetails1,
  OtaverseDetails2,
} from "../../DataBase/CommunityDB";

const StyledCommunityWrapper = styled.div`
  width: 1200px;
  height: 660px;
  margin-top: 20px;
  box-sizing: border-box;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); // 그림자 추가 */
`;

const CommunityTitleBox = styled.a`
  width: 1200px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  box-sizing: border-box;
  border-bottom: 1px solid lightgray;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const CommunityNoticeBox = styled.div`
  width: 1200px;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  box-sizing: border-box;
`;
const NoticeText = styled.a`
  color: gray;
  font-weight: bold;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const CommunityBoxWrapper = styled.div`
  width: 1200px;
  height: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const CommunityLeftBox = styled.div`
  width: 600px;
  height: 570px;
  border-right: none; // 오른쪽 테두리 제거
  border-left: none; //  테두리 제거
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex;
  box-sizing: border-box;
  padding: 12px;
  gap: 12px;
`;

const CommunityOtaverse = styled.div`
  width: 575px;
  height: 312px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

const CommunityOtaverseTitleWrapper = styled.div`
  width: 574px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
`;
const CommunityOtaverseTitle = styled.a`
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-decoration: none;
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
  box-sizing: border-box;
  gap: 0.8rem;
`;

const CommunityOtaverseBoxImage = styled.a`
  width: 110px;
  height: 60px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;
const CommunityOtaverseBoxText = styled.a`
  width: 462px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  color: black;
  text-decoration: none;
  box-sizing: border-box;

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
  box-sizing: border-box;
`;

const CommunityOtaeminColumnTitle = styled.div`
  width: 574px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 8px;
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
  height: 192px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
`;

const CommunityOtaeminColumnBoxImage = styled.a`
  width: 127px;
  height: 125px;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    object-fit: cover;
    object-position: center;
    cursor: pointer;
  }
`;
const CommunityOtaeminColumnBoxTitle = styled.a`
  width: 128px;
  height: 37px;
  display: flex;
  color: black;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;
const CommunityOtaeminColummBoxDescription = styled.a`
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
  border-right: none; // 왼쪽 테두리 제거
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 12px;
  box-sizing: border-box;
`;
const MobickCommunity = styled.div`
  width: 588px;
  height: 570px;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  margin-top: 10px;
`;

const MobickCommunityTitleBoxWrapper = styled.div`
  width: 588px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
`;

const MobickCommunityTitleBox = styled.a`
  text-decoration: none;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: black;
  padding-left: 8px;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const MobickCommunityDetail = styled.div`
  width: 588px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: flex-start;
  box-sizing: border-box;
`;
const MobickCommunityDetailBox = styled.a`
  width: 588px;
  height: 37px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 14px;
  color: black;
  text-decoration: none;
  box-sizing: border-box;
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

const MobickCommunityTitleButtonWrapper = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
`;

const MobickCommunityLinkButton = styled.a`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

export default function CommunityMain() {
  const [posts, setPosts] = useState([]); // 상태를 추가

  function formatDateTime(dateTimeStr) {
    const date = new Date(dateTimeStr);

    // 개별 구성요소를 추출
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth()는 0부터 시작하므로 +1 필요
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    // 포맷에 맞게 조합
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/dbCommunityPost/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "POST" }),
      });
      const data = await response.json();

      // 날짜를 기준으로 내림차순 정렬
      const sortedData = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      // 최대 14개의 게시글만 선택
      setPosts(sortedData.slice(0, 14));
    }
    fetchPosts();
  }, []);

  return (
    <StyledCommunityWrapper>
      <CommunityTitleBox href="/community">커뮤니티</CommunityTitleBox>
      {/* <CommunityNoticeBox>
        <NoticeText href="/community">
          [공지사항] ‘모빌렛 5차’ - 추가 입고되었습니다.
        </NoticeText>
      </CommunityNoticeBox> */}
      <CommunityBoxWrapper>
        <CommunityLeftBox>
          <CommunityOtaverse>
            <CommunityOtaverseTitleWrapper>
              <CommunityOtaverseTitle href="/community">
                Otaverse 최신글
              </CommunityOtaverseTitle>
            </CommunityOtaverseTitleWrapper>
            {OtaverseDetails1.map((item, index) => (
              <CommunityOtaverseBoxWrapper key={index}>
                <CommunityOtaverseBoxImage
                  href="/community"
                  imageUrl={item.imageUrl}
                ></CommunityOtaverseBoxImage>
                <CommunityOtaverseBoxText href="/community">
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
            <CommunityOtaeminColumnTitle href="/community">
              오태민 칼럼
            </CommunityOtaeminColumnTitle>
            <CommunityOtaeminColumnBoxDetail>
              <CommunityOtaeminColumnBoxWrapper>
                {OtaverseDetails2.map((column, index) => {
                  return (
                    <div key={index}>
                      <CommunityOtaeminColumnBoxImage href="/community">
                        <img src={column.imageUrl} alt="4thWallet" />
                      </CommunityOtaeminColumnBoxImage>
                      <CommunityOtaeminColumnBoxTitle href="/community">
                        {column.title}
                      </CommunityOtaeminColumnBoxTitle>
                      <CommunityOtaeminColummBoxDescription href="/community">
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
            <MobickCommunityTitleBoxWrapper>
              <MobickCommunityTitleBox href="/community">
                토론 게시판
              </MobickCommunityTitleBox>
              <MobickCommunityLinkButton href="/community">
                더보기
              </MobickCommunityLinkButton>
            </MobickCommunityTitleBoxWrapper>
            <MobickCommunityDetail>
              {posts.map(
                (
                  post,
                  index // API에서 가져온 데이터를 매핑하여 표시
                ) => (
                  <MobickCommunityDetailBox
                    href={`/writing/${post.id}`}
                    key={index}
                    isBold={index < 3}
                  >
                    <div>{post.id}</div>
                    <div>{post.title}</div>
                    <div>{post.nickname}</div>
                    <div>{post.thumb}</div>
                    <div>{formatDateTime(post.createdAt)}</div>
                  </MobickCommunityDetailBox>
                )
              )}
            </MobickCommunityDetail>
          </MobickCommunity>
        </CommunityRightBox>
      </CommunityBoxWrapper>
    </StyledCommunityWrapper>
  );
}
