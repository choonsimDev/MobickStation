import styled from "styled-components";
import Header from "@/components/Main/Header";
import Center from "@/components/Main/Center";
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
  text-decoration: none;
  color: #999999;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function trade() {
  return (
    <StyledDiv>
      <Center>
        <Header />
        <LogoAndSearch />
        <StyledDiv2>
          <h1>trade page</h1>
          <StyledBack href="/">돌아가기</StyledBack>
        </StyledDiv2>
        <Footer />
      </Center>
    </StyledDiv>
  );
}
