import React from "react";

import Wl from "wrapping-letters-react";

import styles from "Src/styles/cvStyles/home.module.sass";

export function ButtonsMap({ handleClickChangePage, refArray, pageNames, pageLinks }) {
   const arrImg = [
      'https://i.ibb.co/b56T388/Orianna-full-body.jpg',
      'https://i.ibb.co/2Zcw0X4/flor.jpg',
      'https://i.ibb.co/X5Wg7S5/kda.jpg',
      'https://i.ibb.co/k95B6Mm/Ahri-de-perfil.jpg'
   ]

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

   const handleMouseMove = (e) => {
      console.log('X', e.movementX, 'Y', e.movementY)
   } 

   return pageNames.map((pageName, index) => {
      return (
         <button
            ref={refArray[index]}
            key={index}
            className={styles["links--link"]}
            onClick={() => handleClickChangePage(pageLinks[index])}
            onMouseMove={(e) => handleMouseMove(e)}
         >
            <div className={styles['links--container__image']}>
               <img src={arrImg[index]} alt="" />
            </div>
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
