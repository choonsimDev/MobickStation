import styled from "styled-components";
import Header from "@/components/Main/Header";
import Center from "@/components/Main/Center";
import LogoAndSearch from "@/components/Main/LogoAndSearch";
import Banner from "@/components/Main/Banner";
import CategorySection from "@/components/Main/storeCategorySection";
import BestProductsSection from "@/components/Main/storeBestProductsSection";
import AllProductsSection from "../components/Main/storeAllProductsSection";
import Footer from "@/components/Main/Footer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDiv2 = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StoreCategory = styled.div`
  width: 1200px;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  font-size: 24px;
  font-weight: bold;
  color: black;
  background-color: lightgray;
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

export default function bestProducts() {
  return (
    <StyledDiv>
      <Center>
        <Header />

        <LogoAndSearch />
        <StyledDiv2>
          <Banner />
          <CategorySection />
          <BestProductsSection />
          <AllProductsSection />
          <StyledBack href="/">돌아가기</StyledBack>
        </StyledDiv2>
        <Footer />
      </Center>
    </StyledDiv>
  );
}
