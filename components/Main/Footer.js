import styled from "styled-components";
import React from "react";
import {
  footerLinks,
  companyInfo,
  customerServiceInfo,
} from "../../DataBase/FooterDB";

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
  background-image: url(${(props) => props.$imageUrl});
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
      font-weight: ${(props) => (props.$isBold ? "bold" : "normal")};
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
        {footerLinks.map((link, index) => (
          <React.Fragment key={index}>
            <FooterLink href={link.href}>{link.text}</FooterLink>
            {index < footerLinks.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </FooterTop>
      <FooterMiddle>
        <FooterMiddleWrapper>
          <MiddleImageBox>
            <img src="/images/FooterLogo2.png" alt="Logo" width={100} />
          </MiddleImageBox>
          <MiddleTextBox>
            <div>{companyInfo.name}</div>
            <div>{companyInfo.address}</div>
            <div>{companyInfo.businessNumber}</div>
            <div>{companyInfo.salesNumber}</div>
            <div>{companyInfo.representative}</div>
          </MiddleTextBox>
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
