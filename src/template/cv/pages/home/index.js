import React, { useState } from "react";
import { Link } from "react-router-dom";

import Wl from "wrapping-letters-react";

import styles from "Src/styles/cvStyles/home.module.sass";

export function home() {
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
         <div
            className={`${styles.screenContent}`}
         >
            <div className={styles.bgImage}></div>
         </div>
         <Link to="/cv/profile" className={styles.nextPage}>
            <Wl word="see resume" wordOptions={[wlprops]} />
            <div className={styles.secundaryLetters}>
               <Wl word="see resume" wordOptions={[wlprops]} />
            </div>
         </Link>
      </div>
   );
}
