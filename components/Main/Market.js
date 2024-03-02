import styled from "styled-components";
import SwiperBanner from "./Swiper";

const StyledTopMidWraper = styled.div`
    width: 1200px;
    height : 600px;
    margin-top: 20px;
    border: 1px solid lightgray;
`;
const StyledMarketTitle = styled.div`
    height: 30px;
    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid lightgray;
`;
const StyledMarketSwiper = styled.div`
    width: 100%;
    height: 568px;
    background-color: lightgray;
`;

export default function Market() {
    return (
        <StyledTopMidWraper>
            <StyledMarketTitle>
                Market
            </StyledMarketTitle>
            <StyledMarketSwiper>
                <SwiperBanner />
            </StyledMarketSwiper>
        </StyledTopMidWraper>
    );
}