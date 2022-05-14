import React from "react";

import { ContainerTitle } from "Src/components/cvComponents/containerTitle";
import { ContainerProfile } from "Src/components/cvComponents/containerProfile";

import styles from "Styles/cv.module.scss";

export function CV() {

   return (
      <div className={styles["container--cv"]}>
         <ContainerTitle />
         <ContainerProfile />

         <div
            className={`${styles.container__content} ${styles["container--skills__qualities"]}`}
         >
            <h2 className={styles.title__content}>Skills & Qualities</h2>
            <div className={styles["skills__content"]}>
               <h3>Vanilla</h3>
               <ul className={styles['skills__content--item']}>
                  <li className={styles.skills__item}>
                     html - <span letter-grade='experienced'>experienced</span>
                  </li>
                  <li className={styles.skills__item}>
                     css - <span letter-grade='experienced'>experienced</span>
                  </li>
                  <li className={styles.skills__item}>
                     js - <span letter-grade='advanced'>advanced</span>
                  </li>
               </ul>

               <h3>Mods</h3>
               <ul className={styles['skills__content--item']}>
                  <li className={styles.skills__item}>
                     React - <span letter-grade='advanced'>advanced</span>
                  </li>
                  <li className={styles.skills__item}>
                     Next.JS - <span letter-grade='advanced'>advanced</span>
                  </li>
                  <li className={styles.skills__item}>
                     webpack - <span letter-grade='average'>average</span>
                  </li>
               </ul>

               <a
                  className={styles.platzi_profile}
                  href="https://platzi.com/p/SrTager555/"
                  target="_blank"
               >
                  You can see each qualification in my profile on Platzi
               </a>
            </div>
            <div className={styles["qualities_content"]}>
               <div className={styles["qualities__content--item"]}>
                  <h3>Fast learner</h3>
                  <p>
                     I love learning new technologies, their development is very
                     fast, but I learn easily.
                  </p>
               </div>
               <div className={styles["qualities__content--item"]}>
                  <h3>Creative and innovative</h3>
                  <p>
                     The most important thing is to be creative and innovative.
                     I love to create new things and I am always looking for new
                     ways to improve my skills.
                  </p>
               </div>
               <div className={styles["qualities__content--item"]}>
                  <h3>A great listener</h3>
                  <p>
                     I am a great listener and I always listen to what I'm
                     learning, Open to new challenges and always open to recive
                     feedback and ideas.
                  </p>
               </div>
            </div>
         </div>

         <div
            className={`${styles.container__content} ${styles["container--experience"]}`}
         >
            <h2 className={styles.title__content}>Experience</h2>
         </div>
      </div>
   );
   //    https://i.ibb.co/vBK7p1q/profile-pic.jpg
}
