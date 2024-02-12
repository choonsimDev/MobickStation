import styled from "styled-components";
import SwiperBanner from "./SwiperProducts";

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
  padding: 14px 0px 0px 70px;
  //  background-color: lightyellow;
`;
const StyledNowBookListBox = styled.div`
  width: 885px;
  height: 340px;
  justify-content: right;
  display: flex;
  flex-direction: row;
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
  justify-content: space-around;
  align-items: center;
`;
const StyledPubBookImage = styled.div`
  width: 160px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;
const StyledPubBookLine = styled.div`
  width: 100px;
  height: 1px;
  background-color: darkgrey;
`;
// 추가 코드

const StyledProductBox = styled.div`
  flex: 1;
  margin: 20px; // 오른쪽 마진을 10px로 설정

  /* border: 1px solid lightgray; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledProductImage = styled.div`
  height: 65%;
  background-color: skyblue; // 임시 배경색
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`;

const StyledProductName = styled.div`
  padding: 10px;
  font-size: 13px;
  font-weight: bold;
`;

const StyledProductDescription = styled.div`
  padding: 10px;
  font-size: 12px;
  color: gray;
  flex-grow: 1;
`;

const StyledProductPrice = styled.div`
  padding: 10px;
  font-weight: bold;
`;

export default function Products() {
  // 상품 데이터
  const products = [
    {
      imageUrl: "상품1이미지URL",
      name: "비트코인 필승 투자 스터디",
      description: "오태민 작가와 함께하는 비트코인 투자 스터디",
      price: "₩99,000",
    },
    {
      imageUrl: "상품2이미지URL",
      name: "비트모빅 로고 동판 - 몬트빌",
      description: "2023.07.18 몬트빌 에어드랍 기념 동판",
      price: "₩5,000,000",
    },
    {
      imageUrl: "상품3이미지URL",
      name: "비트코인 투자 바이블",
      description: "대한민국 비트코인 최고 권위자 오태민 작가",
      price: "₩270,000",
    },
    {
      imageUrl: "상품4이미지URL",
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
            {products.map((product, index) => (
              <StyledProductBox key={index}>
                <StyledProductImage
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                />
                <StyledProductName>{product.name}</StyledProductName>
                <StyledProductDescription>
                  {product.description}
                </StyledProductDescription>
                <StyledProductPrice>{product.price}</StyledProductPrice>
              </StyledProductBox>
            ))}
          </StyledNowBookListBox>
        </StyledNowBookList>{" "}
      </StyledNowBook>
      <StyledPubBook>
        <StyledPubBookTitle>오독클 추천 서적</StyledPubBookTitle>
        <StyledPubBookImageBox>
          <StyledPubBookImage>이미지</StyledPubBookImage>
          <StyledPubBookLine></StyledPubBookLine>
          <StyledPubBookImage>이미지</StyledPubBookImage>
        </StyledPubBookImageBox>
      </StyledPubBook>
    </StyledTopMidWraper>
  );
}
