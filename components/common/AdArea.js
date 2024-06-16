import styled from "styled-components";

const StyledTopMidWrapper = styled.a`
  cursor: pointer;
  position: relative; /* 상대 위치 지정 */
  margin-top: 20px;
`;

const AdLabel = styled.span`
  position: absolute; /* 절대 위치 지정 */
  top: -55px; /* 위에서 10px만큼 내림 */
  left: 15px; /* 왼쪽에서 10px만큼 이동 */
  padding: 5px 10px; /* 내부 여백 설정 */
  border-radius: 5px; /* 테두리를 둥글게 */
  color: white; /* 글자색 흰색 */
  background-color: gray; /* 배경색 회색 */
  font-weight: bold; /* 굵은 글씨체 */
`;

export default function AdArea() {
  const adInfo = {
    src: "/images/ad/AdTodakTodak1920.png",
    alt: "wallet",
  };

  return (
    <StyledTopMidWrapper
      href="https://www.todactodac.co.kr/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* <AdLabel>AD</AdLabel> */}
      <img src={adInfo.src} alt={adInfo.alt} width="1920" />
    </StyledTopMidWrapper>
  );
}
