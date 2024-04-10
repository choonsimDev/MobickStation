// import TextEditor from "../components/Main/TextEditor";
import styled from "styled-components";
import Header from "@/components/Main/Header";
import LogoAndSearch from "@/components/Main/LogoAndSearch";
import CommunityList from "@/components/Community/CommunityList";
import Footer from "@/components/Main/Footer";
import Center from "@/components/Main/Center";
import { useState } from "react";

const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RuleTexts = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;
  gap: 5px;

  & > p {
    font-size: 14px;
    color: #777;
  }
`;

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;
const SaveButton = styled.div`
  width: 100px;
  height: 50px;
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
  width: 100px;
  height: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #999999;
  font-size: 14px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #777777;
  }
`;

const AuthorInforWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const AuthorInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  gap: 10px;
  width: 900px;
`;
const AuthorInfo = styled.div`
  margin-top: 20px;
  display: flex;
  width: 800px;
  align-items: flex-start;
  flex-direction: row;
  gap: 10px;

  input {
    width: 250px;
    height: 35px;
    padding: 0 10px;
    border: 1px solid #999999;
    border-radius: 5px;
    font-size: 16px;
  }
`;
const Title = styled.div`
  width: 800px;
  height: 40px;
  font-size: 16px;
  input {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    border: 1px solid #999999;
    border-radius: 5px;
    font-size: 16px;
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
      const response = await fetch("/api/setCommunityPost", {
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
        throw new Error("Network response was not ok");
      }
    } catch (e) {
      console.log(e);
    }
    setTitle("");
    setNickname("");
    setSecret("");
    setContent("");
    alert("게시글이 등록되었습니다.");
  };

  return (
    <WriteWrapper>
      <Center>
        <Header />
        <LogoAndSearch />
        <CommunityList />
        <AuthorInforWrapper>
          <AuthorInfoBox>
            <AuthorInfo>
              <input
                placeholder="닉네임"
                value={nickname}
                onChange={ChangeNickname}
              ></input>
              <input
                type="password"
                placeholder="비밀번호"
                value={secret}
                onChange={ChangeSecret}
              ></input>
            </AuthorInfo>
            <Title>
              <input
                placeholder="제목을 입력하세요"
                value={title}
                onChange={ChangeTitle}
              ></input>
            </Title>

            <EditorWrapper>
              {/* <TextEditor GetContent={GetContent} /> */}
              <textarea
                placeholder="내용을 입력해주세요."
                style={{
                  width: "800px",
                  height: "610px",
                  padding: "10px",
                  border: "1px solid #999999",
                  borderRadius: "5px",
                  fontSize: "16px",
                  color: "#333333",
                }}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </EditorWrapper>
            <RuleTexts>
              <p>
                * 근거 없는 비방, 부적절한 내용 또는 사진 등의 게시물은 사전
                경고 없이 삭제될 수 있습니다.
              </p>
            </RuleTexts>
            <ButtonWrapper>
              <SaveButton onClick={SaveToDB}>작성완료</SaveButton>
              <StyledBack href="/">돌아가기</StyledBack>
            </ButtonWrapper>
          </AuthorInfoBox>
        </AuthorInforWrapper>

        <Footer />
      </Center>
    </WriteWrapper>
  );
}
