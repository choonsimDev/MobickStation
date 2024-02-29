import styled from "styled-components";
import { adInfo } from "../DataBase/AdAreaDB"; // 경로는 실제 상황에 맞게 조정해야 합니다.

const StyledTopMidWraper = styled.div`
  width: 1200px;
  height: 80px;
  margin-top: 20px;
  cursor: pointer;
  position: relative; /* 상대 위치 지정 */
`;

const AdLabel = styled.span`
  position: absolute; /* 절대 위치 지정 */
  top: 10px; /* 위에서 10px만큼 내림 */
  left: 10px; /* 왼쪽에서 10px만큼 이동 */
  padding: 5px 10px; /* 내부 여백 설정 */
  border-radius: 5px; /* 테두리를 둥글게 */
  color: white; /* 글자색 흰색 */
  background-color: gray; /* 배경색 회색 */
  font-weight: bold; /* 굵은 글씨체 */
`;

export default function AdArea() {
  return (
    <StyledTopMidWraper>
      <AdLabel>AD</AdLabel>
      <img src={adInfo.src} alt={adInfo.alt} width={1200} />
    </StyledTopMidWraper>
  );
}
