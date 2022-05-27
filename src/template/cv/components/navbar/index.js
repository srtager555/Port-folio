import React, { useState, useEffect } from "react";

import { menuButton as MenuButton } from "./menuButton";

export function navbar({ pageName, setPageName, pagesName }) {
   const [showButton, setShowButton] = useState(false);
   const [buttons, setButtons] = useState([]);
   const pageIndex = pagesName.indexOf(pageName);

   const meuButtonProps = {
      pageName,
      handleChangePage,
      pagesName,
   };

   function handleChangePage(text) {
      setPageName(text);
   }

   function buttonComponent(text) {
      return <button onClick={() => handleChangePage(text)}>{text}</button>;
   }

   useEffect(() => {
      //here change the sections to go, depending on the pageName
      let btn = (prop) => buttonComponent(pagesName[prop]);
      if (pageIndex === 0) {
         setButtons([btn(pagesName.length - 1), btn(pageIndex + 1)]);
      } else if (pageIndex === pagesName.length - 1) {
         setButtons([btn(pageIndex - 1), btn(0)]);
      } else {
         setButtons([btn(pageIndex - 1), btn(pageIndex + 1)]);
      }
   }, [pageIndex]);

   useEffect(() => {
      setTimeout(() => {
         if (pageName === "home") setShowButton(false);
         else setShowButton(true);
      }, 1000);
   }, [pageName]);

   return (
      <>
         <MenuButton {...meuButtonProps} />
         {showButton && buttons.map((element, index) => (
            <span key={`button-${index}`}>{element}</span>
         ))}
      </>
   );
}
