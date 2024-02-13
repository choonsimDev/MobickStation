import styled from "styled-components";

const StyledTopMidWraper = styled.div`
  width: 1200px;
  height: 400px;
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
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;
const StyledNowBookList = styled.div`
  width: 959px;
  height: 368px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledNowBookListBox = styled.div`
  width: 959px;
  height: 340px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
`;
const StyledPubBook = styled.div`
  width: 238px;
  height: 398px;
  border-left: 1px solid lightgray;
`;
const StyledPubBookTitle = styled.div`
  width: 238px;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  padding-left: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const StyledPubBookImageBox = styled.div`
  width: 238px;
  height: 338px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;
const StyledPubBookImage = styled.div`
  width: 180px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const StyledPubBookLine = styled.div`
  width: 100px;
  height: 1px;
  background-color: darkgrey;
`;
// 추가 코드

const StyledProductBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid lightgray;
  overflow: hidden;
`;
const StyledProductImage = styled.div`
  height: 65%;
  background-color: skyblue; // 임시 배경색
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
`;
const StyledProductName = styled.div`
  margin-top: 1.2rem;
  padding: 0rem 1rem;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
`;
const StyledProductDescription = styled.div`
  padding: 0rem 1rem;
  margin-top: 0.5rem;
  line-height: 1.4;
  font-size: 12px;
  color: gray;
  flex-grow: 1;
  cursor: pointer;
`;
const StyledProductPrice = styled.div`
  margin-bottom: 1.2rem;
  padding: 0rem 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

export default function Products() {
  // 상품 데이터
  const products = [
    {
      imageUrl: "/images/BitcoinInvestmentBible.png",
      name: "비트코인 필승 투자 스터디",
      description: "오태민 작가와 함께하는 비트코인 투자 스터디",
      price: "₩99,000",
    },
    {
      imageUrl: "/images/Btcmobick_Logo_Goods2.png",
      name: "비트모빅 로고 동판 - 몬트빌",
      description: "2023년 7월 18일 몬트빌 에어드랍 기념 동판",
      price: "₩5,000,000",
    },
    {
      imageUrl: "/images/BitcoinInvestmentStudies .png",
      name: "비트코인 투자 바이블",
      description: "대한민국 비트코인 국내최고 권위자 오태민 작가",
      price: "₩270,000",
    },
    {
      imageUrl: "/images/Wallet_5th.png",
      name: "모빌렛 - 5차",
      description: "당신의 암호화폐를 안전하게 보관하세요.",
      price: "₩40,000",
    },
  ];

  return (
    <StyledTopMidWraper>
      <StyledNowBook>
        <StyledNowBookTitle>카테고리별 판매량 1위</StyledNowBookTitle>
        <StyledNowBookList>
          <StyledNowBookListBox>
            {products.map((product, index) => {
              return (
                <StyledProductBox key={index}>
                  <StyledProductImage>
                    <img src={product.imageUrl} alt="4thWallet" />
                  </StyledProductImage>
                  <StyledProductName>{product.name}</StyledProductName>
                  <StyledProductDescription>
                    {product.description}
                  </StyledProductDescription>
                  <StyledProductPrice>{product.price}</StyledProductPrice>
                </StyledProductBox>
              );
            })}
          </StyledNowBookListBox>
        </StyledNowBookList>
      </StyledNowBook>
      <StyledPubBook>
        <StyledPubBookTitle>오독클 추천 서적</StyledPubBookTitle>
        <StyledPubBookImageBox>
          <StyledPubBookImage>
            <img src="/images/Odocl_1.png" alt="Odocl_1" />
          </StyledPubBookImage>
          <StyledPubBookLine></StyledPubBookLine>
          <StyledPubBookImage>
            <img src="/images/Odocl_2.png" alt="Odocl_2" />
          </StyledPubBookImage>
        </StyledPubBookImageBox>
      </StyledPubBook>
    </StyledTopMidWraper>
  );
}
