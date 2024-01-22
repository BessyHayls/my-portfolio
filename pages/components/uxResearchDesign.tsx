import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./styles/uxResearchDesign.module.css";

const UXResearchDesign: NextPage = () => {
  const onUphoriaTextClick = useCallback(() => {
    // Please sync "Uphoria" to the project
  }, []);

  const onDesigningForExperiencesClick = useCallback(() => {
    // Please sync "DFX" to the project
  }, []);

  return (
    <div className={styles.uxResearchDesign}>
      <img
        className={styles.uxResearchDesignChild}
        alt=""
        src="/vector-3.svg"
      />
      <img className={styles.uphoriaBoxIcon} alt="" src="uphoriaBox-1@2x.png" />
      <div className={styles.uphoria} onClick={onUphoriaTextClick}>
        Uphoria
      </div>
      <div className={styles.anOnlineLibraryBasedContainer}>
        <p
          className={styles.anOnlineLibraryBased}
        >{`An online, library-based, activities platform providing solutions to hybrid working employees `}</p>
        <p
          className={styles.anOnlineLibraryBased}
        >{`who struggle to maintain a work-life balance. `}</p>
      </div>
      <div
        className={styles.designingForExperiences}
        onClick={onDesigningForExperiencesClick}
      >
        Designing for experiences
      </div>
      <div className={styles.introducingAnInclusive}>
        Introducing an inclusive concept for Dr Martens customers, who struggle
        with finding the perfect shoe and size.
      </div>
      <div className={styles.vfr}>
        <div className={styles.vfrChild} />
        <img className={styles.vfr101Icon} alt="" src="/vfr10-1@2x.png" />
        <img className={styles.vfr21Icon} alt="" src="/vfr2-1@2x.png" />
        <div className={styles.uxResearchDesignBoxChild} />
      </div>
    </div>
  );
};

export default UXResearchDesign;
