import type { NextPage } from "next";

import styles from "./styles/aboutMe.module.css";

const AboutMe: NextPage = () => {

  return (
    <div className={styles.aboutMe}>
      <img className={styles.aboutMeChild} alt="" src="/vector-1.svg" />
      <div className={styles.heyThereImContainer}>
        <p className={styles.heyThereIm}>
          Hey there! I'm Bessy, a BSc Physicist turned UX Designer with an MSc
          in Design Innovation. From unraveling the secrets of the universe to
          weaving them into creative designs, my journey has been quite the
          ride.
        </p>
        <p className={styles.heyThereIm}>&nbsp;</p>
        <p className={styles.heyThereIm}>
          After my physics escapades, I took a leap into the world of design and
          arts. Now, armed with a mix of analytical thinking and creative flair,
          I love exploring the intersection of technology and arts in my own
          time.
        </p>
        <p className={styles.heyThereIm}>&nbsp;</p>
        <p className={styles.heyThereIm}>
          Professionally, I've worked as a Software Engineer at JP Morgan
          Chase, where I've delved into the realms of PaaS, SaaS, and Agile
          Delivery. Navigating the coding landscape has been exciting, and I
          find joy in bringing innovative solutions to the financial realm.
        </p>
        <p className={styles.heyThereIm}>&nbsp;</p>
        <p className={styles.heyThereIm}>
          Off the clock, you'll find me with a soft spot for dogs and a love for
          anything sourdough. It's not just about the tech – I believe in adding
          a touch of humor and a sprinkle of creativity to everything I do.
        </p>
        <p className={styles.blankLine3}>&nbsp;</p>
      </div>
      <div className={styles.aboutMeItem} />
      <div className={styles.myResume}>My Resume</div>
      <img className={styles.prof31Icon} alt="" src="/prof3-1@2x.png" />
    </div>
  );
};

export default AboutMe;
