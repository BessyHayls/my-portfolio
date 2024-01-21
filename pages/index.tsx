import type { NextPage } from "next";
import AboutMe from "./components/aboutMe";
import LandingPage from "./components/landingPage";
import Work from "./components/work";
import UXResearchDesign from "./components/uxResearchDesign";
import Uphoria from "./components/uphoria";
import DFX from "./components/dfx";
import Creative from "./components/creative";
import Automotive from "./components/automotive";

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
