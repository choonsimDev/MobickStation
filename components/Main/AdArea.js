import styled from "styled-components";
import { adInfo } from "../../DataBase/AdAreaDB"; // 경로는 실제 상황에 맞게 조정해야 합니다.

const StyledTopMidWrapper = styled.a`
  width: 1200px;
  height: 80px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // 그림자 추가

  cursor: pointer;
  position: relative; /* 상대 위치 지정 */
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
  return (
    <StyledTopMidWrapper
      href="https://www.todactodac.co.kr/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AdLabel>AD</AdLabel>
      <img src={adInfo.src} alt={adInfo.alt} width="1200" />
    </StyledTopMidWrapper>
  );
}
