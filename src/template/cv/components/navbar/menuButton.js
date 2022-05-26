import React from "react";

export function menuButton({ pageName, handleChangePage, pagesName }) {
   let buttons = pagesName.map((element, index) => {
      return (
         <button
            inpage={`${pageName === element}`}
            key={`button-${index}`}
            onClick={() => handleChangePage(element)}
         >
            {element}
         </button>
      );
   });

   return (
      <>
         <div>
             {buttons}
         </div>
      </>
   );
}
