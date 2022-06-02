import React from "react";
import Wl from "wrapping-letters-react";

import styles from "Src/styles/cvStyles/home.module.sass";

export function home({ setPageName }) {

  // the navbar style need a new styles
  // and the button need a function to change the page
   let wlprops = {
      SelectClass: {
         wordToSearch: "resume",
         classToAdd: styles.resume,
      },
      PerWord: true,
   };

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
         <button className={styles.nextPage}>
            <Wl word="see resume" wordOptions={[wlprops]} />
            <div className={styles.secundaryLetters}>
               <Wl word="see resume" wordOptions={[wlprops]} />
            </div>
         </button>
      </div>
   );
}
