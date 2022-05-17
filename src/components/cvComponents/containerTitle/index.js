import React, { useEffect, useState } from "react";

import styles from "Styles/cv.module.scss";

export function ContainerTitle() {
   const [isMobile, setIsMobile] = useState(false);

   const handleIsMobile = () => {
      if (window.innerWidth > 510) {
         setIsMobile(false);
      } else {
         setIsMobile(true);
      }
   };
   useEffect(() => {
      handleIsMobile();
      window.addEventListener("resize", handleIsMobile);
      return () => {
         window.removeEventListener("resize", handleIsMobile);
      };
   }, []);
   return (
      <div
         className={`${styles.container__content}  ${styles["container--title"]}`}
      >
         {isMobile ? (
            <img
               src="https://i.ibb.co/YDnX5r8/mobile-home-image.jpg"
               alt="Hu Tao"
            />
         ) : (
            <img src="https://i.ibb.co/f8RVct5/home-image.jpg" alt="Hu Tao" />
         )}
         <h1>Frontend developer</h1>
         <span>Carlos Ponce</span>
      </div>
   );
}
