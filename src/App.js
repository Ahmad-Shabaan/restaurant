import React from "react";
import { Navbar } from "./components";
import "./App.css"
// import { Header } from "./sections/Header/Header";
import {Header , Footer , AboutUs , SpecialMenu , Chef ,Intro} from "./sections"
const App = () => {
  return (
    <main>
    <Navbar />
    <Header/>
    <AboutUs/>
    <SpecialMenu/>
    <Chef />
    <Intro/>
    <Footer/>
    </main>
  );
};

export default App;
