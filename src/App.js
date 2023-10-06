import React from "react";
import { Navbar } from "./components";
import "./App.css";
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
} from "./sections";
const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs/>
      <Footer />
    </main>
  );
};

export default App;
