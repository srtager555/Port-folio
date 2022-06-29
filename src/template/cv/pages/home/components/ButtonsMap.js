import React from "react";

import Wl from "wrapping-letters-react";

import styles from "Src/styles/cvStyles/home.module.sass";

export function ButtonsMap({ refArray, pageNames, pageLinks }) {
   // Wrapping letter component for wrapp each letter in a <span />
   const WlComponent = (pageName) => (
      <Wl
         text={pageName.pageName}
         textOptions={[
            {
               ClassToAdd: styles["link--letter"],
            },
         ]}
      />
   );

   return pageNames.map((pageName, index) => {
      return (
         <button
            ref={refArray[index]}
            key={index}
            className={styles["links--link"]}
            onClick={() => handleClickChangePage(pageLinks[index])}
         >
            <div className={styles["links--container__text"]}>
               <span className={styles["links--link__letter"]}>
                  <WlComponent pageName={pageName} />
               </span>
               <span className={styles["links--link__letter"]}>
                  <WlComponent pageName={pageName} />
               </span>
            </div>
         </button>
      );
   });
}
