import React, { useRef, useState, useEffect } from "react";

import Wl from "wrapping-letters-react";

import upLetter from "../../../../animations/defaultAnimation/upLetter";
import downLetter from "../../../../animations/defaultAnimation/downLetter";

import styles from "Src/styles/cvStyles/home.module.sass";

export function home({ handleClickChangePage, setLoader }) {
   const [hoverLink, setHoverLink] = useState(false);
   const [cursorPosition, setCursorPosition] = useState({
      top: 0,
   });

   const a = useRef(null);
   const profileRef = useRef(null);
   const skillsRef = useRef(null);
   const experienceRef = useRef(null);
   const moreInfoRef = useRef(null);

   let refArray = [profileRef, skillsRef, experienceRef, moreInfoRef];

   const pageNames = ["profile", "sq", "experience", "more Info"];
   const btnProps = {
      className: styles["links--link"],
      onClick: () => handleClickChangePage("profile"),
   };

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

   function handleLinkHover(e) {
      setCursorPosition({
         top: e.target.getBoundingClientRect().top + e.target.offsetHeight / 2
      });
      setHoverLink(true);
   }
   function handleMouseEnter(index) {
      const element = refArray[index].current.children[0].children;
      upLetter(element);
   }
   function handleMouseLeave(index) {
      const element = refArray[index].current.children[0].children;
      setHoverLink(false);
      downLetter(element);
   }

   // ISSUE
   // when the handleLinkHover function is called,
   // everything is fine, but when the cursor leaves the element,
   // the animation is canceled by starting the 
   // animation of the next element.

   useEffect(() => {
      refArray.forEach((element, index) => {
         element.current.addEventListener("mouseenter", (e) => {
            // handleLinkHover(e);
            handleMouseEnter(index)
         });
         element.current.addEventListener("mouseleave", () => handleMouseLeave(index));
      });
      
      return () => {
         refArray.forEach(element => {
            element.current.addEventListener("mouseenter", (e) => {
               // handleLinkHover(e);
               handleMouseEnter(index)
            });
            element.current.removeEventListener("mouseleave", () => handleMouseLeave(index));
         });
      }
   }, [])

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
                     // here turn off the load screen.
                     onLoad={() => setLoader(true)}
                     width="300"
                     src="https://ttager.netlify.app/img/oaAhri4.jpg"
                     alt=""
                  />
               </div>
            </div>
            <div className={styles["links--container"]}>
               <div className={styles["links--container__links"]}>
                  {pageNames.map((pageName, index) => {
                     return (
                        <button
                           ref={refArray[index]}
                           key={index}
                           {...btnProps}
                        >
                           <div
                              className={styles["links--container__text"]}
                           >
                              <span className={styles["links--link__letter"]}>
                                 <WlComponent pageName={pageName} />
                              </span>
                              <span className={styles["links--link__letter"]}>
                                 <WlComponent pageName={pageName} />
                              </span>
                           </div>
                        </button>
                     );
                  })}
               </div>
               <div
                  className={`${styles["links--container__pointer"]}${
                     hoverLink
                        ? " " + styles["links--container__pointer--hover"]
                        : ""
                  }`}
               >
                  <span
                     className={styles["links--word__pointer"]}
                     style={cursorPosition}
                  >
                     Go To
                  </span>
               </div>
            </div>
         </main>
      </div>
   );
}
