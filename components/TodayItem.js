import { useState } from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

const StyledRecommendWrapper = styled.header`
  width: 1200px;
  height: 400px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid lightgray;
`;

const RecommendFirst = styled.div`
  width: 240px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-right: 1px solid lightgray;
`;
const RecommendSecondImage = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-right: 1px solid lightgray;

  img {
    width: 240px;
    cursor: pointer;
  }
`;
const RecommendThird = styled.div`
  width: 420px;
  height: 400px;
  display: flex;
  flex-direction: row;
  border-right: 1px solid lightgray;
`;
const RecommendFourth = styled.div`
  width: 240px;
  height: 400px;
`;

const RecommendFirstTitle = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RecommendProduct = styled.div`
  width: 90%;
  height: 350px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  border: 1px solid lightgray;
  border-radius: 4px;
`;
const RecommendFirstImage = styled.div`
  width: 221px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: lightgray;
  img {
    height: 110%;
    cursor: pointer;
  }
`;
const RecommendFirstDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RecommendDescriptionBox = styled.div`
  margin-bottom: 0.6rem;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & > div {
    margin-bottom: 0.3rem;
    cursor: pointer;
  }
  & > div:first-child {
    margin-top: 0.3rem;
    font-size: 1rem;
    font-weight: bold;
  }
  & > div:nth-child(2) {
    font-size: 0.9rem;
    color: dodgerblue;
  }
  & > div:nth-child(3) {
    font-size: 0.8rem;
    text-align: justify;
  }
`;

const RecommendThirdMenu = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const RecommendThirdTitle = styled.div`
  width: 100%;
  height: 40px;
  padding-left: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
  font-size: 0.9rem;
  font-weight: bold;
`;
const RecommendThirdItemDescription = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid lightgray;
  & > div {
    margin-bottom: 0.9rem;
    padding: 0px 20px;
  }
  & > div:first-child {
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: bold;
    color: dodgerblue;
    cursor: pointer;
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 0.9rem;
    color: gray;
    cursor: pointer;
  }
  & > div:nth-child(3) {
    font-size: 0.8rem;
    text-align: justify;
    font-weight: bold;
    cursor: pointer;
  }
  & > div:nth-child(4) {
    font-size: 0.9rem;
    color: gray;
  }
  & > div:nth-child(5) {
    font-size: 0.8rem;
    text-align: justify;
    font-weight: bold;
  }
`;
const RecommendThirdItemImageBox = styled.div`
  width: 420px;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 0.6rem;
  align-items: center;
`;
const RecommendThirdItemImage = styled.div`
  width: 74px;
  height: 90%;
  margin-bottom: 2px;
  overflow: hidden;
  background-color: lightgray;
  img {
    height: 100%;
    cursor: pointer;
  }
`;

const RecommendFourthNavi = styled.div`
  width: 100%;
  display: flex;
  flex: row;
  justify-content: space-around;
  align-items: center;
  & > div {
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  & > div:first-child {
    border-right: 1px solid lightgray;
    ${({ activeTab }) =>
      activeTab === "인기검색어" && "border-bottom: 1px solid lightgray;"}
  }
  & > div:nth-child(2) {
    ${({ activeTab }) =>
      activeTab === "베스트셀러" && "border-bottom: 1px solid lightgray;"}
  }
`;
const RecommendThirdListA = styled.div`
  width: 240px;
  height: 90%;
  padding-left: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const StyledSearchWrapper = styled.div`
  width: 230px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* gap: 1rem; */
  /* background-color: blue; */
  & div {
    position: relative;
    left: -30px;
    top: 2px;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
const StyledInput = styled.input`
  width: 230px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  border-color: lightblue;
  margin-left: 10px;
  padding: 5px;
`;
const StyledFourthRanking = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: gray;
  cursor: pointer;
`;
const StyledFourthRankItem = styled.div`
  width: 80%;
  height: 36px;
  margin-left: 14px;
  margin-bottom: 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  /* border: 1px solid lightgray; */
`;

const RecommendThirdListB = styled.div`
  width: 240px;
  height: 90%;
  padding-left: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Cursor = styled.div`
  cursor: pointer;
`;

export default function TodayItem() {
  const [activeTab, setActiveTab] = useState("베스트셀러");

  return (
    <StyledRecommendWrapper>
      <RecommendFirst>
        <RecommendFirstTitle>category</RecommendFirstTitle>
        <RecommendProduct>
          <RecommendFirstImage>
            <img src="/images/Choonsim.png" alt="choonsim" />
          </RecommendFirstImage>
          <RecommendFirstDescription>
            <RecommendDescriptionBox>
              <div>춘심이 겜블칩</div>
              <div>Joy4 제작 | 춘심소프트</div>
              <div>춘심이가 겜블칩을 주문제작해 드립니다.</div>
            </RecommendDescriptionBox>
          </RecommendFirstDescription>
        </RecommendProduct>
      </RecommendFirst>
      <RecommendSecondImage>
        <img src="/images/Tama_Puzzle1.png" alt="tamaPuzzle" />
      </RecommendSecondImage>
      <RecommendThird>
        <RecommendThirdMenu>
          <RecommendThirdTitle>오늘의 상품</RecommendThirdTitle>
          <RecommendThirdItemDescription>
            <div>"타마의 야심작 "관악산 어드벤처 퍼즐"</div>
            <div>
              <p>초판 종이지갑 디자이너 타마의 독특한 아이디어 상품.</p>
              <p>퍼즐을 통해 우리 모두 관악산으로 돌아가보자</p>
              <p>산을 오르는 마음으로 퍼즐을 맞추면 무슨 일이 일어날까 ..</p>
            </div>
            <div>마운틴 어드벤처 퍼즐</div>
            <div>테마 그림 | 모비커스</div>
            <div>13,500원</div>
          </RecommendThirdItemDescription>
          <RecommendThirdItemImageBox>
            <RecommendThirdItemImage>
              <img src="/images/Tama_Puzzle2.png" alt="tamaPuzzle" />
            </RecommendThirdItemImage>
            <RecommendThirdItemImage>
              <img src="/images/Tama_Puzzle3.png" alt="tamaPuzzle" />
            </RecommendThirdItemImage>
            <RecommendThirdItemImage>
              <img src="/images/Tama_Puzzle4.png" alt="tamaPuzzle" />
            </RecommendThirdItemImage>
            <RecommendThirdItemImage>
              <img src="/images/Tama_Puzzle5.png" alt="tamaPuzzle" />
            </RecommendThirdItemImage>
          </RecommendThirdItemImageBox>
        </RecommendThirdMenu>
      </RecommendThird>
      <RecommendFourth>
        <RecommendFourthNavi activeTab={activeTab}>
          <div onClick={() => setActiveTab("베스트셀러")}>베스트셀러</div>
          <div onClick={() => setActiveTab("인기검색어")}>인기검색어</div>
        </RecommendFourthNavi>
        {activeTab === "베스트셀러" ? (
          <RecommendThirdListA>
            <StyledSearchWrapper>
              <StyledInput placeholder="통합"></StyledInput>
              <div>
                <IoSearchOutline />
              </div>
            </StyledSearchWrapper>
            <StyledFourthRanking>1 ~ 5위 | 6 ~ 10위</StyledFourthRanking>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
              return (
                <StyledFourthRankItem key={index}>
                  {item}. 베스트 셀러 종이지갑
                </StyledFourthRankItem>
              );
            })}
          </RecommendThirdListA>
        ) : (
          <RecommendThirdListB>
            <StyledSearchWrapper>
              <StyledInput placeholder="통합"></StyledInput>
              <div>
                <IoSearchOutline />
              </div>
            </StyledSearchWrapper>
            <StyledFourthRanking>1 ~ 5위 | 6 ~ 10위</StyledFourthRanking>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
              return (
                <StyledFourthRankItem key={index}>
                  {item}. 인기 검색어 입니다
                </StyledFourthRankItem>
              );
            })}
          </RecommendThirdListB>
        )}
      </RecommendFourth>
    </StyledRecommendWrapper>
  );
}
