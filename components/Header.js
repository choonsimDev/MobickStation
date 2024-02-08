import styled from "styled-components";

const StyledHeader = styled.header`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    background-color: gray;
    padding: 1rem;
    text-align: center;
`;

export default function Header() {
    return (
        <StyledHeader>
            <div>강연및서적</div>
            <div>굿즈</div>
            <div>특별상품</div>
            <div>종이지갑</div>
            <div>상생마켓</div>
            <div>커뮤니티</div>
            <div>모빅정보</div>
        </StyledHeader>
    );
}