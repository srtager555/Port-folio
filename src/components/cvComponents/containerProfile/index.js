import React from "react";

import WrappingLetters from "wrapping-letters-react";

import stylesCV from "Styles/cvStyles/cv.module.scss";
import styles from "Styles/cvStyles/container--profile.module.scss";

export function ContainerProfile() {
   const [year, setYear] = React.useState(new Date().getFullYear());

   const IMG__PROFILE =
      "https://i.ibb.co/8KCs9Mw/AEE83958-944-D-4587-83-F2-993-F55-FE25-EF.jpg";

   return (
      <div
         className={`${stylesCV.container__content} ${styles["container--info"]}`}
      >
         <div
            className={`${stylesCV.container__content} ${styles["container--info__profile"]}`}
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
                     {/* Soy un joven Frontend developer con experiencia en React
                     con sus frameworks y librerias. Comodo trabajando en
                     equipo, trayendo ideas a la realidad con soluciones
                     practicas y creatividas. */}
                     I am a young Frontend developer with experience in React
                     with its frameworks and libraries. comfortable working in
                     team, bringing ideas to reality with practical and creative
                     solutions.
                  </p>
                  <br />
                  <p>
                     {/* Busco un puesto como enmaquetador del front-end en react
                     como un lider o comepañero de trabajo. */}
                     I am looking for a position as a front-end developer at
                     react as a lead or co-worker.
                  </p>
                  <br />
                  <p>
                     {/* Tengo una base de {`${year - 2019}`} años en desarrollo
                     Frontend, he vivido una gran cantidad de problemas que he
                     solucionado, ademas que recientemente he certificcado mis
                     concimientos ¿que seran unos cuantos problemas mas? */}
                     I have a base of {`${year - 2019}`} years in Frontend development, I have
                     experienced a large number of problems that I have solved,
                     and I have recently certified my knowledge, what will be a
                     few more problems?
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
