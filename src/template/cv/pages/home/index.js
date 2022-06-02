import React from "react";

import styles from "Src/styles/cvStyles/home.module.sass";

export function home({ setPageName }) {
   return (
      <div className={styles.home}>
         <div className={styles.orbLager}>
            <div angle="0" className={styles.orb}></div>
            <div angle="15" className={styles.orb}></div>
            <div angle="30" className={styles.orb}></div>
            <div angle="45" className={styles.orb}></div>
            <div angle="60" className={styles.orb}></div>
            <div angle="75" className={styles.orb}></div>
         </div>
         <div className={styles.orbMedium}>
            <div angle="0" className={styles.orb}></div>
            <div angle="15" className={styles.orb}></div>
            <div angle="30" className={styles.orb}></div>
            <div angle="45" className={styles.orb}></div>
            <div angle="60" className={styles.orb}></div>
            <div angle="75" className={styles.orb}></div>
         </div>
         <div className={styles.orbLogo}>
            <span className={styles.logo}>&&</span>
            <div className={styles.orbBg}>
               <div angle="0" className={styles.orb}></div>
               <div angle="15" className={styles.orb}></div>
               <div angle="30" className={styles.orb}></div>
               <div angle="45" className={styles.orb}></div>
               <div angle="60" className={styles.orb}></div>
               <div angle="75" className={styles.orb}></div>
            </div>
         </div>
      </div>
   );
}
