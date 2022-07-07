import React, { useEffect, useRef } from "react";

import Wl from "wrapping-letters-react";

import styles from "Src/styles/cvStyles/home.module.sass";

export function ButtonsMap({
   handleClickChangePage,
   refArray,
   pageNames,
   pageLinks,
}) {
   const arrImg = [
      "https://i.ibb.co/b56T388/Orianna-full-body.jpg",
      "https://i.ibb.co/2Zcw0X4/flor.jpg",
      "https://i.ibb.co/X5Wg7S5/kda.jpg",
      "https://i.ibb.co/k95B6Mm/Ahri-de-perfil.jpg",
   ];

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

   const handleMouseMove = (e, index) => {
      const targetParent = refArray[index].current;
      const target = refArray[index].current.children[0];

      let positionY = e.clientY - targetParent.getBoundingClientRect().y;
      let positionX = e.clientX - targetParent.getBoundingClientRect().x;

      if (!target.className.includes(` ${styles["show--image"]}`))
         target.className += ` ${styles["show--image"]}`;

      if (positionY > -1 && positionX > -1) {
         target.style.top = `${positionY}px`;
         target.style.left = `${positionX}px`;
      } else handleMouseLeave(index);
   };

   const handleMouseEnter = (e, index) => {
      handleMouseMove(e, index);

      const target = refArray[index].current.children[0];

      if (!target.className.includes(` ${styles["show--image"]}`))
         target.className += ` ${styles["show--image"]}`;
      // target.className += ` ${styles["show--image"]}`;
      // console.log(target.className)
   };

   const handleMouseLeave = (index) => {
      const target = refArray[index].current.children[0];
      const a = target.className.replace(` ${styles["show--image"]}`, "");

      target.className = a;
   };

   useEffect(() => {
      refArray.forEach((element, index) => {
         element.current.addEventListener("mousemove", (e) =>
            handleMouseMove(e, index)
         );
         element.current.addEventListener("mouseenter", (e) =>
            handleMouseEnter(e, index)
         );
         element.current.addEventListener("mouseleave", () =>
            handleMouseLeave(index)
         );
      });

      return () =>
         refArray.forEach((element, index) => {
            element.current.removeEventListener("mousemove", (e) =>
               handleMouseMove(e, index)
            );
            element.current.removeEventListener("mouseenter", (e) =>
               handleMouseEnter(e, index)
            );
            element.current.removeEventListener("mouseleave", () =>
               handleMouseLeave(index)
            );
         });
   }, []);

   return pageNames.map((pageName, index) => {
      return (
         <button
            ref={refArray[index]}
            key={index}
            className={styles["links--link"]}
            onClick={() => handleClickChangePage(pageLinks[index])}
         >
            <div className={styles["links--container__image"]}>
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
