import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: white; /* 글자 색상 */
  border: none; /* 테두리 없음 */
  cursor: pointer; /* 마우스 오버 시 커서 변경 */
  font-size: 14px; /* 글자 크기 */
  background-color: #f6931a;
  &:hover {
    color: white; /* 마우스 오버 시 글자 색상 변경 */
    text-decoration: underline;
  }
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
    <>
      <br />
      <StyledButton onClick={() => signIn("google")}>로그인</StyledButton>
    </>
  );
}
