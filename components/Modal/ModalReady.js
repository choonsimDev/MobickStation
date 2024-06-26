import React from "react";
import styled from "styled-components";

const ModalDesign = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.2);
`;

const ModalBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px; // 모달의 너비
  height: 200px; // 모달의 높이
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-content: center;
  border: 3px solid gray;
  & > div:nth-child(1) {
    font-size: 20px;
    font-weight: bold;
    color: #e5821a;
  }
  & > div:nth-child(2) {
    margin-top: 10px;
  }
  & > div:nth-child(3) {
    margin-top: 10px;
  }
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ModalReady = ({ onClose }) => {
  const handleBackdropClick = (event) => {
    onClose();
  };

  const handleModalClick = (event) => {
    event.stopPropagation(); // 모달 내부 클릭 시 버블링 방지
  };

  return (
    <ModalDesign onClick={handleBackdropClick}>
      <ModalBox onClick={handleModalClick}>
        <div>해당 기능은 준비중입니다.</div>
        <div>더 나은 서비스와 경험을 제공하기 위해 열심히 준비 중입니다.</div>
        <div>조금만 기다려주세요!</div>

        <ModalButtonWrapper>
          <Button onClick={onClose}>닫기</Button>
        </ModalButtonWrapper>
      </ModalBox>
    </ModalDesign>
  );
};

export default ModalReady;
