import TextEditor from "../components/Main/TextEditor";
import styled from "styled-components";
import Header from "@/components/Main/Header";
import LogoAndSearch from "@/components/Main/LogoAndSearch";
import Footer from "@/components/Main/Footer";
import Center from "@/components/Main/Center";

const EditorWrapper = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  margin-right: 450px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;
const SaveButton = styled.div`
  width: 100px;
  height: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6931a;
  font-size: 14px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #e5821a;
  }
`;
const StyledBack = styled.a`
  margin-top: 30px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #999999;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;


export default function write() {
  return (
    <Center>
      <Header />
      <LogoAndSearch />
      <EditorWrapper>
        <TextEditor />
        <ButtonWrapper>
          <SaveButton>save</SaveButton>
        </ButtonWrapper>
        <StyledBack href="/">돌아가기</StyledBack>
      </EditorWrapper>
      <Footer />
    </Center>
  );
}
