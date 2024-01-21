import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./styles/landingPage.module.css";

const LandingPage: NextPage = () => {
  const onAboutMeTextClick = useCallback(() => {
    // Please sync "About Me" to the project
  }, []);

  const onWorkTextClick = useCallback(() => {
    // Please sync "Work" to the project
  }, []);

  const onHereTextClick = useCallback(() => {
    // Please sync "Work" to the project
  }, []);

  const onLinkedInTextClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/vasiliki-minou-b322a8106/");
  }, []);

  const onEmailTextClick = useCallback(() => {
    window.location.href = "mailto:vasilikiminou|@gmail.com";
  }, []);

  const onRectangle1Click = useCallback(() => {
    // Please sync "About Me" to the project
  }, []);

  return (<>
    <div className={styles.landingPage}>
      <div className={styles.landingPageChild} />
      <img className={styles.vector17} alt="" src="/vector-1-7@2x.png" />
      <div className={styles.heyImVasilikiContainer}>
        <p className={styles.heyImVasiliki}>
          <span>
            <span>Hey! I’m Vasiliki</span>
          </span>
        </p>
        <p className={styles.iDesignUserExperiencesSom}>
          <span>
            <span>I design user</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.experiences}>experiences</span>
            <span className={styles.sometimesICode}>
              . Sometimes, I code, too.
            </span>
          </span>
        </p>
      </div>
      <div className={styles.youCanBrowse}>{`You can browse my work `}</div>
      <div className={styles.here} onClick={onHereTextClick}>
        here
      </div>
      <div className={styles.linkedin} onClick={onLinkedInTextClick}>
        LinkedIn
      </div>
      <div className={styles.email} onClick={onEmailTextClick}>
        Email
      </div>
      <div className={styles.landingPageItem} onClick={onRectangle1Click} />
      <div className={styles.aboutMe1}>About Me</div>
      <img className={styles.landingPageInner} alt="" src="/line-32.svg" />
    </div>
    </>
  );
};

export default LandingPage;
