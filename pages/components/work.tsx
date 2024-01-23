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
      <img className={styles.uphoriaBox} alt="" src="/uphoriaBox-1@2x.png" />
      <div className={styles.automotiveDesignBox}>
        <div className={styles.automotive}>
          <div className={styles.automotiveChild} />
        </div>
        <div className={styles.automotiveDesignBoxChild} />
      </div>
      <div className={styles.creativeDesignBox}>
        <div className={styles.automotive}>
        </div>
        <div className={styles.automotiveDesignBoxChild} />
      </div>
      <div className={styles.uxResearchDesignBox}>
        <div className={styles.automotive}>
          <div className={styles.euphoriaChild} />
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
