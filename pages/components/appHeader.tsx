import type { NextPage} from "next";
import { useCallback } from "react";
import styles from "./styles/appHeader.module.css";



const AppHeader: NextPage = () => {

    const onHomeTextClick = useCallback(() => {
        // Please sync "Landing Page" to the project
      }, []);
    
      const onWorkTextClick = useCallback(() => {
        // Please sync "Work" to the project
      }, []);

    return (<div className={styles.appBar}>
        <div className={styles.vasilikiMinou}>Vasiliki Minou</div>
        <div className={styles.home} onClick={onHomeTextClick}>
        Home
        </div>
        <div className={styles.aboutMe1}>About Me</div>
        <div className={styles.work} onClick={onWorkTextClick}>
        Work
        </div>
    </div>
    );
}

export default AppHeader;