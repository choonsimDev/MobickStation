// components/CategorySection.js
import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CategoryTitle = styled.div`
  width: 1200px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: black;
  border-bottom: 1px solid lightgray;
`;

const CategoryCircleWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  cursor: pointer;
  & :hover {
    color: #f6931a;
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: lightgray;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  margin: auto;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0px 20px 0px;
  border-bottom: 1px solid lightgray;
`;

const CategoryItem = styled.div`
  text-align: center;
  font-size: 20px;
`;

export default function CategorySection() {
  // 예시 이미지 URL 및 카테고리명, 실제 사용 시 적절한 값으로 교체 필요
  const categories = [
    { imageUrl: "/path/to/image1.jpg", name: "일반형" },
    { imageUrl: "/path/to/image2.jpg", name: "선물용" },
    { imageUrl: "/path/to/image3.jpg", name: "주문 제작" },
    { imageUrl: "/path/to/image4.jpg", name: "기타 상품" },
  ];

  return (
    <SectionContainer>
      <CategoryTitle>상품 카테고리</CategoryTitle>
      <CategoryContainer>
        <CategoryCircleWrapper>
          {categories.map((category, index) => (
            <CategoryItem key={index}>
              <Circle imageUrl={category.imageUrl} />
              <p>{category.name}</p>
            </CategoryItem>
          ))}
        </CategoryCircleWrapper>
      </CategoryContainer>
    </SectionContainer>
  );
}
