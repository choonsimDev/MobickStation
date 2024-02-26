import styled from "styled-components";

const StyledFooterWrapper = styled.div`
  width: 1200px;
  height: 450px;
  margin-top: 20px;
  background-color: lightgray;
`;

const FooterTop = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid darkgray;
`;

const FooterLink = styled.a`
  color: black; /* Text color */
  text-decoration: none; /* Remove underlines */
  margin: 0 10px; /* Add space around the text */

  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const FooterMiddle = styled.div`
  width: 100%;
  height: 390px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  border-bottom: 1px solid lightgray;
  border-bottom: 1px solid darkgray;
`;

const FooterBottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  border-bottom: 1px solid lightgray;
`;

export default function Footer() {
  return (
    <StyledFooterWrapper>
      <FooterTop>
        <FooterLink href="#">회사소개</FooterLink>|
        <FooterLink href="#">인재채용</FooterLink>|
        <FooterLink href="#">이용약관</FooterLink>|
        <FooterLink href="#">개인정보처리방침</FooterLink>|
        <FooterLink href="#">고객센터</FooterLink>|
        <FooterLink href="#">사업자정보확인</FooterLink>|
        <FooterLink href="#">광고안내</FooterLink>|
        <FooterLink href="#">제휴안내</FooterLink>|
        <FooterLink href="#">매장안내</FooterLink>
      </FooterTop>
      <FooterMiddle>
        <div>회사로고</div>
        <div>회사명/주소/정보</div>
        <div>고객 문의</div>
      </FooterMiddle>
      <FooterBottom>
        <div>인증&협력업체</div>
        <div>
          <p>Copyright © ~~~</p>
        </div>
      </FooterBottom>
    </StyledFooterWrapper>
  );
}
