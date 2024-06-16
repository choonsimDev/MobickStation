import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "@/components/modal/Modal";
import Head from "next/head";
import Center from "@/components/common/Center";

import LogoAndSearch from "@/components/common/Header";
import Banner from "@/components/store/mainpage/Banner";
import Products from "@/components/store/mainpage/Products";
import CommunityMain from "@/components/community/CommunityMain";

import AdArea from "@/components/common/AdArea";
import Footer from "@/components/common/Footer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hideModalDate = localStorage.getItem("hideModal");
    if (hideModalDate) {
      const currentDate = new Date();
      const nextDay = new Date(hideModalDate);
      nextDay.setDate(nextDay.getDate() + 1);

      if (currentDate < nextDay) {
        return;
      }
    }

    setShowModal(true);
  }, []);

  return (
    <StyledDiv>
      <Head>
        <title>MOBICK STATION</title>
        <meta name="BTC Mobick Community" content="-" />
        <meta name="viewport" content="width=1200, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
        <LogoAndSearch />
        <Banner />
        {/* <CommunityMain /> */}
        <Products />
        <AdArea />
        <Footer />
      </Center>
    </StyledDiv>
  );
};

export default Home;
