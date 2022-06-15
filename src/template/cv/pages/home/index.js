import React from "react";

// import Wl from "wrapping-letters-react";

import styles from "Src/styles/cvStyles/home.module.sass";

export function home({ handleClickChangePage, setLoader }) {
   // the navbar style need a new styles
   // and the button need a function to change the page
   // let wlprops = {
   //    SelectClass: {
   //       wordToSearch: "resume",
   //       classToAdd: styles.resume,
   //    },
   //    PerWord: true,
   // };

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
                     width="300"
                     src="https://ttager.netlify.app/img/oaAhri4.jpg"
                     alt=""
                  />
               </div>
            </div>
            <div className={styles["links--container"]}>
               <div className={styles["links--container__links"]}>
                  <button
                     onClick={() => handleClickChangePage("profile")}
                     className={styles["links--link"]}
                  >
                     Profile
                  </button>
                  <button
                     onClick={() => handleClickChangePage("experience")}
                     className={styles["links--link"]}
                  >
                     Experience
                  </button>
                  <button
                     onClick={() => handleClickChangePage("sq")}
                     className={styles["links--link"]}
                  >
                     S&Q
                  </button>
                  <button
                     onClick={() => handleClickChangePage("moreinfo")}
                     className={styles["links--link"]}
                  >
                     More Info
                  </button>
               </div>
               <div className={styles["links--container__pointer"]}>
                  <span>Go To</span>
               </div>
            </div>
         </main>
      </div>
   );
}
