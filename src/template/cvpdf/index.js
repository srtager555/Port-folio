import React from "react";

import styles from "../../styles/cvpdf.module.sass";

export function cvpdfTemplate() {
   return (
      <div className={styles.container}>
         <div className={styles.headerName}>
            <span>
               Carlos Ponce - <h1>Front-End Developer</h1>
            </span>
         </div>
         <div className={styles["links--container"]}>
            <a href="https://ttager.page/" className={styles.link}>
               <span>Port-folio</span>
               <small>click me</small>
            </a>
            <a href="https://ttager.page/cv" className={styles.link}>
               <span>Curriculum</span>
               <small>click me</small>
            </a>
         </div>
         <div className={styles.contact__links}>
            <a href="mailto:srtager555@gmail.com">Mail</a>
            <a href="https://www.linkedin.com/in/srtager555" target="_blank">
               LinkedIn
            </a>
            <a href="https://github.com/srtager555" target="_blank">
               GitHub
            </a>
         </div>
      </div>
   );
}
