import React from "react";
import { Navbar } from "../../components";
import { GoUp } from "../../components/GoUp/GoUp";
import "./Home.css";
import {
  Header,
  Footer,
  AboutUs,
  SpecialMenu,
  Chef,
  Intro,
  Laurels,
  Gallery,
  FindUs,
} from "../../sections";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
      <GoUp />
    </>
  );
};

export default Home;
