import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSession } from "next-auth/react";

import Header from "@/components/common/Header";
import Center from "@/components/common/Center";
import LogoAndSearch from "@/components/common/LogoAndSearch";
import AdArea from "@/components/common/AdArea";
import Footer from "@/components/common/Footer";
import CommunityList from "@/components/community/CommunityList";

import Pagination from "@/components/common/Pagination";

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
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  span {
    margin: 0 10px;
    padding: 5px 10px;
    cursor: pointer;
    user-select: none;
  }

  .page-item {
    &:hover {
      background-color: #ddd;
    }
  }

  .disabled {
    color: #ccc;
    pointer-events: none;
  }
`;

export default function CommunityMobicker() {
  const { data: session } = useSession();
  const handleWriteButtonClick = (e) => {
    if (!session) {
      // 로그인 상태가 아니면 경고 메시지를 표시하고 기본 이벤트를 막습니다.
      e.preventDefault();
      alert("로그인을 해주세요.");
    } else {
      // 로그인 상태면 글쓰기 페이지로 이동합니다.
      window.location.href = "/community/write-post";
    }
  };

  const [posts, setPosts] = useState([]); // 상태를 추가
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [isLoading, setIsLoading] = useState(true);

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
      setPosts(sortedData);
      setIsLoading(false); // 데이터 로딩 완료
    }
    fetchPosts();
  }, []);

  // 현재 페이지에 따라 표시할 게시물 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // 수정: 이 부분이 중요합니다.
  // 페이지 변경 이벤트 핸들러
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage(
      currentPage < Math.ceil(posts.length / postsPerPage)
        ? currentPage + 1
        : currentPage
    );
  const prevPage = () =>
    setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
  // 페이지 번호 배열 생성
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 페이지 그룹 이동
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const nextPageGroup = () => {
    const newPage = Math.min(currentPage + 10, totalPages);
    setCurrentPage(newPage);
  };

  const prevPageGroup = () => {
    const newPage = Math.max(currentPage - 10, 1);
    setCurrentPage(newPage);
  };

  return (
    <StyledDiv>
      <Center>
        <Header />
        <LogoAndSearch />
        <CommunityList />
        {/* <QuillWrapper modules={modules} formats={formats} theme="snow" placeholder='내용을 입력해주세요' value={value} onChange={setValue} /> */}
        <MainWrapper>
          <LeftCommunity>
            <LeftCommunityCategory>
              모비커 게시판
              <WriteButton onClick={handleWriteButtonClick}>글쓰기</WriteButton>
            </LeftCommunityCategory>
            <LeftCommunityHotContent></LeftCommunityHotContent>
            <LeftCommunityContentWrapper>
              {currentPosts.map((post, index) => (
                <LeftCommunityContents href={`/writing/${post.id}`} key={index}>
                  <div>
                    <div>{post.id}</div>
                    <img src="/images/img-none.png" alt="img" width={20} />
                    <div>{post.title}</div>
                  </div>
                  <div>
                    <div>{post.nickname}</div>
                    <div>{post.thumb}</div>
                    <div>{formatDateTime(post.createdAt)}</div>
                  </div>
                </LeftCommunityContents>
              ))}
            </LeftCommunityContentWrapper>
            {/* <PaginationWrapper>
              <span
                className={currentPage === 1 ? "disabled" : "page-item"}
                onClick={() => paginate(currentPage - 1)}
              >
                이전
              </span>
              {pageNumbers.map((number) => (
                <span
                  key={number}
                  className="page-item"
                  onClick={() => paginate(number)}
                >
                  {number}
                </span>
              ))}
              <span
                className={
                  currentPage === pageNumbers.length ? "disabled" : "page-item"
                }
                onClick={() => paginate(currentPage + 1)}
              >
                다음
              </span>
            </PaginationWrapper> */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
              nextPageGroup={nextPageGroup}
              prevPageGroup={prevPageGroup}
            />
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
