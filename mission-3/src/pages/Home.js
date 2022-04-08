import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import HomeHero from "../components/HomeHero";
import HomeOffer from "../components/HomeOffer";
import HomeBottom from "../components/HomeBottom";
import HomeFooter from "../components/HomeFooter";
import SectionTwo from "../components/SectionTwo";
import SlideButtons from "../components/SlideSelectors";
import SlideThree from "../components/SlideThree";

function Home() {
  return (
    <>
      <HomeHeader render_home={true} />
      <HomeHero />
      <HomeOffer />
      <SectionTwo />
      <SlideButtons />
      <SlideThree />
      <HomeBottom />
      <HomeFooter />
    </>
  );
}

export default Home;
