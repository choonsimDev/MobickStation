import styled from "styled-components";

const StyledFooterWrapper = styled.div`
  width: 1200px;
  height: 290px;
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
  height: 180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  border-bottom: 1px solid darkgray;
`;

const FooterMiddleWrapper = styled.div`
  width: 800px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
`;

const MiddleImageBox = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: coral; */
`;

const MiddleTextBox = styled.div`
  width: 300px;
  height: 150px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  & > :nth-child(1) {
    font-size: 20px;
    font-weight: bold;
  }
  /* background-color: lightblue; */
`;

const MiddleCustomService = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 70px;
  & > :nth-child(1) {
    font-size: 16px;
    font-weight: bold;
  }
  & > :nth-child(2) {
    font-size: 14px;
  }
  /* background-color: lightgreen; */
`;

const MiddleCustomServiceQuestion = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  & > div {
    color: gray;
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
    }
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        <FooterMiddleWrapper>
          <MiddleImageBox>
            <img src="/images/FooterLogo2.png" alt="Logo" width={100} />
          </MiddleImageBox>
          <MiddleTextBox>
            <div>회사명 | (주)모비커스</div>
            <div>주소 | 서울특별시 서초구 사임당로 149-5 </div>
            <div>사업자번호 | 618-81-28642</div>
            <div>통신판매업번호 | 2023-서울서초-2512</div>
            <div>대표자 | 전형민</div>
          </MiddleTextBox>
          <MiddleCustomService>
            <div>고객문의</div>
            <div>대표번호 | 02-000-0000</div>
            <div>쇼핑몰 문의 | 02-000-0000</div>
            <div>OTC 문의 | 02-000-0000</div>
            <MiddleCustomServiceQuestion>
              <div>1:1 문의하기</div>
              <div>자주 묻는 질문</div>
            </MiddleCustomServiceQuestion>
          </MiddleCustomService>
        </FooterMiddleWrapper>
      </FooterMiddle>
      <FooterBottom>
        <div>
          <p>Copyright 2024. Mobickers inc. all rights reserved.</p>
        </div>
      </FooterBottom>
    </StyledFooterWrapper>
  );
}
