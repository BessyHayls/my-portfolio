import type { NextPage } from "next";
import AboutMe from "./aboutMe";
import LandingPage from "./landingPage";
import Work from "./work";
import UXResearchDesign from "./uxResearchDesign";
import Uphoria from "./uphoria";
import DFX from "./dfx";
import Creative from "./creative";
import Automotive from "./automotive";

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
