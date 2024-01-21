import type { NextPage } from "next";
import AboutMe from "./aboutMe";
import LandingPage from "./landingPage";
import Work from "./work";
import UXResearchDesign from "./uxResearchDesign";
import Uphoria from "./uphoria";
import DFX from "./dfx";
import Creative from "./creative";
import Automotive from "./automotive";
import styles from "./styles/app.module.css"
import AppHeader from "./appHeader";

const App: NextPage = () => {

  return (<div className={styles.app}>
    <AppHeader />
    <LandingPage />
    <AboutMe />
    <Work />
    <UXResearchDesign />
    <Uphoria />
    <DFX />
    <Creative />
    <Automotive />
  </div>
  );
};

export default App;