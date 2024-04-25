import Styled from "styled-components";
import React, { useState } from "react";
import ModalReady from "../modal/ModalReady";

const StyledLogoSearchWrapper = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    @media (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
  }
`;

const StyledLogoBox = Styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 6rem;  
    border-bottom: 3px solid #f6931a;

`;
const StyledLogo = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    cursor: pointer;
    & div:first-child {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

const StyledLogoLink = Styled.a`
    position: relative;
    font-size: 28px;
    font-weight: bold;
    text-decoration: none;
        text-decoration: none;
        color: black;
        margin-left: 10px;
    `;

export default function Logo() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <StyledLogoSearchWrapper>
      <StyledLogoBox>
        <StyledLogo>
          <div>
            <img src="/images/logo/Logo_01.png" alt="Logo" width={60} />
          </div>
          <StyledLogoLink href="/">MOBICK STATION</StyledLogoLink>
        </StyledLogo>
      </StyledLogoBox>
      {isModalVisible && <ModalReady onClose={hideModal} />}
    </StyledLogoSearchWrapper>
  );
}
