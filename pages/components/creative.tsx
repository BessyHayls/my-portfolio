import type { NextPage } from "next";
import styles from "./styles/creative.module.css";

const Creative: NextPage = () => {
  return (
    <div className={styles.creative}>
      <div className={styles.creativeChild} />
      <img className={styles.creativeItem} alt="" src="/vector-7.svg" />
      <img className={styles.creativeInner} alt="" src="/vector-6.svg" />
      <div className={styles.illustrations}>Illustrations</div>
      <div className={styles.exploreASpecial}>
        Explore a special section in my portfolio that captures my creative
        projects done during my free time over the years. One highlight is the
        "Birthday Postcard" series – a collection of personalized cards designed
        as unique gifts for my friends on their birthdays. These cards aim to
        add a special touch to the celebrations, reflecting the individuality of
        each friend and our shared memories.
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.creativeChild1} />
      <div className={styles.creativeChild2} />
      <img className={styles.niouniou21Icon} alt="" src="/niouniou2-1@2x.png" />
      <div className={styles.creativeChild3} />
      <img className={styles.arrowIcon} alt="" src="/arrow-3.svg" />
      <div className={styles.creativeChild4} />
      <img className={styles.savvaki33Icon} alt="" src="/savvaki3-1@2x.png" />
      <img
        className={styles.theodosakimou1Icon}
        alt=""
        src="/theodosakimou-1@2x.png"
      />
      <img className={styles.mee1Icon} alt="" src="/mee-1@2x.png" />
      <div className={styles.nikol}>Nikol</div>
      <div className={styles.anna}>Anna</div>
      <div className={styles.sia}>Sia</div>
      <div className={styles.bessy}>Bessy</div>
    </div>
  );
};

export default Creative;
