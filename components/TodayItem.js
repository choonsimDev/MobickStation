import styled from "styled-components";

const StyledRecommend = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: gray;
    text-align: center;
`;

const Recommend1 = styled.div`
    width: 15%;
    height: 300px;
    background-color: skyblue;
    display: flex;
    flex-direction: column;
    `;
const Recommend2 = styled.div`
    width: 70%;
    height: 300px;
    background-color: pink;
    display: flex;
    flex-direction: row;
    
    `;
const Recommend3 = styled.div`    
    width: 15%;
    height: 300px;
    background-color: black;
    
    `;

const Recommend1_1 = styled.div`
    width: 100%;
    height: 10%;
    background-color: gray;
    `;
const Recommend1_2 = styled.div`
    width: 100%;
    height: 55%;
    background-color: palegoldenrod;
`;
const Recommend1_3 = styled.div`
    width: 100%;
    height: 35%;
    background-color: gray;
`;

const Recommend2_1 = styled.div`
    width: 30%;
    height: 100%;
    background-color: green;
    `;
const Recommend2_2 = styled.div`
    width: 70%;
    height: 100%;
    background-color: saddlebrown;
    display: flex;
    flex-direction: column;
`;

const Recommend2_2_1 = styled.div`
    width: 100%;
    height: 10%;
    background-color: red;
`;
const Recommend2_2_2 = styled.div`
    width: 100%;
    height: 70%;
    background-color: orange;
`;
const Recommend2_2_3 = styled.div`
    width: 100%;
    height: 20%;
    background-color: yellow;
    display: flex;
    flex-direction :row;
`;

const Recommend2_2_3_Pic = styled.div`
    width: 18%;
    height: 100%;
    background-color: violet;
    margin-left: 10px;
`;

const Recommend3_1 = styled.div`
    width: 100%;
    height: 10%;
    background-color: gray;
    display: flex;
    flex: row;

`;

const Recommend3_1_1 = styled.div`
    width: 50%;
    height: 100%;
    background-color: skyblue;
`;

const Recommend3_1_2 = styled.div`
    width: 50%;
    height: 100%;
    background-color: salmon;
`;

const Recommend3_2 = styled.div`
    width: 100%;
    height: 90%;
    background-color: palegoldenrod;
`;


export default function TodayItem() {
    return (
        <StyledRecommend>
            <Recommend1>
                <Recommend1_1></Recommend1_1>
                <Recommend1_2></Recommend1_2>
                <Recommend1_3></Recommend1_3>
            </Recommend1>
            <Recommend2>
                <Recommend2_1></Recommend2_1>
                <Recommend2_2>
                    <Recommend2_2_1></Recommend2_2_1>
                    <Recommend2_2_2></Recommend2_2_2>
                    <Recommend2_2_3>
                        <Recommend2_2_3_Pic></Recommend2_2_3_Pic>
                        <Recommend2_2_3_Pic></Recommend2_2_3_Pic>
                        <Recommend2_2_3_Pic></Recommend2_2_3_Pic>
                        <Recommend2_2_3_Pic></Recommend2_2_3_Pic>
                        <Recommend2_2_3_Pic></Recommend2_2_3_Pic>
                    </Recommend2_2_3>
                </Recommend2_2>
            </Recommend2>
            <Recommend3>
                <Recommend3_1>
                    <Recommend3_1_1></Recommend3_1_1>
                    <Recommend3_1_2></Recommend3_1_2>
                </Recommend3_1>
                <Recommend3_2></Recommend3_2>
            </Recommend3>

        </StyledRecommend>
    );
}