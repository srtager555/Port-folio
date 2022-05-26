import React, { useState, useEffect } from "react";

export function navbar({ pageName, setPageName, pagesName }) {
   const [buttons, setButtons] = useState([]);
   const pageIndex = pagesName.indexOf(pageName);

   function buttonComponent(text) {
      return <button>{text}</button>;
   }

   useEffect(() => {
      if (pageIndex === 0) {
         setButtons([
            buttonComponent(pagesName[pagesName.length - 1]),
            buttonComponent(pagesName[pageIndex + 1]),
         ]);
      } else if (pageIndex === pagesName.length - 1) {
         setButtons([
            buttonComponent(pagesName[pageIndex - 1]),
            buttonComponent(pagesName[0]),
         ]);
      } else {
         setButtons([
            buttonComponent(pagesName[pageIndex - 1]),
            buttonComponent(pagesName[pageIndex + 1]),
         ]);
      }
   }, [pageIndex]);

   return (
      <>
         <button>{pagesName[pageIndex - 1]}</button>
         <button>{pagesName[pageIndex + 1]}</button>
      </>
   );
}
