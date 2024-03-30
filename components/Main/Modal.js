// components/Modal.js
import React from "react";
import { styled } from "styled-components";

const ModalDesign = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-content: center;
  border: 7px solid lightgray;
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
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
  }
  & > div:nth-child(4) {
    margin-top: 20px;
    font-size: 16px;
    color: gray;
  }
  & > div:nth-child(5) {
    margin-top: 20px;
    font-size: 16px;
    color: gray;
  }
  & > div:nth-child(6) {
    margin-top: 20px;
    font-size: 16px;
    color: gray;
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

const Modal = ({ onClose }) => {
  return (
    <ModalDesign>
      <ModalBox>
        <div>안녕하세요, 모빅스테이션에 오신 것을 환영합니다!</div>
        <div>현재 포털 오픈 전 단장 중이에요. :)</div>
        <div>
          현재 페이지는 초기 개발 단계에 있으며, 입점 신청을 위해 조기
          오픈하였습니다. 더 나은 서비스와 경험을 제공하기 위해 열심히 준비
          중이니 조금만 기다려주세요!
        </div>
        <div>
          여러분의 소중한 피드백과 제안을 통해 더 나은 서비스를
          제공하고자합니다. 불편한 점, 개선되어야 할 점, 추가되었으면 하는 기능
          등 자유롭게 의견울 공유해주세요.
        </div>

        <div>Contact : choonsim.dev@gmail.com</div>

        <ModalButtonWrapper>
          <button onClick={onClose}>닫기</button>
          <button
            onClick={() => {
              localStorage.setItem("hideModal", new Date().toISOString());
              onClose();
            }}
          >
            오늘 하루 보지 않기
          </button>
        </ModalButtonWrapper>
      </ModalBox>
    </ModalDesign>
  );
};

export default Modal;
