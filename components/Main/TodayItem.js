import { useState } from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { products, recommendImages, tabs } from "@/DataBase/TodayItemDB";

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
const RecommendSecondImage = styled.a`
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
const RecommendFirstImage = styled.a`
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

const RecommendDescriptionBox = styled.a`
  margin-bottom: 0.6rem;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: black;
  text-decoration: none;

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
const RecommendThirdItemDescription = styled.a`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid lightgray;
  color: black;
  text-decoration: none;

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
    text-align: left;
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
const RecommendThirdItemImage = styled.a`
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
`;
const TabTitle = styled.div`
  flex-grow: 1;
  height: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px 0; // 또는 필요에 따라 조정
  cursor: pointer;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  &:not(:last-child) {
    border-right: 1px solid lightgray;
  }
  // 현재 활성화된 탭의 하단 테두리를 제거합니다.
  ${({ isActive }) => isActive && `border-bottom: none;`}
`;

const StyledSearchWrapper = styled.div`
  width: 230px;
  margin-top: 10px;
  margin-left: 10px;
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
  margin-top: 10px;
  margin-left: 15px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
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
          <RecommendFirstImage href="/productsDetail">
            <img src={products[0].image} alt={products[0].title} />
          </RecommendFirstImage>
          <RecommendFirstDescription>
            <RecommendDescriptionBox href="/productsDetail">
              <div>{products[0].title}</div>
              <div>{products[0].maker}</div>
              <div>{products[0].description}</div>
            </RecommendDescriptionBox>
          </RecommendFirstDescription>
        </RecommendProduct>
      </RecommendFirst>
      <RecommendSecondImage href="/productsDetail">
        <img src={products[1].image} alt={products[1].title} />
      </RecommendSecondImage>
      <RecommendThird>
        <RecommendThirdMenu>
          <RecommendThirdTitle>오늘의 상품</RecommendThirdTitle>
          <RecommendThirdItemDescription href="/productsDetail">
            <div>{products[1].title}</div>
            <div>{products[1].description}</div>
            <div>{products[1].series}</div>
            <div>{products[1].maker}</div>
            <div>{products[1].price}</div>
          </RecommendThirdItemDescription>
          <RecommendThirdItemImageBox>
            {recommendImages.map((image) => (
              <RecommendThirdItemImage href="/productsDetail" key={image.id}>
                <img src={image.src} alt={image.alt} />
              </RecommendThirdItemImage>
            ))}
          </RecommendThirdItemImageBox>
        </RecommendThirdMenu>
      </RecommendThird>
      <RecommendFourth>
        <RecommendFourthNavi>
          {tabs.map((tab) => (
            <TabTitle
              key={tab.id}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </TabTitle>
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
