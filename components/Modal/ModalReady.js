import React from "react";
import { styled } from "styled-components";

const ModalDesign = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ModalBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-content: center;
  border: 7px solid gray;

  & > div:nth-child(1) {
    font-size: 18px;
    font-weight: bold;
    color: #e5821a;
  }
  & > div:nth-child(2) {
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
  }
  & > div:nth-child(3) {
    font-size: 16px;
    font-weight: bold;
  }
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  & > button {
    margin: 0 10px;
    padding: 5px 10px;
    border: 1px solid gray;
    border-radius: 5px;
    background: white;
    cursor: pointer;
  }
`;

const ModalReady = ({ onClose }) => {
  return (
    <ModalDesign>
      <ModalBox>
        <div>해당 기능은 준비중입니다.</div>
        <div>더 나은 서비스와 경험을 제공하기 위해 열심히 준비 중입니다.</div>
        <div>조금만 기다려주세요!</div>
        <ModalButtonWrapper>
          <button onClick={onClose}>닫기</button>
        </ModalButtonWrapper>
      </ModalBox>
    </ModalDesign>
  );
};

export default ModalReady;
