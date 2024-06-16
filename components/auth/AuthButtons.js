import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px; /* 아이콘과 글자 사이 간격 */
  width: 140px; /* 너비 조정 */
  height: 44px;
  background-color: #f2f2f2;
  border-radius: 10px;
  cursor: pointer; /* 마우스 오버 시 커서 변경 */
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none; /* 테두리 없음 */
  background-color: #f2f2f2;
  padding: 0; /* 패딩 초기화 */
  cursor: pointer; /* 마우스 오버 시 커서 변경 */
  & div {
    color: black; /* 글자 색상 */
    font-size: 16px; /* 글자 크기 */
  }
`;

const LoginText = styled.div`
  color: black; /* 글자 색상 */
  font-size: 20px; /* 글자 크기 */
  margin-left: 10px; /* 이미지와 텍스트 사이 간격 */
`;

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {session.user.email} <br />
        <StyledButton onClick={() => signOut()}>로그아웃</StyledButton>
      </>
    );
  }
  return (
    <LoginWrapper>
      <img src="/images/buttons/login.png" alt="Logo" width={24} />
      <LoginText onClick={() => signIn("google")}>로그인</LoginText>
    </LoginWrapper>
  );
}
