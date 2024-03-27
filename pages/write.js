// import TextEditor from "../components/Main/TextEditor";
import styled from "styled-components";
import Header from "@/components/Main/Header";
import LogoAndSearch from "@/components/Main/LogoAndSearch";
import Footer from "@/components/Main/Footer";
import Center from "@/components/Main/Center";
import { useState } from "react";

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
const AuthorInfoBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const AuthorInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  input {
    width: 300px;
    height: 30px;
    padding: 0 10px;
    border: 1px solid #999999;
    border-radius: 5px;
    font-size: 1rem;
    color: #333333;

  }
`;
const Title = styled.div`
  width: 600px;   
  height: 40px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  input {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    border: 1px solid #999999;
    border-radius: 5px;
    font-size: 1.5rem;
    color: #333333;
  }
`;


export default function Write() {
  const [title, setTitle] = useState("");
  const [nickname, setNickname] = useState("");
  const [secret, setSecret] = useState("");
  const [content, setContent] = useState("");

  const ChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const ChangeNickname = (e) => {
    setNickname(e.target.value);
    console.log(nickname);
  };
  const ChangeSecret = (e) => {
    setSecret(e.target.value);
    console.log(secret);
  };
  const SaveToDB = async () => {
    console.log(title, nickname, secret, content);
    try {
      const response = await fetch("https://www.mobickstation.com/api/setCommunityPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          nickname: nickname,
          password: secret,
          content: content,
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    }
    catch (e) {
      console.log(e);
    }
    setTitle("");
    setNickname("");
    setSecret("");
    setContent("");
    alert("게시글이 등록되었습니다.");
  };


  return (
    <Center>
      <Header />
      <LogoAndSearch />
      <AuthorInfoBox>
        <AuthorInfo>
          <input placeholder="닉네임" value={nickname} onChange={ChangeNickname}></input>
          <input placeholder="비밀번호" value={secret} onChange={ChangeSecret}></input>
        </AuthorInfo>
        <Title>
          <input placeholder="제목을 입력하세요" value={title} onChange={ChangeTitle}></input>
        </Title>
      </AuthorInfoBox>
      <EditorWrapper>
        {/* <TextEditor GetContent={GetContent} /> */}
        <textarea
          style={{
            width: "600px",
            height: "600px",
            padding: "10px",
            border: "1px solid #999999",
            borderRadius: "5px",
            fontSize: "1rem",
            color: "#333333",
          }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <ButtonWrapper>
          <SaveButton onClick={SaveToDB}>save</SaveButton>
        </ButtonWrapper>
        <StyledBack href="/">돌아가기</StyledBack>
      </EditorWrapper>
      <Footer />
    </Center>
  );
}
