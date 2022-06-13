import React from "react";
import { useNavigate } from "react-router-dom";

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
         <div className={styles.bgLetters}>
            <span className={styles.letter}>&&&&&&&&&&</span>
            <span className={styles.letter}>&&&&&&&&&&</span>
            <span className={styles.letter}>&&&&&&&&&&</span>
         </div>
         {/* This Link has to be a Button for eject the loading screen */}
         <main className={styles[`main--container`]}>
            <div className={styles[`introduction--container`]}>
               <div className={styles[`introduction--text`]}>
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s
                  </p>
                  <img src="https://ttager.netlify.app/img/oaAhri04.jpg" alt="" />
               </div>
            </div>
            <div classnName={styles["links--container"]}>
               <div className={styles["links--container__links"]}>
                  <button className={styles["links--link"]}>Profile</button>
                  <button className={styles["links--link"]}>Experience</button>
                  <button className={styles["links--link"]}>S&Q</button>
                  <button className={styles["links--link"]}>More Info</button>
               </div>
               <div className={styles["links--container__pointer"]}>
                  <span>Go To</span>
               </div>
            </div>
         </main>
      </div>
   );
}
