import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "@/components/Main/Header";
import LogoAndSearch from "@/components/Main/LogoAndSearch";
import Footer from "@/components/Main/Footer";
import Link from "next/link";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import QuillEditor from "@/components/QuillEditor";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CommunityBar = styled.div`
  width: 1200px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
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
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid lightblue;
  font-size: 18px;
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
`;

const HotContentItem = styled.div`
  width: 200px;
  height: 170px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  position: relative;
  cursor: pointer;
`;

const HotContentItemImage = styled.div`
  width: 200px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  position: absolute;
  cursor: pointer;
`;

const HotContentItemTitle = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0px;
  & > div {
    color: white;
  }
`;

const LeftCommunityContentWrapper = styled.div`
  width: 900px;
  height: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: pink; */
`;

const LeftCommunityContents = styled.div`
  width: 900px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid lightgray;
  & > div:nth-child(1) {
    width: 750px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > div:nth-child(1) {
      width: 100px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid lightgray;
      cursor: pointer;
    }
    & > div:nth-child(2) {
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 10px;
      cursor: pointer;
    }
    & > div:nth-child(3) {
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
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & > div:nth-child(1) {
      width: 75px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > div:nth-child(2) {
      width: 75px;
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
    margin: 0 5px; /* 페이지 번호 사이의 간격 */
    padding: 5px 10px; /* 페이지 번호의 패딩 */
    cursor: pointer;
    user-select: none; /* 텍스트 선택 방지 */
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
const LeftCommunityAD = styled.div`
  width: 900px;
  height: 230px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightseagreen;
`;
// const LeftCommunityNews = styled.div`
//   width: 900px;
//   height: 200px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   background-color: lightslategray;
// `;
// const LeftCommunityTempWrapper = styled.div`
//   width: 900px;
//   height: 400px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   background-color: lightskyblue;
// `;

// const LeftCommunityTempBox = styled.div`
//   width: 900px;
//   height: 190px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid lightgray;
// `;

const RightCommunity = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightCommunityRealTimeBest = styled.div`
  width: 300px;
  height: 430px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const RightCommunityAD = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background-color: lightgray;
`;

const RightCommunityCategory1Best = styled.div`
  width: 300px;
  height: 430px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background-color: lightgray;
`;

const RightCommunityCategory2Best = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background-color: lightgray;
`;

const StyledDiv2 = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
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

export default function Community() {
  const [value, setValue] = useState("");

  return (
    <StyledDiv>
      <Header />
      <LogoAndSearch />
      <CommunityBar>Community Bar</CommunityBar>
      {/* <QuillWrapper modules={modules} formats={formats} theme="snow" placeholder='내용을 입력해주세요' value={value} onChange={setValue} /> */}
      <MainWrapper>
        <LeftCommunity>
          <LeftCommunityCategory>
            토론 게시판
            <WriteButton href="/write">글쓰기</WriteButton>
          </LeftCommunityCategory>
          <LeftCommunityHotContent>
            <HotContentItem>
              <HotContentItemImage>
                인기 게시글 이미지
                <HotContentItemTitle>
                  <div>인기 게시글 4개</div>
                </HotContentItemTitle>
              </HotContentItemImage>
            </HotContentItem>
            <HotContentItem>
              <HotContentItemImage>
                인기 게시글 이미지
                <HotContentItemTitle>
                  <div>인기 게시글 4개</div>
                </HotContentItemTitle>
              </HotContentItemImage>
            </HotContentItem>
            <HotContentItem>
              <HotContentItemImage>
                인기 게시글 이미지
                <HotContentItemTitle>
                  <div>인기 게시글 4개</div>
                </HotContentItemTitle>
              </HotContentItemImage>
            </HotContentItem>
            <HotContentItem>
              <HotContentItemImage>
                인기 게시글 이미지
                <HotContentItemTitle>
                  <div>인기 게시글 4개</div>
                </HotContentItemTitle>
              </HotContentItemImage>
            </HotContentItem>
          </LeftCommunityHotContent>
          <LeftCommunityContentWrapper>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
            <LeftCommunityContents>
              <div>
                <div>Image</div>
                <div>Title</div>
                <div>[Comment]</div>
              </div>
              <div>
                <div>ID</div>
                <div>Date</div>
              </div>
            </LeftCommunityContents>
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
            <span>10</span>
            <span className="next">▶</span>
          </LeftCommunityContentsPageButton>
          <LeftCommunityAD>AD</LeftCommunityAD>
          {/* <LeftCommunityNews>News</LeftCommunityNews> */}
          {/* <LeftCommunityTempWrapper>
            <LeftCommunityTempBox>TempBox1</LeftCommunityTempBox>
            <LeftCommunityTempBox>TempBox2</LeftCommunityTempBox>
          </LeftCommunityTempWrapper> */}
        </LeftCommunity>
        <RightCommunity>
          <RightCommunityRealTimeBest>RealTimeBest</RightCommunityRealTimeBest>
          <RightCommunityAD>AD</RightCommunityAD>
          <RightCommunityCategory1Best>
            Category1 Best
          </RightCommunityCategory1Best>
          <RightCommunityCategory2Best>
            Category2 Best
          </RightCommunityCategory2Best>
        </RightCommunity>
      </MainWrapper>
      <StyledDiv2>
        <StyledBack href="/">돌아가기</StyledBack>
      </StyledDiv2>
      <Footer />
    </StyledDiv>
  );
}
