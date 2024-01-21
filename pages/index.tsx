import type { NextPage } from "next";
import AboutMe from "./AboutMe";
import LandingPage from "./LandingPage";
import Work from "./Work";
import UXResearchDesign from "./UXResearchDesign";
import Uphoria from "./Uphoria";
import DFX from "./DFX";
import Creative from "./Creative";
import Automotive from "./Automotive";

const BasePage: NextPage = () => {

  return (<>
    <LandingPage />
    <AboutMe />
    <Work />
    <UXResearchDesign />
    <Uphoria />
    <DFX />
    <Creative />
    <Automotive />
  </>
  );
};

export default BasePage;
