import type { NextPage} from "next";
import { useCallback } from "react";
import styles from "./styles/appHeader.module.css";



const AppHeader: NextPage = () => {

    const onHomeTextClick = useCallback(() => {
        window.scrollTo(0, 0);
      }, []);

      const onAboutMeTextClick = useCallback(() => {
        window.scrollTo(0, 1500);
      }, []);
    
      const onWorkTextClick = useCallback(() => {
        window.scrollTo(0, 2620);
      }, []);

    return (<div className={styles.appBar}>
        <div className={styles.vasilikiMinou}>Vasiliki Minou</div>
        <div className={styles.home} onClick={onHomeTextClick}>
        Home
        </div>
        <div className={styles.aboutMe1} onClick={onAboutMeTextClick}>About Me</div>
        <div className={styles.work} onClick={onWorkTextClick}>
        Work
        </div>
    </div>
    );
}

export default AppHeader;