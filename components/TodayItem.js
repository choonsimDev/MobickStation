import { useState } from "react";
import styled from "styled-components";

const StyledRecommendWrapper = styled.header`
    width: 1200px;
    height: 300px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid lightgray;
`;

const RecommendFirst = styled.div`
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-right: 1px solid lightgray;
`;
const RecommendSecondImage = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    border-right: 1px solid lightgray;
`;
const RecommendThird = styled.div`
    width: 600px;
    height: 300px;
    display: flex;
    flex-direction: row;
    border-right: 1px solid lightgray;
    
`;
const RecommendFourth = styled.div`    
    width:200px ;
    height: 300px;  
`;

const RecommendFirstTitle = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const RecommendProduct = styled.div`
    width: 90%;
    height: 250px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 1px solid lightgray;
    border-radius: 4px;
`;
const RecommendFirstImage = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
    background-color: lightgray;

`;
const RecommendFirstDescription = styled.div`
    width: 100%;
    height: 50px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start;
`;


const RecommendThirdMenu = styled.div`
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const RecommendThirdTitle = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
`;
const RecommendThirdItemDescription = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid lightgray;
`;
const RecommendThirdItemImageBox = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction :row;
    justify-content: space-around;
    align-items: center;
`;
const RecommendThirdItemImage = styled.div`
    width: 100px;
    height: 80%;
    background-color: lightgray;
    margin-left: 10px;
`;

const RecommendFourthNavi = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex: row;
    justify-content: space-around;
    align-items: center;
    & > div {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & > div:first-child {
        border-right: 1px solid lightgray;
        ${({ activeTab }) => activeTab === '인기검색어' && 'border-bottom: 1px solid lightgray;'}
       
    }
    & > div:nth-child(2) {
        /* border-bottom: 1px solid lightgray; */
        ${({ activeTab }) => activeTab === '인기상품' && 'border-bottom: 1px solid lightgray;'}
    }
`;
const RecommendThirdListA = styled.div`
    width: 100%;
    height: 90%;
`;
const RecommendThirdListB = styled.div`
    width: 100%;
    height: 90%;
`;

export default function TodayItem() {
    const [activeTab, setActiveTab] = useState("인기상품");
    return (
        <StyledRecommendWrapper>
            <RecommendFirst>
                <RecommendFirstTitle>category</RecommendFirstTitle>
                <RecommendProduct>
                    <RecommendFirstImage>image</RecommendFirstImage>
                    <RecommendFirstDescription>
                        <div>상품명</div>
                        <div>가격</div>
                    </RecommendFirstDescription>
                </RecommendProduct>
            </RecommendFirst>
            <RecommendSecondImage>recommand Image</RecommendSecondImage>
            <RecommendThird>
                <RecommendThirdMenu>
                    <RecommendThirdTitle>오늘의 상품</RecommendThirdTitle>
                    <RecommendThirdItemDescription>
                        <div>상품명</div>
                        <div>가격</div>
                        <div>상품설명</div>
                    </RecommendThirdItemDescription>
                    <RecommendThirdItemImageBox>
                        <RecommendThirdItemImage></RecommendThirdItemImage>
                        <RecommendThirdItemImage></RecommendThirdItemImage>
                        <RecommendThirdItemImage></RecommendThirdItemImage>
                        <RecommendThirdItemImage></RecommendThirdItemImage>
                        <RecommendThirdItemImage></RecommendThirdItemImage>
                    </RecommendThirdItemImageBox>
                </RecommendThirdMenu>
            </RecommendThird>
            <RecommendFourth>
                <RecommendFourthNavi activeTab={activeTab}>
                    <div onClick={() => setActiveTab("인기상품")}>인기상품</div>
                    <div onClick={() => setActiveTab("인기검색어")}>인기검색어</div>
                </RecommendFourthNavi>
                {activeTab === "인기상품" ? <RecommendThirdListA>인기상품</RecommendThirdListA> : <RecommendThirdListB>인기검색어</RecommendThirdListB>}
            </RecommendFourth>
        </StyledRecommendWrapper>
    );
}