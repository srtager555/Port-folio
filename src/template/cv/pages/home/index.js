import React, { useRef, useEffect } from "react";

// import Wl from "wrapping-letters-react";

import styles from "Src/styles/cvStyles/home.module.sass";

export function home({ handleClickChangePage, setLoader }) {
   // const cursorEffect = useRef(null);

   const pageNames = [ "profile", "sq", "experience", "more Info"];
   const btnProps = {
      className: styles["links--link"],
      onClick: () => handleClickChangePage("profile"),
   };
   

   return (
      <div className={styles.home}>
         <div className={styles.bgLetters}>
            <span className={styles.letter}>&&&&&&&&&&</span>
            <span className={styles.letter}>&&&&&&&&&&</span>
            <span className={styles.letter}>&&&&&&&&&&</span>
         </div>
         <main className={styles[`main--container`]}>
            <div className={styles[`introduction--container`]}>
               <div className={styles[`introduction--text`]}>
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s
                  </p>
                  <img
                     // here turn off the load screen.
                     onLoad={() => setLoader(true)}
                     width="300"
                     src="https://ttager.netlify.app/img/oaAhri4.jpg"
                     alt=""
                  />
               </div>
            </div>
            <div className={styles["links--container"]}>
               <div className={styles["links--container__links"]}>
                  {pageNames.map((pageName, index) => {
                     return (
                        <button key={index} {...btnProps}>
                           {pageName}
                        </button>
                     );
                  })}
               </div>
               <div className={styles["links--container__pointer"]}>
                  <span>Go To</span>
               </div>
            </div>
         </main>
      </div>
   );
}
