import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./styles/work.module.css";

const Work: NextPage = () => {
  const onUXResearchClick = useCallback(() => {
    // Please sync "UX Research & Design" to the project
  }, []);

  const onAutomotiveClick = useCallback(() => {
    // Please sync "DFX" to the project
  }, []);

  const onCreativeClick = useCallback(() => {
    // Please sync "DFX" to the project
  }, []);

  return (
    <div className={styles.work}>
      <div className={styles.workChild} />
      <img className={styles.workItem} alt="" src="/vector-2.svg" />
      <img className={styles.uphoriaBox} alt="" src="/uphoriaBox-1@2x.png" />
      <img className={styles.creativeBox} alt="" src="/creativeBox.png" />
      <img className={styles.automotiveBox} alt="" src="/automotiveBox.png" />
      <div className={styles.rectangleParent} onClick={onUXResearchClick}>
        <div className={styles.groupChild} />
        <div className={styles.uxResearch}>{`UX Research & Design`}</div>
      </div>
      <div className={styles.rectangleGroup} onClick={onAutomotiveClick}>
        <div className={styles.groupChild} />
        <div className={styles.automotiveDesign}>{'Automotive Design'}</div>
      </div>
      <div className={styles.rectangleContainer} onClick={onCreativeClick}>
        <div className={styles.groupChild} />
        <div className={styles.creativeDesign}>{'Creative Design'}</div>
      </div>
    </div>
  );
};

export default Work;
