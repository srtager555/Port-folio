import React from "react";

import styles from "Src/styles/cvStyles/home.module.sass";

export function InteractiveContent({ setLoader }) {
   return (
      <div className={styles["introduction--container"]}>
         <div className={styles["introduction--container__text"]}>
            <p>Hello there! Wellcome to my 2022 resume, hope you enjoy it!.</p>
         </div>
         <div className={styles["introduction--container__description"]}>
            <p>Aqui se resumira que es cada section uwuw</p>
         </div>

         <div className={styles["introduction--container__aboutMe"]}></div>
         <div className={styles["introduction--container__image"]}>
            <img
               // here turn off the load screen.
               onLoad={() => setLoader(true)}
               width="300"
               src="https://ttager.netlify.app/img/oaAhri4.jpg"
               alt=""
            />
         </div>
      </div>
   );
}
