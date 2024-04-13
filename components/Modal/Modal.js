// components/Modal.js
import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
  border: 3px solid gray;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ModalHeader = styled.h2`
  font-size: 24px;
  color: #e5821a;
  margin-bottom: 10px;
`;
const ModalContent = styled.h2`
  font-size: 20px;
  color: #333;
  margin-top: 10px;
`;

const ModalContentDetail = styled.div`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-top: 5px;
`;
const ModalContentStore = styled.div`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-top: 5px;
  font-weight: bold;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 10px;
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

  &:first-child {
    background-color: #6c757d;

    &:hover {
      background-color: #545b62;
    }
  }
`;

const Modal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>모빅스테이션에 오신 것을 환영합니다!</ModalHeader>
        <ModalContentDetail>
          아이폰 행사는 잘 보내셨나요? 구매확정 입금을 깜박하시지 않길 바래요.
        </ModalContentDetail>
        <ModalContentDetail>
          모빅스테이션 첫 입점자 분들 소개와 4월 2주차 업데이트 안내입니다.
        </ModalContentDetail>
        <ModalContent>첫 입점자 소개:</ModalContent>
        <ModalContentStore>
          종이지갑 : 알약, 주성원, 모니카, 춘심소프트
        </ModalContentStore>
        <ModalContentStore>
          굿즈 : 크리스 최(타마), 롱지노 도마, cj man, 킴_글라라, dulgi,
          오태민사생팬
        </ModalContentStore>
        <ModalContent>4월 2주차 업데이트 내용:</ModalContent>
        <ModalContentDetail>
          - 카테고리에 입점하시는 분들의 임시링크가 활성화되었습니다.
        </ModalContentDetail>
        <ModalContentDetail>
          - 게시판 기능이 활성화되었습니다. 다양한 이야기를 나누어 보세요.
        </ModalContentDetail>
        <ModalContent>업데이트 예정 사항:</ModalContent>
        <ModalContentDetail>- 직거래 게시판 활성화</ModalContentDetail>

        <ModalContentDetail>- 상품 입고 페이지 활성화</ModalContentDetail>
        <div></div>
        <div></div>
        <ModalContentDetail>현재 업데이트 준비중입니다.</ModalContentDetail>
        <ModalContentDetail>감사합니다 ☺️</ModalContentDetail>
        <ModalContentDetail>
          Contact : choonsim.dev@gmail.com
        </ModalContentDetail>
        <ModalActions>
          {/* <Button onClick={onClose}>닫기</Button>
          <Button
            onClick={() => {
              localStorage.setItem("hideModal", new Date().toISOString());
              onClose();
            }}
          >
            오늘 하루 보지 않기
          </Button> */}
        </ModalActions>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
