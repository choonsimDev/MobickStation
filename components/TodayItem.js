import styled from "styled-components";

const StyledRecommendWrapper = styled.header`
    width: 1200px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: gray;
    text-align: center;
`;

const RecommendFirst = styled.div`
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const RecommendSecond = styled.div`
    width: 800px;
    height: 300px;
    display: flex;
    flex-direction: row;
    
`;
const RecommendThird = styled.div`    
    width:200px ;
    height: 300px;  
`;

const RecommendFirstTitle = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
`;
const RecommendFirstImage = styled.div`
    width: 100%;
    height: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: palegoldenrod;
`;
const RecommendFirstDescription = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: lightgray;
`;

const RecommendSecondImage = styled.div`
    width: 240px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgreen;
`;
const RecommendSecondMenu = styled.div`
    width: 560px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: saddlebrown;
`;

const RecommendSecondTitle = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
`;
const RecommendSecondItemDescription = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: lightpink;
`;
const RecommendSecondItemImageBox = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction :row;
    justify-content: space-around;
    align-items: center;
    background-color: yellow;
 
`;
const RecommendSecondItemImage = styled.div`
    width: 100px;
    height: 90%;
    background-color: lightgray;
    margin-left: 10px;
`;

const RecommendThirdNavi = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex: row;
    justify-content: space-around;
    align-items: center;
    background-color: lightgray;
    & > li {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & > li:first-child {
        background-color: lightgreen;
    }
    & > li:nth-child(2) {
        background-color: lightyellow;
    }
`;
const RecommendThirdList = styled.div`
    width: 100%;
    height: 90%;
    background-color: lightgreen;
`;


export default function TodayItem() {
    return (
        <StyledRecommendWrapper>
            <RecommendFirst>
                <RecommendFirstTitle>category</RecommendFirstTitle>
                <RecommendFirstImage>image</RecommendFirstImage>
                <RecommendFirstDescription>
                    <div>상품명</div>
                    <div>가격</div>
                </RecommendFirstDescription>
            </RecommendFirst>
            <RecommendSecond>
                <RecommendSecondImage>recommand Image</RecommendSecondImage>
                <RecommendSecondMenu>
                    <RecommendSecondTitle>오늘의 상품</RecommendSecondTitle>
                    <RecommendSecondItemDescription>
                        <div>상품명</div>
                        <div>가격</div>
                        <div>상품설명</div>
                    </RecommendSecondItemDescription>
                    <RecommendSecondItemImageBox>
                        <RecommendSecondItemImage></RecommendSecondItemImage>
                        <RecommendSecondItemImage></RecommendSecondItemImage>
                        <RecommendSecondItemImage></RecommendSecondItemImage>
                        <RecommendSecondItemImage></RecommendSecondItemImage>
                        <RecommendSecondItemImage></RecommendSecondItemImage>
                    </RecommendSecondItemImageBox>
                </RecommendSecondMenu>
            </RecommendSecond>
            <RecommendThird>
                <RecommendThirdNavi>
                    <li>인기상품</li>
                    <li>인기검색어</li>
                </RecommendThirdNavi>
                <RecommendThirdList></RecommendThirdList>
            </RecommendThird>
        </StyledRecommendWrapper>
    );
}