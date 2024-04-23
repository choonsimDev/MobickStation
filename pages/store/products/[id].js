import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
  width: 530px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 30px;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  & div {
    display: flex;
    height: 120px;
    gap: 5px;
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

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (product) {
      setTotalPrice(product.price * quantity);
    }
  }, [product, quantity]);
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Prevent quantity from going below 1
  };

  useEffect(() => {
    if (id) {
      fetch(`/api/store/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch product", err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  // 이미지 URL을 배열로 파싱
  const imageUrls = product.imageUrl ? product.imageUrl.split(",") : [];
  const mainImageUrl = imageUrls.length > 0 ? imageUrls[0] : "/placeholder.png";
  const allImages = imageUrls.slice(0);

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
              <img
                src={mainImageUrl}
                alt={product.name}
                style={{ width: "100%" }}
              />
              <div>
                {allImages.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={product.name}
                    style={{ height: "100px", marginTop: "10px" }}
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
                <button>Buy Now</button>
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

export default ProductDetail;
