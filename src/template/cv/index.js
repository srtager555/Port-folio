import React from "react";

import styles from "../../styles/cv.module.scss";

export function CV() {
   return (
      <div className={styles["container--cv"]}>
         <div
            className={`${styles.container__content}  ${styles["container--title"]}`}
         >
            <img src="https://i.ibb.co/f8RVct5/home-image.jpg" alt="Hu Tao" />
            <h1>Frontend developer</h1>
            <span>Carlos Ponce</span>
         </div>
         <div
            className={`${styles.container__content} ${styles["container--profile"]}`}
         >
            <h2>Profile</h2>
            <div className={styles.profileInfo}>
               <div className={styles["profileInfo--imgBox"]}>
                  <img
                     src="https://i.ibb.co/vBK7p1q/profile-pic.jpg"
                     alt="Hu Tao"
                  />
               </div>
               <div className={styles["profileInfo--infoBox"]}>
                  <a
                     href="mailto:srtager555@gmail.com"
                    //  target="_blank"
                     rel="noopener noreferrer"
                  >
                     srtager555@gmail.com
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
   //    https://i.ibb.co/vBK7p1q/profile-pic.jpg
}
