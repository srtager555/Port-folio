import React from "react";

import styles from "Src/styles/cvStyles/navbar.module.sass";

export function menuButton({ pageName, handleChangePage, pagesName }) {
   let buttons = pagesName.map((element, index) => {
      return (
         <button
            inpage={`${pageName === element}`}
            key={`button-${index}`}
            onClick={() => handleChangePage(element)}
         >
            {element}
         </button>
      );
   });

   return (
      <>
         <button className={`${styles.menuBtnContent} ${styles.open}`}></button>
         <div className={`${styles.menuContent} ${styles.open}`}>
            <div className={styles["container--hero"]}>{buttons}
            </div>
         </div>
      </>
   );
}
