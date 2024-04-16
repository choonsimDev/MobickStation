import React, { useState, useEffect } from "react";
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
  &:hover {
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

export default function CategorySection({ onCategoryChange, categoryIds }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("/api/storeCategories/getCategories");
      const data = await response.json();
      setCategories(data);
    }

    fetchCategories();
    console.log("categoryIds", categoryIds);
  }, []);

  return (
    <SectionContainer>
      <CategoryTitle>상품 카테고리</CategoryTitle>
      <CategoryContainer>
        <CategoryCircleWrapper>
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
            >
              <Circle />
              <p>{category.name}</p>
            </CategoryItem>
          ))}
        </CategoryCircleWrapper>
      </CategoryContainer>
    </SectionContainer>
  );
}
