import React from "react";

import styles from "Styles/cv.module.scss";

export function ContainerMoreInfo() {
   return (
      <div
         className={`${styles.container__content} ${styles["container--moreInfo"]}`}
      >
         <h2 className={styles.title__content}>More Info</h2>
         <div className={styles["moreInfo__container"]}>
            <div className={styles["moreInfo__container--item"]}>
                
            </div>
         </div>
      </div>
   );
}
