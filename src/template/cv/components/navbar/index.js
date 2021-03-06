import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { menuButton as MenuButton } from "./menuButton";

import styles from "Src/styles/cvStyles/navbar.module.sass";

export function navbar({ pageName, setPageName, pagesName }) {
   const [showButton, setShowButton] = useState(true);
   const [buttons, setButtons] = useState([]);
   const pageIndex = pagesName.indexOf(pageName);

   // const meuButtonProps = {
   //    pageName,
   //    handleChangePage,
   //    pagesName,
   // };

   function HandleRouteName(text) {
      let path = text
      if(text === 's&q') path = 'sq'

      return path
   }

   function linkComponent(text, index) {
      return <Link to={`/cv/${HandleRouteName(text)}`}>{text}</Link>;
   }

   useEffect(() => {
      //here change the name of a string on the arr
      let a = pagesName.find(e => e[1] === "sq");
      a[1] = 's&q'

   }, [pageName]);

   useEffect(() => {
      //here change the sections to go, depending on the pageName
      let link = (prop) => linkComponent(pagesName[prop][1]);
      
      if (pageIndex === 0) {
         setButtons([link(pagesName.length - 1), link(pageIndex + 1)]);
      } else if (pageIndex === pagesName.length - 1) {
         setButtons([link(pageIndex - 1), link(0)]);
      } else {
         setButtons([link(pageIndex - 1), link(pageIndex + 1)]);
      }
   }, [pageIndex]);

   return (
      <>
         {/* <MenuButton {...meuButtonProps} /> */}
         <div className={styles.container}>
            {/* here only print the arr of links */}
            {showButton &&
               buttons.map((element, index) => (
                  <span key={`button-${index}`}>{element}</span>
               ))}
         </div>
      </>
   );
}
