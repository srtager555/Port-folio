import React from "react";

import WrappingLetters from "wrapping-letters-react";

import styles from "Styles/cv.module.scss";

export function ContainerProfile() {
   const IMG__PROFILE =
      "https://i.ibb.co/8KCs9Mw/AEE83958-944-D-4587-83-F2-993-F55-FE25-EF.jpg";

   return (
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
                        <a href="https://github.com/srtager555" target="_blank">
                           GitHub
                        </a>
                     </div>
                  </div>
                  <p>
                     I am a Frontend developer with a background in multimedia
                     and web development. I have a b passion for creating and
                     developing web applications.
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
   );
}
