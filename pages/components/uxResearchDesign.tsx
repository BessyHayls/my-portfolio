import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./styles/uxResearchDesign.module.css";

const UXResearchDesign: NextPage = () => {
  const onUphoriaTextClick = useCallback(() => {
    window.scrollTo(0, 6260);
  }, []);

  const onDesigningForExperiencesClick = useCallback(() => {
    window.scrollTo(0, 10980);
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
        Introducing an inclusive concept for online and in-store Dr Martens customers, who struggle
        to find the perfect shoe and size.
      </div>
      <img className={styles.dfxIcon} alt="" src="dfx-1@2x.png" />
    </div>
  );
};

export default UXResearchDesign;
