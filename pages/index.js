import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "@/components/Main/Modal";

import Head from "next/head";
import Header from "@/components/Main/Header";
import Center from "@/components/Main/Center";

import LogoAndSearch from "@/components/Main/LogoAndSearch";
import Banner from "@/components/Main/Banner";
import TodayItem from "@/components/Main/TodayItem";
import Products from "@/components/Main/Products";
import CommunityMain from "@/components/Main/CommunityMain";

import AdArea from "@/components/Main/AdArea";
import MobiletOtc from "@/components/Main/MobiletOtc";
import WinwinMarket from "@/components/Main/WinwinMarket";
import TodakAndNews from "@/components/Main/TodakAndNews";
import AdAndInterview from "@/components/Main/AdAndInterview";

import Footer from "@/components/Main/Footer";

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.345"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
        <Header />
        <LogoAndSearch />
        <Banner />
        <CommunityMain />
        <TodayItem />
        <Products />
        <AdArea />
        <Footer />
      </Center>
    </StyledDiv>
  );
};

export default Home;
