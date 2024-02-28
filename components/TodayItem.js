import { useState } from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { products, tabs } from "../DataBase/TodayItemDB";

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
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  padding-left: 30px;
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
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
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
  }
  & > div:nth-child(2) {
    font-size: 0.9rem;
    color: dodgerblue;
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
  }
  & > div:nth-child(3) {
    font-size: 0.8rem;
    text-align: justify;
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
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
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
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
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 0.9rem;
    color: gray;
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
  }
  & > div:nth-child(3) {
    font-size: 0.8rem;
    text-align: justify;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
  }
  & > div:nth-child(4) {
    font-size: 0.9rem;
    color: gray;
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
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
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
  }
  & > div:nth-child(2) {
    ${({ activeTab }) =>
      activeTab === "베스트셀러" && "border-bottom: 1px solid lightgray;"}
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
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
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
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
const StyledFourthRankingWrapper = styled.div`
  width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 52px;
`;

const StyledFourthRanking = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: gray;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;
const StyledFourthRankItem = styled.div`
  width: 80%;
  height: 36px;
  margin-top: 5px;
  margin-left: 15px;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }

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

export default function TodayItem() {
  const [activeTab, setActiveTab] = useState(tabs[0].id); // 첫 번째 탭을 기본값으로 설정
  const [rankRange, setRankRange] = useState("1-5"); // '1-5' 또는 '6-10'을 나타내는 상태

  const filterItemsByRank = (items) => {
    const start = rankRange === "1-5" ? 0 : 5; // '1-5'이면 0에서 시작, '6-10'이면 5에서 시작
    return items.slice(start, start + 5); // 시작점부터 다섯 항목을 선택
  };

  return (
    <StyledRecommendWrapper>
      <RecommendFirst>
        <RecommendFirstTitle>category</RecommendFirstTitle>
        <RecommendProduct>
          <RecommendFirstImage>
            <img src={products[0].image} alt={products[0].title} />
          </RecommendFirstImage>
          <RecommendFirstDescription>
            <RecommendDescriptionBox>
              <div>{products[0].title}</div>
              <div>{products[0].maker}</div>
              <div>{products[0].description}</div>
            </RecommendDescriptionBox>
          </RecommendFirstDescription>
        </RecommendProduct>
      </RecommendFirst>
      <RecommendSecondImage>
        <img src={products[1].image} alt={products[1].title} />
      </RecommendSecondImage>
      <RecommendThird>
        <RecommendThirdMenu>
          <RecommendThirdTitle>오늘의 상품</RecommendThirdTitle>
          <RecommendThirdItemDescription>
            <div>{products[1].title}</div>
            <div>{products[1].description}</div>
            <div>{products[1].series}</div>
            <div>{products[1].maker}</div>
            <div>{products[1].price}</div>
            {/* <div>"타마의 야심작 "관악산 어드벤처 퍼즐"</div>
            <div>
              <p>초판 종이지갑 디자이너 타마의 독특한 아이디어 상품.</p>
              <p>퍼즐을 통해 우리 모두 관악산으로 돌아가보자</p>
              <p>산을 오르는 마음으로 퍼즐을 맞추면 무슨 일이 일어날까 ..</p>
            </div>
            <div>마운틴 어드벤처 퍼즐</div>
            <div>테마 그림 | 모비커스</div>
            <div>13,500원</div> */}
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
          {tabs.map((tab) => (
            <div key={tab.id} onClick={() => setActiveTab(tab.id)}>
              {tab.title}
            </div>
          ))}
        </RecommendFourthNavi>
        <StyledSearchWrapper>
          <StyledInput placeholder="Search..."></StyledInput>
          <div>
            <IoSearchOutline />
          </div>
        </StyledSearchWrapper>
        <StyledFourthRankingWrapper>
          <StyledFourthRanking onClick={() => setRankRange("1-5")}>
            1 ~ 5위
          </StyledFourthRanking>
          <StyledFourthRanking onClick={() => setRankRange("6-10")}>
            6 ~ 10위
          </StyledFourthRanking>
        </StyledFourthRankingWrapper>
        {filterItemsByRank(
          tabs.find((tab) => tab.id === activeTab)?.items || []
        ).map((item, index) => (
          <StyledFourthRankItem key={index}>{item}</StyledFourthRankItem>
        ))}
      </RecommendFourth>
    </StyledRecommendWrapper>
  );
}
