import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "@/components/Main/Header";
import Center from "@/components/Main/Center";
import LogoAndSearch from "@/components/Main/LogoAndSearch";
import AdArea from "@/components/Main/AdArea";
import Footer from "@/components/Main/Footer";
import CommunityList from "@/components/Community/CommunityList";

import "react-quill/dist/quill.snow.css";
// import Link from "next/link";
// import dynamic from "next/dynamic";
// import QuillEditor from "@/components/QuillEditor";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;

const LeftCommunity = styled.div`
  width: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LeftCommunityCategory = styled.div`
  width: 900px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid lightblue;
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const WriteButton = styled.a`
  margin-left: auto;
  margin-right: 12px;
  padding: 10px 20px;
  background-color: #f6931a;
  font-size: 14px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #e5821a;
  }
`;

const LeftCommunityHotContent = styled.div`
  width: 900px;
  height: 170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px 10px 0px;
  background-color: #f5f5f5;
`;

const LeftCommunityContentWrapper = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & :hover {
    background-color: #f5f5f5;
  }
  /* background-color: pink; */
`;

const LeftCommunityContents = styled.a`
  width: 900px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid lightgray;
  color: black;
  text-decoration: none;

  & > div:nth-child(1) {
    width: 800px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > div:nth-child(1) {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > div:nth-child(2) {
      width: 100px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid lightgray;
      cursor: pointer;
    }
    & > div:nth-child(3) {
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 15px;
      cursor: pointer;
    }
    & > div:nth-child(4) {
      width: 50px;
      height: 50px;
      color: red;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 10px;
      cursor: pointer;
    }
  }
  & > div:nth-child(2) {
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & > div:nth-child(1) {
      width: 125px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > div:nth-child(2) {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > div:nth-child(3) {
      width: 125px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const LeftCommunityContentsPageButton = styled.div`
  width: 900px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid lightgray;
  & > span {
    margin: 0 5px;
    padding: 5px 10px;
    cursor: pointer;
    user-select: none;
  }

  & > span:hover {
    background-color: #ddd; /* 호버 시 배경색 변경 */
  }
  & > .next {
    display: inline-block;
    width: 30px; /* 다음 버튼의 너비 */
    height: 30px; /* 다음 버튼의 높이 */
    line-height: 30px; /* 세로 정렬을 위해 높이와 동일하게 설정 */
    text-align: center; /* 텍스트 중앙 정렬 */
    cursor: pointer;
    user-select: none;
  }
  & > .next:hover {
    background-color: #ddd;
  }
`;
const RightCommunity = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const RightCommunityRealTimeBest = styled.div`
  width: 280px;
  height: 430px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  background-color: #f5f5f5;
`;

const RightCommunityAD = styled.div`
  width: 280px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: 1px solid lightgray;
  background-color: #f5f5f5;
`;

const ADWrapper = styled.div`
  display: flex;
  width: 900px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledBack = styled.a`
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #999999;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function CommunityNotice() {
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
      const response = await fetch("/api/dbNoticePost/", {
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
      setPosts(sortedData.slice(0, 20));
    }
    fetchPosts();
  }, []);

  return (
    <StyledDiv>
      <Center>
        <Header />
        <LogoAndSearch />
        <CommunityList />
        {/* <QuillWrapper modules={modules} formats={formats} theme="snow" placeholder='내용을 입력해주세요' value={value} onChange={setValue} /> */}
        <MainWrapper>
          <LeftCommunity>
            <LeftCommunityCategory>공지사항</LeftCommunityCategory>
            <LeftCommunityHotContent></LeftCommunityHotContent>
            <LeftCommunityContentWrapper>
              {posts.map(
                (
                  post,
                  index // API에서 가져온 데이터를 매핑하여 표시
                ) => (
                  <LeftCommunityContents
                    href={`/notice/${post.id}`}
                    key={index}
                  >
                    <div>
                      <div>{post.id}</div>
                      <img src="/images/img-none.png" alt="img" width={20} />
                      <div>{post.title}</div>
                    </div>
                    <div>
                      <div>{post.nickname}</div>
                      <div>{post.content}</div>
                      <div>{formatDateTime(post.createdAt)}</div>
                    </div>
                  </LeftCommunityContents>
                )
              )}
            </LeftCommunityContentWrapper>
            <LeftCommunityContentsPageButton>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span className="next">▶</span>
            </LeftCommunityContentsPageButton>
            <ADWrapper>
              <AdArea />
            </ADWrapper>
          </LeftCommunity>
          <RightCommunity>
            <RightCommunityRealTimeBest>
              실시간 인기글
            </RightCommunityRealTimeBest>
            <RightCommunityAD>AD Link</RightCommunityAD>
          </RightCommunity>
        </MainWrapper>
      </Center>

      <Footer />
    </StyledDiv>
  );
}
