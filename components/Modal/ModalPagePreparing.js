import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const ModalDesign = styled.div`
  position: fixed;
  left: 50%; // 화면의 가운데로 이동
  top: 50%; // 화면의 가운데로 이동
  transform: translate(-50%, -50%); // 정확한 중앙 정렬을 위해 변형
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
  gap: 10px;
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

const ButtonClose = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #666;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const ModalPagePreparing = ({ onClose }) => {
  const router = useRouter(); // `useRouter` 훅을 사용하여 `router` 객체를 초기화

  const handleBack = () => {
    router.back(); // 브라우저의 이전 페이지로 이동
  };
  const handleBackdropClick = (event) => {
    onClose();
  };

  return (
    <ModalDesign>
      <ModalBox>
        <div>해당 페이지는 현재 준비중입니다.</div>
        <div>더 나은 서비스와 경험을 제공하기 위해 열심히 준비 중입니다.</div>
        <div>조금만 기다려주세요!</div>
        <ModalButtonWrapper>
          {/* <ButtonClose onClick={handleBackdropClick}>닫기</ButtonClose> */}
          <Button onClick={handleBack}>돌아가기</Button>
        </ModalButtonWrapper>
      </ModalBox>
    </ModalDesign>
  );
};

export default ModalPagePreparing;
