// components/Modal.js
import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{ background: "white", padding: "20px", borderRadius: "10px" }}
      >
        <p>메시지 준비중</p>
        <button onClick={onClose}>닫기</button>
        <button
          onClick={() => {
            localStorage.setItem("hideModal", new Date().toISOString());
            onClose();
          }}
        >
          오늘 하루 보지 않기
        </button>
      </div>
    </div>
  );
};

export default Modal;
