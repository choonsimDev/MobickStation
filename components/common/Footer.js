import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #e5e5e5;
  padding: 40px 60px;
  box-sizing: border-box;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
`;

const LogoImage = styled.img`
  width: 300px;
  margin-bottom: 10px;
`;

const InfoText = styled.div`
  font-size: 18px;
  color: #737373;
  line-height: 1.6;
`;

const Separator = styled.span`
  display: inline-block;
  margin: 0 10px;
  color: #ccc;
`;

const RightBox = styled.div`
  width: 600px;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContactBox = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 18px;
  color: #737373;
`;

const ContactTitle = styled.h4`
  font-size: 30px;
  font-weight: bold;
  color: #737373;
  margin-bottom: 10px;
`;

const SocialIconsBox = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialIcon = styled.img`
  width: 48px;
  height: 48px;
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CopyrightText = styled.div`
  font-size: 18px;
  color: #a0a0a0;
`;

const TermsBox = styled.div`
  display: flex;
  gap: 10px;
`;

const TermLink = styled.a`
  font-size: 14px;
  color: #0078ff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TopBox>
        <LeftBox>
          <LogoImage
            src="/images/logo/Logo_MobickStation_Footer.png"
            alt="Logo"
          />
          <InfoText>
            상호명 : 모빅스테이션<Separator>|</Separator>
            대표자 : 조용래
            <br />
            주소 : 경기도 성남시 분당구 느티로 69<Separator>|</Separator>
            사업자 등록번호 : 505-21-96326<Separator>|</Separator>
            통신 판매업 신고 : 2024-경기성남-1234
          </InfoText>
        </LeftBox>
        <RightBox>
          <ContactBox>
            <ContactTitle>Contact Us</ContactTitle>
            입점문의 : choonsim.dev@gmail.com
          </ContactBox>
          <SocialIconsBox>
            <SocialIcon src="/images/buttons/kakao.png" alt="kakao" />
            <SocialIcon src="/images/buttons/youtube.png" alt="youtube" />
            <SocialIcon src="/images/buttons/instagram.png" alt="instagram" />
            <SocialIcon src="/images/buttons/facebook.png" alt="facebook" />
            <SocialIcon src="/images/buttons/twitter.png" alt="twitter" />
          </SocialIconsBox>
        </RightBox>
      </TopBox>
      <BottomBox>
        <CopyrightText>
          COPYRIGHT ⓒ MOBICK STATION ALL RIGHTS RESERVED.
        </CopyrightText>
        <TermsBox>
          <TermLink href="/terms">이용 약관</TermLink>
          <Separator>|</Separator>
          <TermLink href="/privacy">개인정보 처리방침</TermLink>
        </TermsBox>
      </BottomBox>
    </FooterContainer>
  );
};

export default Footer;
