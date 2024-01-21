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
      <div className={styles.vasilikiMinou}>Vasiliki Minou</div>
      <img
        className={styles.uxResearchDesignChild}
        alt=""
        src="/vector-3.svg"
      />
      <div className={styles.home}>Home</div>
      <div className={styles.aboutMe}>About Me</div>
      <div className={styles.work}>Work</div>
      <div className={styles.uxResearchDesignBox}>
        <div className={styles.euphoria}>
          <div className={styles.euphoriaChild} />
          <img className={styles.icon} alt="" src="/31661652173835--3@2x.png" />
          <img
            className={styles.icon1}
            alt=""
            src="/31641652173833--3@2x.png"
          />
        </div>
        <div className={styles.uxResearchDesignBoxChild} />
      </div>
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
