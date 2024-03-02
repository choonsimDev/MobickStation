import styled from "styled-components";
import Header from "@/components/Main/Header";
import LogoAndSearch from "@/components/Main/LogoAndSearch";
import Footer from "@/components/Main/Footer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CommunityBar = styled.div`
  width: 1200px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const MainWrapper = styled.div`
  width: 1200px;
  height: 2200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LeftCommunity = styled.div`
  width: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: lightgreen;
`;

const LeftCommunityCategory = styled.div`
  width: 900px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`;

const LeftCommunityHotContent = styled.div`
  width: 900px;
  height: 170px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightyellow;
`;

const LeftCommunityContentWrapper = styled.div`
  width: 900px;
  height: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
`;

const LeftCommunityContents = styled.div`
  width: 900px;
  height: 54px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
`;

const LeftCommunityContentsPageButton = styled.div`
  width: 900px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;
const LeftCommunityAD = styled.div`
  width: 900px;
  height: 230px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightseagreen;
`;
const LeftCommunityNews = styled.div`
  width: 900px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightslategray;
`;
const LeftCommunityTempWrapper = styled.div`
  width: 900px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: lightskyblue;
`;

const LeftCommunityTempBox = styled.div`
  width: 900px;
  height: 190px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
`;

const RightCommunity = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: lightcoral;
`;

const RightCommunityRealTimeBest = styled.div`
  width: 300px;
  height: 430px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const RightCommunityAD = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const RightCommunityCategory1Best = styled.div`
  width: 300px;
  height: 430px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const RightCommunityCategory2Best = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const RightCommunityTempBox = styled.div`
  width: 300px;
  height: 330px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const StyledDiv2 = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

const StyledBack = styled.a`
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #999999;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Community() {
  return (
    <StyledDiv>
      <Header />
      <LogoAndSearch />
      <CommunityBar>Community Bar</CommunityBar>
      <MainWrapper>
        <LeftCommunity>
          <LeftCommunityCategory>CommunityCategory</LeftCommunityCategory>
          <LeftCommunityHotContent>CommunityHotContent</LeftCommunityHotContent>
          <LeftCommunityContentWrapper>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
            <LeftCommunityContents>Contents</LeftCommunityContents>
          </LeftCommunityContentWrapper>
          <LeftCommunityContentsPageButton>
            PageButton
          </LeftCommunityContentsPageButton>
          <LeftCommunityAD>AD</LeftCommunityAD>
          <LeftCommunityNews>News</LeftCommunityNews>
          <LeftCommunityTempWrapper>
            <LeftCommunityTempBox>TempBox1</LeftCommunityTempBox>
            <LeftCommunityTempBox>TempBox2</LeftCommunityTempBox>
          </LeftCommunityTempWrapper>
        </LeftCommunity>
        <RightCommunity>
          <RightCommunityRealTimeBest>RealTimeBest</RightCommunityRealTimeBest>
          <RightCommunityAD>AD</RightCommunityAD>
          <RightCommunityCategory1Best>
            Category1 Best
          </RightCommunityCategory1Best>
          <RightCommunityCategory2Best>
            Category2 Best
          </RightCommunityCategory2Best>
          <RightCommunityTempBox>Temp1</RightCommunityTempBox>
          <RightCommunityTempBox>Temp2</RightCommunityTempBox>
        </RightCommunity>
      </MainWrapper>
      <StyledDiv2>
        {" "}
        <StyledBack href="/">돌아가기</StyledBack>
      </StyledDiv2>
      <Footer />
    </StyledDiv>
  );
}
