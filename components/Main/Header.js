import styled from "styled-components";
import AuthButtons from "@/components/Main/AuthButtons";

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6931a;
`;

const StyledHeader = styled.div`
  width: 1200px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-size: 16px;

  & > div {
    color: #ffffff;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    cursor: pointer;
  }
`;

const StyledLink = styled.a`
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <div>
          <StyledLink href="/preparing">종이지갑</StyledLink>
          <StyledLink href="/preparing">강연 및 서적</StyledLink>
          <StyledLink href="/preparing">굿즈</StyledLink>
          <StyledLink href="/preparing">식품</StyledLink>
          <StyledLink href="/preparing">패션</StyledLink>
          <StyledLink href="/community">커뮤니티</StyledLink>
          {/* <StyledLink href="/preparing">모빅정보</StyledLink> */}
        </div>
        <div>
          <AuthButtons>로그인</AuthButtons>
          <StyledLink href="/preparing">회원가입</StyledLink>
          <StyledLink href="/cart">장바구니</StyledLink>
          <StyledLink href="/preparing">주문조회</StyledLink>
          <StyledLink href="/preparing">고객센터</StyledLink>
        </div>
      </StyledHeader>
    </HeaderWrapper>
  );
}
