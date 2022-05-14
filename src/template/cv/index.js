import React from "react";

import WrappingLetters from "wrapping-letters-react";

import styles from "../../styles/cv.module.scss";

export function CV() {
   const IMG__PROFILE =
      "https://i.ibb.co/8KCs9Mw/AEE83958-944-D-4587-83-F2-993-F55-FE25-EF.jpg";

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
            className={`${styles.container__content} ${styles["container--info"]}`}
         >
            <div
               className={`${styles.container__content} ${styles["container--info__profile"]}`}
            >
               <div className={styles["profile__content"]}>
                  <div className={styles["profile__Info"]}>
                     <div className={styles["profile__Info--imgBox"]}>
                        <img src={IMG__PROFILE} alt="Este soy yo" />
                     </div>
                  </div>
                  <div className={styles["profile__about"]}>
                     <div className={styles["profile__Info--infoBox"]}>
                        <div className={styles["profile__Info--infoBox__item"]}>
                           <h2>Contact</h2>
                           <a href="mailto:srtager555@gmail.com">
                              srtager555@gmail.com
                           </a>
                        </div>
                        <div className={styles["profile__Info--infoBox__item"]}>
                           <a
                              href="https://www.linkedin.com/in/srtager555/"
                              target="_blank"
                           >
                              LinkedIn
                           </a>
                           <a
                              href="https://github.com/srtager555"
                              target="_blank"
                           >
                              GitHub
                           </a>
                        </div>
                     </div>
                     <p>
                        I am a Frontend developer with a background in
                        multimedia and web development. I have a b passion for
                        creating and developing web applications.
                     </p>
                     <div className="container__slider cv">
                        <span className="container__slider-item">
                           <WrappingLetters
                              word={`CURRICULUM 2022 CURRICULUM 2022 CURRICULUM 2022 CURRICULUM 2022 CURRICULUM 2022`}
                              wordOptions={[
                                 {
                                    ClassToAdd: "slider-words",
                                    PerWord: true,
                                 },
                              ]}
                           />
                        </span>
                        <span className="container__slider-item">
                           <WrappingLetters
                              word={`CURRICULUM 2022 CURRICULUM 2022 CURRICULUM 2022 CURRICULUM 2022 CURRICULUM 2022`}
                              wordOptions={[
                                 {
                                    ClassToAdd: "slider-words",
                                    PerWord: true,
                                 },
                              ]}
                           />
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div
            className={`${styles.container__content} ${styles["container--skills__qualities"]}`}
         >
            <h2 className={styles.title__content}>Skills & Qualities</h2>
            <div className={styles["skills__content"]}>
               {/* 
                     experienced - orange
                     advanced - blue
                     average - green
                     beginner - gray
                  */}
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
