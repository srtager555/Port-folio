import React, { useState } from "react";

import styles from "Src/styles/cvStyles/navbar.module.sass";

export function menuButton({ pageName, handleChangePage, pagesName }) {
   const [isOpen, setIsOpen] = useState(false);
   let conditional = isOpen? styles.open : '';

   function HandleOpenMenu() {
      setIsOpen(!isOpen);
   }

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
         <button onClick={HandleOpenMenu} className={`${styles.menuBtnContent} ${conditional}`}></button>
         <div className={`${styles.menuContent} ${conditional}`}>
            <div className={styles["container--hero"]}>{buttons}</div>
         </div>
      </>
   );
}
