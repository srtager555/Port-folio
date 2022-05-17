import React from "react";

import stylesCV from "Styles/cvStyles/cv.module.scss";
import styles from "Styles/cvStyles/moreInfo.module.scss";

export function ContainerMoreInfo() {
   return (
      <div
         className={`${stylesCV.container__content} ${styles["container--moreInfo"]}`}
      >
         <h2 className={stylesCV.title__content}>More Info</h2>
         <div className={styles["moreInfo__container"]}>
            <div className={styles["moreInfo__container--item"]}>
               <h4 className={styles.title__moreInfo}>English B1 for now.</h4>
               <p className={styles.text__moreInfo}>
                  I learn English every day, but my listening and pronunciation
                  is not the best, I need to be spoken a bit slowly.
               </p>
            </div>
            <div className={styles["moreInfo__container--item"]}>
               <h4 className={styles.title__moreInfo}>I am from...</h4>
               <p className={styles.text__moreInfo}>
                  I living in La Ceiba, Honduras is country of Latam, My native
                  language is Spanish, ¿Quieres una Baleada?
               </p>
            </div>
            <div className={styles["moreInfo__container--item"]}>
               <h4 className={styles.title__moreInfo}>when I was born</h4>
               <p className={styles.text__moreInfo}>
                  My model is 20040525... I was born on May 25th, 2004,
               </p>
            </div>
            <div className={styles["moreInfo__container--item"]}>
               <h4 className={styles.title__moreInfo}>MacOS lover</h4>
               <p className={styles.text__moreInfo}>
                  My favorite operating system is MacOS, I was once a Window
                  user, but when I tried it, everything changed
               </p>
            </div>
            <div className={styles["moreInfo__container--item"]}>
               <h4 className={styles.title__moreInfo}>Hobbits</h4>
               <p className={styles.text__moreInfo}>
                  I like play video games, I like to play with my friends;
                  I hear music. Dusted and I listen games themes of my favorite games...

               </p>
            </div>
            <div className={styles["moreInfo__container--item"]}>
               <h4 className={styles.title__moreInfo}>Contact</h4>
               <p className={styles.text__moreInfo}>
                  You can contact with me, the information is in the first
                  section, at the top
               </p>
            </div>
         </div>
      </div>
   );
}
