import styled from "styled-components";
import SwiperBanner from "./Swiper";

const StyledTopMidWraper = styled.div`
    width: 1200px;
    height : 400px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    border: 1px solid lightgray;
`;

const StyledNowBook = styled.div`
    width: 959px;
    height: 398px;
    display: flex;
    flex-direction: column;
`;
const StyledNowBookTitle = styled.div`
    width: 959px;
    height: 30px;
    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid lightgray;
`;
const StyledNowBookList = styled.div`
    width: 959px;
    height: 370px;
    background-color: lightyellow;
`;
const StyledPubBook = styled.div`
    width: 238px;
    height: 398px;
    border-left: 1px solid lightgray;
`;
const StyledPubBookTitle = styled.div`
    width: 238px;
    height: 30px;
    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const StyledPubBookImageBox = styled.div`
    width: 238px;
    height: 368px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
const StyledPubBookImage = styled.div`
    width: 200px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
`;


export default function NowBooks() {
    return (
        <StyledTopMidWraper>
            <StyledNowBook>
                <StyledNowBookTitle>누적상품</StyledNowBookTitle>
                <StyledNowBookList><SwiperBanner /></StyledNowBookList>
            </StyledNowBook>
            <StyledPubBook>
                <StyledPubBookTitle>추천</StyledPubBookTitle>
                <StyledPubBookImageBox>
                    <StyledPubBookImage>이미지</StyledPubBookImage>
                    <StyledPubBookImage>이미지</StyledPubBookImage>
                </StyledPubBookImageBox>

            </StyledPubBook>
        </StyledTopMidWraper>
    );
}