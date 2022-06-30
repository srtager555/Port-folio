import React, { useState, useRef, useEffect } from "react";

import { ButtonsMap } from "./components/ButtonsMap";
import { Background } from "./components/Background";
import { InteractiveContent } from "./components/InteractiveContent";
import upLetter from "../../../../animations/defaultAnimation/upLetter";
import downLetter from "../../../../animations/defaultAnimation/downLetter";

import styles from "Src/styles/cvStyles/home.module.sass";

export function home({ handleClickChangePage, setLoader }) {
   const [whatButton, setWhatButton] = useState('')

   // here declare the REF of the elements

   const goToRef = useRef(null);
   const goToContainerRef = useRef(null);
   const profileRef = useRef(null);
   const skillsRef = useRef(null);
   const experienceRef = useRef(null);
   const moreInfoRef = useRef(null);

   // this array is for adding events for each element
   let refArray = [profileRef, skillsRef, experienceRef, moreInfoRef];

   // Information for the routing
   const pageNames = ["profile", "sq", "experience", "more Info"];
   const pageLinks = ["profile", "sq", "experience", "moreInfo"];

   // handleEnvets

   // when the mouse is over of a link
   // the effect of the cursor will change position
   // and its opacity becomes to 1
   function handleLinkHover(e) {
      goToRef.current.style.top = `${
         e.target.getBoundingClientRect().top + e.target.offsetHeight / 2
      }px`;

      goToContainerRef.current.className += ` ${styles["links--container__pointer--hover"]}`;
   }

   // When the mouse enters the target,
   // it will pick up each target child and
   // send it to an animation function.
   function handleMouseEnter(e, index) {
      const element = refArray[index].current.children[0].children;
      upLetter(element, () => handleLinkHover(e));
   }

   // here return the opacity of the cursor effect to 0
   // and run the leave animation funtion
   function handleMouseLeave(index) {
      const element = refArray[index].current.children[0].children;

      downLetter(element, () => {
         const a = goToContainerRef.current.className.replace(
            ` ${styles["links--container__pointer--hover"]}`,
            ""
         );
         goToContainerRef.current.className = a;
      });
   }

   // here add listeners for the handle events
   useEffect(() => {
      // here it'll add to each element 2 listeners
      refArray.forEach((element, index) => {
         element.current.addEventListener("mouseenter", (e) =>
            handleMouseEnter(e, index)
         );
         element.current.addEventListener("mouseleave", () =>
            handleMouseLeave(index)
         );
      });

      // clean up uwu
      return () => {
         // here remove each listener
         refArray.forEach((element) => {
            element.current.addEventListener("mouseenter", (e) =>
               handleMouseEnter(index)
            );
            element.current.removeEventListener("mouseleave", () =>
               handleMouseLeave(index)
            );
         });
      };
   }, []);

   return (
      <div className={styles.home}>
         <Background />
         <main className={styles[`main--container`]}>
            <InteractiveContent setLoader={setLoader} />
            <div className={styles["links--container"]}>
               <div className={styles["links--container__links"]}>
                  <ButtonsMap
                     handleClickChangePage={handleClickChangePage}
                     refArray={refArray}
                     pageNames={pageNames}
                     pageLinks={pageLinks}
                  />
               </div>
               <div
                  ref={goToContainerRef}
                  className={`${styles["links--container__pointer"]}`}
               >
                  <span
                     ref={goToRef}
                     className={styles["links--word__pointer"]}
                  >
                     Go To
                  </span>
               </div>
            </div>
         </main>
      </div>
   );
}
