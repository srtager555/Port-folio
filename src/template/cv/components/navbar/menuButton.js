import React from "react";

// import styles from '../../../../styles/cvStyles/menuButton.module.sass';

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
         <div></div>
         <div>{buttons}</div>
      </>
   );
}
