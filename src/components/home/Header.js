import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/salon.jpg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="welcome to"
        title="Stanos Salon"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi provident eos sapiente deleniti in quisquam."
      >
        <PrimaryBtn t="1rem">view details</PrimaryBtn>
        {/* <PrimaryBtn as="a" href="https://www.google.com">
          view details
        </PrimaryBtn> */}
      </Banner>
    </Hero>
  );
};

export default Header;
