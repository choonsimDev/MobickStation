import styled from "styled-components";

const WalletTitle = styled.div`
font-size: 4rem;
color: #333;
background-color: beige;
`;

export default function Wallet() {
    return (
        <div>
            <WalletTitle>Wallet</WalletTitle>
        </div>
    );
}