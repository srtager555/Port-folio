import React, { useEffect, useRef } from "react";

import Wl from "wrapping-letters-react";

import styles from "Src/styles/cvStyles/home.module.sass";

export function ButtonsMap({
   handleClickChangePage,
   refArray,
   pageNames,
   pageLinks,
}) {
   // This array has the images url
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

   // handle events
   
   // When this function run, the image will follow the cursor 
   const handleMouseMove = (e, index) => {
      // first declare the targets
      const targetParent = refArray[index].current;
      const target = refArray[index].current.children[0];

      let positionY = e.clientY - targetParent.getBoundingClientRect().y;
      let positionX = e.clientX - targetParent.getBoundingClientRect().x;

      handleIsImageMove(target, e.movementX, e.movementY)

      // If the image container not having the class, here will add
      if (!target.className.includes(` ${styles["show--image"]}`))
      target.className += ` ${styles["show--image"]}`;
      
      // and here the code will add the new position of the image
      target.style.top = `${positionY}px`;
      target.style.left = `${positionX}px`;
   };
   
   function handleIsImageMove(target, movementX, movementY) {
      let imgHeight = window.getComputedStyle(target.children[0]).height
      const container = target.offsetParent.children[0]
      let containerHeight = window.getComputedStyle(container).height;

      if(imgHeight != containerHeight) {
         container.style.height = imgHeight
      }

      clearTimeout(positionTo0)
      
      target.children[0].style.transform = `translate(${movementX * 2}px, ${movementY * 4}px)`
      
      let positionTo0 = setTimeout(() => {
         target.children[0].style.transform = `translate(${movementX * 0}px, ${movementY * 0}px)`
      }, 200)
   }

   // when this function run will add the oppacity class
   const handleMouseEnter = (e, index) => {
      // It is important to run this function, because sometimes the image 
      // appears in its last position, when the function is executed before 
      // adding the opacity class, it will update the position.
      handleMouseMove(e, index);
      
      const target = refArray[index].current.children[0];
      
      // If the image container not having the class, here will add
      if (!target.className.includes(` ${styles["show--image"]}`))
         target.className += ` ${styles["show--image"]}`;
   };

   // Is simple, when the cursor leave the element, this function
   // remove the opacity class
   const handleMouseLeave = (index) => {
      const target = refArray[index].current.children[0];
      const a = target.className.replace(` ${styles["show--image"]}`, "");

      target.className = a;
   };

   useEffect(() => {
      
      // here add each eventListener
      refArray.forEach((element, index) => {
         const child = element.current.children[1]
         
         child.addEventListener("mousemove", (e) =>
         handleMouseMove(e, index)
         );
         child.addEventListener("mouseenter", (e) =>
         handleMouseEnter(e, index)
         );
         child.addEventListener("mouseleave", () =>
         handleMouseLeave(index)
         );
      });
      
      // With its clean up
      return () =>
      refArray.forEach((element, index) => {
            const child = element.current.children[1]

            child.removeEventListener("mousemove", (e) =>
               handleMouseMove(e, index)
            );
            child.removeEventListener("mouseenter", (e) =>
               handleMouseEnter(e, index)
            );
            child.removeEventListener("mouseleave", () =>
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
