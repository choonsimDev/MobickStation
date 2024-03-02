import styled from "styled-components";
import Header from "@/components/Main/Header";
import LogoAndSearch from "@/components/Main/LogoAndSearch";
import Footer from "@/components/Main/Footer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDiv2 = styled.div`
  width: 1200px;
  height: 800px;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
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

export default function preparing() {
  return (
    <StyledDiv>
      <Header />
      <LogoAndSearch />
      <StyledDiv2>
        <h1>preparing.js</h1>
        <StyledBack href="/">돌아가기</StyledBack>
      </StyledDiv2>
      <Footer />
    </StyledDiv>
  );
}
