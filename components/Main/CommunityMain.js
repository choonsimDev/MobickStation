import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledCommunityWrapper = styled.div`
  width: 1200px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const CommunityBox = styled.div`
  width: 588px;
  border-right: none; // 왼쪽 테두리 제거
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const MobickCommunity = styled.div`
  width: 588px;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  margin-top: 10px;
`;

const MobickCommunityTitleBoxWrapper = styled.div`
  width: 588px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
`;

const MobickCommunityTitleBox = styled.div`
  text-decoration: none;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  padding-left: 20px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #f6931a;
  }
`;

const CommunityTitleButton = styled.div`
  cursor: pointer;
  text-decoration: none;
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
  & :hover {
    background-color: #f5f5f5;
  }
`;
const MobickCommunityDetailBox = styled.a`
  width: 588px;
  height: 40px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 14px;
  text-decoration: none;
  box-sizing: border-box;
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
  background-color: ${(props) => (props.isBold ? "whitesmoke" : "transparent")};

  border-bottom: 1px solid lightgray;
  & > div:nth-child(1) {
    width: 70px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  & > div:nth-child(2) {
    width: 300px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    cursor: pointer;
  }
  & > div:nth-child(3) {
    width: 100px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div:nth-child(4) {
    width: 50px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div:nth-child(5) {
    width: 100px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobickCommunityLinkButton = styled.a`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 14px;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

export default function CommunityMain() {
  const [communityPosts, setCommunityPosts] = useState([]);
  const [anonymousPosts, setAnonymousPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts(apiEndpoint, setPosts) {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "POST" }),
      });
      const data = await response.json();

      // 날짜 내림차순 정렬
      const sortedData = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setPosts(sortedData.slice(0, 14));
    }

    fetchPosts("/api/dbCommunityPost/", setCommunityPosts);
    fetchPosts("/api/dbAnonymousPost/", setAnonymousPosts);
  }, []);

  // 개별 구성요소를 추출
  function formatDateTime(dateTimeStr) {
    const date = new Date(dateTimeStr);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  return (
    <StyledCommunityWrapper>
      <CommunityTitleBox>
        <CommunityTitleButton href="/community">커뮤니티</CommunityTitleButton>
      </CommunityTitleBox>

      <CommunityBoxWrapper>
        <CommunityBox>
          <MobickCommunity>
            <MobickCommunityTitleBoxWrapper>
              <MobickCommunityTitleBox href="/community">
                모비커 게시판
              </MobickCommunityTitleBox>
              <MobickCommunityLinkButton href="/community">
                더보기
              </MobickCommunityLinkButton>
            </MobickCommunityTitleBoxWrapper>
            <MobickCommunityDetail>
              {communityPosts.map(
                (
                  post,
                  index // API에서 가져온 데이터를 매핑하여 표시
                ) => (
                  <MobickCommunityDetailBox
                    href={`/writing/${post.id}`}
                    key={index}
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
        </CommunityBox>
        <CommunityBox>
          <MobickCommunity>
            <MobickCommunityTitleBoxWrapper>
              <MobickCommunityTitleBox href="/anonymous">
                익명 게시판
              </MobickCommunityTitleBox>
              <MobickCommunityLinkButton href="/anonymous">
                더보기
              </MobickCommunityLinkButton>
            </MobickCommunityTitleBoxWrapper>
            <MobickCommunityDetail>
              {anonymousPosts.map((post) => (
                <MobickCommunityDetailBox
                  href={`/writing/anonymous-${post.id}`}
                  key={post.id}
                  isBold={post.isImportant}
                >
                  <div>{post.id}</div>
                  <div>{post.title}</div>
                  <div>{post.nickname}</div>
                  <div>{post.thumb}</div>
                  <div>{formatDateTime(post.createdAt)}</div>
                </MobickCommunityDetailBox>
              ))}
            </MobickCommunityDetail>
          </MobickCommunity>
        </CommunityBox>
      </CommunityBoxWrapper>
    </StyledCommunityWrapper>
  );
}
