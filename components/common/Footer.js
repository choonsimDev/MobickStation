import styled from "styled-components";
import React from "react";

const StyledFooterWrapper = styled.div`
  width: 1200px;
  height: 290px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
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
  color: black;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterMiddle = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid darkgray;
`;

const FooterMiddleWrapper = styled.div`
  width: 600px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  align-items: center;
`;

const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MiddleImageBox = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: coral; */
  background-image: url(${(props) => props.$imageUrl});
`;

const MiddleTextBox = styled.div`
  margin-left: 10px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const MiddleCustomService = styled.div`
  width: 230px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 70px;
  & > :nth-child(1) {
    font-size: 16px;
    font-weight: bold;
  }
  & > :nth-child(2) {
    font-size: 14px;
  }
  & > :nth-child(3) {
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
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      text-decoration: underline; /* Underline on hover */
      font-weight: ${(props) => (props.$isBold ? "bold" : "normal")};
    }
  }
`;

export default function Footer() {
  const footerLinks = [
    { text: "소개", href: "#" },
    { text: "이용약관", href: "#" },
    { text: "개인정보처리방침", href: "#" },
    { text: "고객센터", href: "#" },
    { text: "사업자정보확인", href: "#" },
    { text: "광고안내", href: "#" },
    { text: "제휴안내", href: "#" },
  ];

  const customerServiceInfo = {
    inquiry: "CONTACT US",
    phoneNumber: "대표번호 | choonsim.dev@gmail.com",
    mallInquiry: "입점 문의 | choonsim.dev@gmail.com",
    questions: ["1:1 문의하기", "자주 묻는 질문"],
  };

  return (
    <StyledFooterWrapper>
      <FooterTop>
        {footerLinks.map((link, index) => (
          <React.Fragment key={index}>
            <FooterLink href={link.href}>{link.text}</FooterLink>
            {index < footerLinks.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </FooterTop>
      <FooterMiddle>
        <FooterMiddleWrapper>
          <CompanyWrapper>
            <MiddleImageBox>
              <img src="/images/BTCMobickLogo.png" alt="Logo" width={80} />
            </MiddleImageBox>
            <MiddleTextBox>MOBICK STATION</MiddleTextBox>
          </CompanyWrapper>
          <CompanyWrapper>
            <MiddleImageBox>
              <img src="/images/Logo_Mobickers.png" alt="Logo" width={80} />
            </MiddleImageBox>
            <MiddleTextBox>Mobickers</MiddleTextBox>
          </CompanyWrapper>
        </FooterMiddleWrapper>
        <MiddleCustomService>
          <div>{customerServiceInfo.inquiry}</div>
          <div>{customerServiceInfo.phoneNumber}</div>
          <div>{customerServiceInfo.mallInquiry}</div>
          <div>{customerServiceInfo.otcInquiry}</div>
          <MiddleCustomServiceQuestion>
            {customerServiceInfo.questions.map((question, index) => (
              <div key={index}>{question}</div>
            ))}
          </MiddleCustomServiceQuestion>
        </MiddleCustomService>
      </FooterMiddle>
      {/* <FooterBottom>
        <div>
          <p>Copyright 2024. Mobickers inc. all rights reserved.</p>
        </div>
      </FooterBottom> */}
    </StyledFooterWrapper>
  );
}
