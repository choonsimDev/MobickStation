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
  z-index: 1000; /* 모달창이 다른 요소들 위에 오도록 z-index 값을 높게 설정 */
`;

const ModalBox = styled.div`
  padding: 20px;
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-image: url(/images/wellcomeImage_01.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  align-content: center;
  border-radius: 10px;
  border: 7px solid lightgray;

  & > div:nth-child(1) {
    font-size: 24px;
    font-weight: bold;
    color: #e5821a;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px 1px 0 #fff;
  }
  & > div:nth-child(2) {
    margin-top: 30px;
    font-size: 20px;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px 1px 0 #fff;
    line-height: 1.5;
    text-align: justify;
  }
  & > div:nth-child(3) {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
  }
  & > div:nth-child(4) {
    margin-top: 6px;
  }
  & > div:nth-child(5) {
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.5;
    text-align: justify;
  }
  & > div:nth-child(6) {
    margin-top: 30px;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
  }
  & > div:nth-child(7) {
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
  }
  & > div:nth-child(8) {
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
  }
  & > div:nth-child(9) {
    margin-top: 10px;

    font-size: 16px;
    line-height: 1.5;
    text-align: center;
  }
  & > div:nth-child(10) {
    margin-top: 40px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
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
        <div> MOBICK STATION에 초대합니다. </div>
        <div>
          {" "}
          " 봄바람이 소곤소곤 전하는 벚꽃의 속삭임처럼, 우리의 모임도 그 시작을
          알립니다. 이곳은 비트모빅 커뮤니티의 중심지, 관악산의 생기와 봄날의
          따스함이 가득한 MOBICK STATION으로 여러분을 초대합니다."
        </div>
        <div> 오픈 전 단장 중이에요. :)</div>
        <div> 입점 신청을 위해 공개하였고, 페이지는 매주 업데이트합니다.</div>
        <div>
          MOBICK STATION은 비둘기호 선원들인 모비커의 활동과 함께 성장합니다.
          종이지갑 및 굿즈 등 입점 신청을 받습니다. 입점수요 조사 및 피드백 조율
          후 홈페이지를 매주 업데이트합니다. 피드백 및 불편한 점 등 더 나은
          서비스를 위한 의견을 자유롭게 공유해주세요.
        </div>
        <div>"함께하는 모든 순간이 축제처럼 기쁘고</div>
        <div>
          지나간 시간 속 추억처럼 아름다운 여운을 남길 수 있기를 바랍니다.
        </div>
        <div> MOBICK STATION에서 여러분의 활동을 기다리며,</div>
        <div>여러분이 이곳에서 뜻깊은 시간을 보내시길 기대합니다."</div>

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
