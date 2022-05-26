import React, { useState, useEffect } from "react";

export function navbar({ pageName, setPageName, pagesName }) {
   const [buttons, setButtons] = useState([]);
   const pageIndex = pagesName.indexOf(pageName);

   function buttonComponent(text) {
      return <button>{text}</button>;
   }

   useEffect(() => {
      let btn = (prop) => buttonComponent(pagesName[prop]);
      if (pageIndex === 0) {
         setButtons([btn(pagesName.length - 1), btn(pageIndex + 1)]);
      } else if (pageIndex === pagesName.length - 1) {
         setButtons([btn(pageIndex - 1), btn(0)]);
      } else {
         setButtons([btn(pageIndex - 1), btn(pageIndex + 1)]);
      }
   }, [pageIndex]);

   return (
      <>
         {buttons.map((element, index) => (
            <span key={`button-${index}`}>{element}</span>
         ))}
      </>
   );
}
