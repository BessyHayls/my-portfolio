import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./styles/work.module.css";

const Work: NextPage = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "UX Research & Design" to the project
  }, []);

  return (
    <div className={styles.work}>
      <div className={styles.workChild} />
      <img className={styles.workItem} alt="" src="/vector-2.svg" />
      <div className={styles.automotiveDesignBox}>
        <div className={styles.automotive}>
          <div className={styles.automotiveChild} />
          <img
            className={styles.automotive21Icon}
            alt=""
            src="/automotive2-1@2x.png"
          />
        </div>
        <div className={styles.automotiveDesignBoxChild} />
      </div>
      <div className={styles.creativeDesignBox}>
        <div className={styles.automotive}>
          <img
            className={styles.creativeChild}
            alt=""
            src="/rectangle-38.svg"
          />
          <img
            className={styles.savvaki31Icon}
            alt=""
            src="/savvaki3-1@2x.png"
          />
        </div>
        <div className={styles.automotiveDesignBoxChild} />
      </div>
      <div className={styles.uxResearchDesignBox}>
        <div className={styles.automotive}>
          <div className={styles.euphoriaChild} />
          <img className={styles.icon} alt="" src="/31661652173835--3@2x.png" />
          <img
            className={styles.icon1}
            alt=""
            src="/31641652173833--3@2x.png"
          />
        </div>
        <div className={styles.automotiveDesignBoxChild} />
      </div>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.uxResearch}>{`UX Research & Design`}</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.automotiveDesign}>Automotive Design</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild} />
        <div className={styles.creativeDesign}>Creative Design</div>
      </div>
    </div>
  );
};

export default Work;
