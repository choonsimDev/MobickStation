import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  /* padding: 0 0.5rem; */
`;

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
