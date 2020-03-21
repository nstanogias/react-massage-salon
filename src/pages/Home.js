import React from "react";
import Header from "../components/home/Header";
import About from "../components/home/About";
import MassageList from "../components/home/MassageList";

export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <MassageList />
    </>
  );
};

export default Home;
