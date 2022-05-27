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
         <button className={styles.menuBtnContent}></button>
         <div className={styles.menuContent}>{buttons}</div>
      </>
   );
}
