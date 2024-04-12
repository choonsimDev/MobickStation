import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { useSession } from "next-auth/react";

import Header from "@/components/Main/Header";
import Center from "@/components/Main/Center";
import LogoAndSearch from "@/components/Main/LogoAndSearch";
import AdArea from "@/components/Main/AdArea";
import Footer from "@/components/Main/Footer";
import CommunityList from "@/components/Community/CommunityList";

import Pagination from "@/components/Pagination";

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

export default function CommunityTrade() {
  return (
    <StyledDiv>
      <Center>
        <Header />
        <LogoAndSearch />
        <CommunityList />
        {/* <QuillWrapper modules={modules} formats={formats} theme="snow" placeholder='내용을 입력해주세요' value={value} onChange={setValue} /> */}
        <MainWrapper>
          <LeftCommunity>
            <LeftCommunityCategory>거래 게시판</LeftCommunityCategory>
            <LeftCommunityHotContent></LeftCommunityHotContent>
            <LeftCommunityContentWrapper>
              <LeftCommunityContents></LeftCommunityContents>
            </LeftCommunityContentWrapper>
            <div>페이지 준비중입니다.</div>
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
