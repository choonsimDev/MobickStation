import styled from "styled-components";

const StyledAdandInterviewWrapper = styled.div`
  width: 1200px;
  height: 380px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  background-color: pink;
`;

const AdWrapper = styled.div`
  width: 617px;
  height: 380px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  border: 1px solid lightgray;
  border-bottom: none;
  background-color: antiquewhite;
`;

const InterviewWrapper = styled.div`
  width: 583px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid lightgray;
  border-left: none;
`;

const InterviewTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid lightgray;
  background-color: lightblue;
`;

const InterviewContent = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 12px;
  background-color: lightyellow;
`;

const InterviewContentBox = styled.div`
  width: 180px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgreen;
`;

const InterviewContentBoxImage = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightpink;
`;

const InterviewContentBoxTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightcoral;
`;

const InterviewContentBoxText = styled.div`
  width: 100%;
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  color: darkgray;
`;

export default function AdAndInterview() {
  return (
    <StyledAdandInterviewWrapper>
      <AdWrapper>AD Wrapper</AdWrapper>
      <InterviewWrapper>
        <InterviewTitle>InterviewTitle</InterviewTitle>
        <InterviewContent>
          <InterviewContentBox>
            <InterviewContentBoxImage />
            <InterviewContentBoxTitle />
            <InterviewContentBoxText />
          </InterviewContentBox>
          <InterviewContentBox>
            <InterviewContentBoxImage />
            <InterviewContentBoxTitle />
            <InterviewContentBoxText />
          </InterviewContentBox>
          <InterviewContentBox>
            <InterviewContentBoxImage />
            <InterviewContentBoxTitle />
            <InterviewContentBoxText />
          </InterviewContentBox>
        </InterviewContent>
        <InterviewContent>
          <InterviewContentBox>
            <InterviewContentBoxImage />
            <InterviewContentBoxTitle />
            <InterviewContentBoxText />
          </InterviewContentBox>
          <InterviewContentBox>
            <InterviewContentBoxImage />
            <InterviewContentBoxTitle />
            <InterviewContentBoxText />
          </InterviewContentBox>
          <InterviewContentBox>
            <InterviewContentBoxImage />
            <InterviewContentBoxTitle />
            <InterviewContentBoxText />
          </InterviewContentBox>
        </InterviewContent>
      </InterviewWrapper>
    </StyledAdandInterviewWrapper>
  );
}
