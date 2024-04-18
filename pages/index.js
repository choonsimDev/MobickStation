import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "@/components/Modal/Modal";
import Head from "next/head";
import Header from "@/components/Main/Header";
import Center from "@/components/Main/Center";

import LogoAndSearch from "@/components/Main/LogoAndSearch";
import Banner from "@/components/Main/Banner";
import TodayItem from "@/components/Main/TodayItem";
import Products from "@/components/Main/Products";
import CommunityMain from "@/components/Main/CommunityMain";

import AdArea from "@/components/Main/AdArea";

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
        <meta name="viewport" content="width=1200, initial-scale=1.0" />
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
