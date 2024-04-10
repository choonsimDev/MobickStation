import styled from "styled-components";

const ListWrapper = styled.div`
  width: 1200px;
  height: 50px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1.5rem;
  align-items: center;
  text-align: center;
  /* background-color: #e5e5e5; */
  border-bottom: 1px solid lightgray;
  text-decoration: none;
  font-size: 13px;
  & > div {
    height: 20px;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    cursor: pointer;
  }
`;

const StyledLink = styled.a`
  color: gray;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #f6931a;
  }
`;

export default function CommunityList() {
  return (
    <ListWrapper>
      <StyledLink href="/community/notice">공지사항</StyledLink>
      <StyledLink href="/community/mobicker">모비커 게시판 </StyledLink>
      <StyledLink href="/community/anonymous">익명 게시판</StyledLink>
      <StyledLink href="/info">정보 게시판</StyledLink>
    </ListWrapper>
  );
}
