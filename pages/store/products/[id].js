import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import Header from "@/components/common/Header";
import Center from "@/components/common/Center";
import LogoAndSearch from "@/components/common/LogoAndSearch";
import Footer from "@/components/common/Footer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductsDetailWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ProductsCategoryWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const ProductsCategory = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 16px;
  color: #666;
  border-bottom: 1px lightgray solid;
`;
const StyledBack = styled.a`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  padding-right: 20px;
  color: gray;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;
const ProductImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 30px;

  & div:nth-child(1) {
    display: flex;
    margin-top: 20px;
    padding: 10px;
    width: 520px;
    height: 520px;
    border: 1px solid lightgray;
    gap: 5px;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
  & div:nth-child(2) {
    display: flex;
    width: 120px;
    height: 120px;
    gap: 5px;
    img {
      object-fit: contain;
      height: 120px;
    }
  }
`;
const ProductDetailBoxWrapper = styled.div`
  display: flex;

  align-items: flex-start;
  width: 100%;
  /* border: solid 1px lightgray;
  border-width: 1px 0 1px 0; */
`;
const ProductDetailRightBox = styled.div`
  flex: 1;
  margin-top: 20px;
`;
const ProductTitleBox = styled.div`
  width: 100%;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;
const ProductDescriptionBox = styled.div`
  width: 100%;
  height: 200px;
  font-size: 16px;
  color: gray;
  line-height: 1.5;
  border-bottom: 1px solid lightgray;
`;
const ProductDetailBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 16px;
  color: gray;
`;
const ProductQuantitylBox = styled.div`
  height: 60px;
  background-color: whitesmoke;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  gap: 30px;
  & div {
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
      background-color: #ddd;
    }
  }
  span {
    font-weight: bold;
    font-size: 16px;
  }
`;
const ProductPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;
const ProductBuyCartLike = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  button {
    background: #e5821a;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background: #f6931a;
    }
  }
`;

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentImage, setCurrentImage] = useState(""); // Initialize the current image state

  // 초기 총 가격 설정
  useEffect(() => {
    fetch(`/api/store/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setTotalPrice(data.price);
      });
  }, [id]);

  // 가격과 수량에 따른 총 가격 계산
  useEffect(() => {
    if (product) {
      setTotalPrice(product.price * quantity);
    }
  }, [product, quantity]);

  // 수량 증가/감소 함수
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Prevent quantity from going below 1
  };

  // 상품 정보 가져오기
  useEffect(() => {
    if (id) {
      fetch(`/api/store/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
          // Set initial image or default placeholder
          const initialUrls = data.imageUrl ? data.imageUrl.split(",") : [];
          setCurrentImage(
            initialUrls.length > 0 ? initialUrls[0] : "/placeholder.png"
          );
        })
        .catch((err) => {
          console.error("Failed to fetch product", err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  // 결제 페이지로 이동하는 함수
  const handleBuyNow = () => {
    router.push({
      pathname: "/store/payment",
      query: {
        id: id,
        quantity: quantity,
        totalPrice: totalPrice,
      },
    });
  };

  // 이미지 URL을 배열로 파싱
  const imageUrls = product.imageUrl ? product.imageUrl.split(",") : [];
  const mainImageUrl = imageUrls.length > 0 ? imageUrls[0] : "/placeholder.png";
  const allImages = imageUrls.slice(0); // Copy all images

  return (
    <StyledDiv>
      <Header />
      <Center>
        <LogoAndSearch />
        <ProductsDetailWrapper>
          <ProductsCategoryWrapper>
            <ProductsCategory>
              Home / Category / {product.name}
            </ProductsCategory>
            <StyledBack href="/store">돌아가기</StyledBack>
          </ProductsCategoryWrapper>
          <ProductDetailBoxWrapper>
            <ProductImageBox>
              <div>
                <img
                  src={currentImage || "/placeholder.png"} // Use currentImage or a placeholder
                  alt={product.name}
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                {allImages.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      height: "100px",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setCurrentImage(url)}
                  />
                ))}
              </div>
            </ProductImageBox>
            <ProductDetailRightBox>
              <ProductTitleBox>{product.name}</ProductTitleBox>
              <ProductDescriptionBox>
                {product.description}
              </ProductDescriptionBox>
              <ProductDetailBox>
                <div>배송 방법</div>
                <div>배송비 | 2,500원(50,000원 이상 무료 배송)</div>
              </ProductDetailBox>
              <ProductQuantitylBox>
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </ProductQuantitylBox>
              <ProductPriceBox>
                Total Price: ₩{totalPrice.toLocaleString()}
              </ProductPriceBox>
              <ProductBuyCartLike>
                <Link href="/store/payment" passHref>
                  <button onClick={handleBuyNow}>Buy Now</button>
                </Link>
                <button>Add to Cart</button>
                <button>♥</button>
              </ProductBuyCartLike>
            </ProductDetailRightBox>
          </ProductDetailBoxWrapper>
        </ProductsDetailWrapper>
        <Footer />
      </Center>
    </StyledDiv>
  );
}
