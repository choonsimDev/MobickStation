import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 26rem;
  color: #ffffff;
  background-color: dodgerblue;
  text-align: center;
  & > div {
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

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <div>강연및서적</div>
        <div>굿즈</div>
        <div>특별상품</div>
        <div>종이지갑</div>
        <div>상생마켓</div>
        <div>커뮤니티</div>
        <div>모빅정보</div>
      </div>
      <div>
        <div>로그인</div>
        <div>회원가입</div>
        <div>장바구니</div>
        <div>주문조회</div>
        <div>고객센터</div>
      </div>
    </StyledHeader>
  );
}
