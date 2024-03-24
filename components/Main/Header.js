import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 26rem;
  background-color: dodgerblue;
  text-align: center;
  text-decoration: none;
  margin-right: 15px;
  & > div {
    color: #ffffff;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    cursor: pointer;
  }
  & > div:nth-child(1) {
  }
  & > div:nth-child(2) {
    font-size: 0.8rem;
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
    <StyledHeader>
      <div>
        <StyledLink href="/preparing">강연및서적</StyledLink>
        <StyledLink href="/preparing">굿즈</StyledLink>
        <StyledLink href="/preparing">특별상품</StyledLink>
        <StyledLink href="/preparing">종이지갑</StyledLink>
        <StyledLink href="/preparing">상생마켓</StyledLink>
        <StyledLink href="/community">커뮤니티</StyledLink>
        <StyledLink href="/preparing">모빅정보</StyledLink>
      </div>
      <div>
        <StyledLink href="/preparing">로그인</StyledLink>
        <StyledLink href="/preparing">회원가입</StyledLink>
        <StyledLink href="/cart">장바구니</StyledLink>
        <StyledLink href="/preparing">주문조회</StyledLink>
        <StyledLink href="/preparing">고객센터</StyledLink>
      </div>
    </StyledHeader>
  );
}
