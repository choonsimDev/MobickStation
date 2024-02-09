import styled from "styled-components";

const StyledTopMidWraper = styled.div`
    width: 1200px;
    height : 400px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    background-color: lightgray;
`;

const StyledNowBook = styled.div`
    width: 959px;
    height: 400px;
    display: flex;
    flex-direction: column;
    background-color: lightgreen;
`;
const StyledNowBookTitle = styled.div`
    width: 959px;
    height: 30px;
    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: lightblue;
`;
const StyledNowBookList = styled.div`
    width: 959px;
    height: 370px;
    background-color: lightyellow;
`;
const StyledPubBook = styled.div`
    width: 238px;
    height: 400px;
    background-color: lightgray;
`;


export default function PopularBooks() {
    return (
        <StyledTopMidWraper>
            <StyledNowBook>
                <StyledNowBookTitle>PopularBooks</StyledNowBookTitle>
                <StyledNowBookList></StyledNowBookList>
            </StyledNowBook>
            <StyledPubBook>PopBook</StyledPubBook>
        </StyledTopMidWraper>
    );
}