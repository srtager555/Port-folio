import React, { useEffect, useState } from "react";
import "../../styles/Background.css";

export function Background({ inPath }) {
   const [backgroundClass, setBackgroundClass] = useState("");

   
   useEffect(() => {
      let conditions = inPath === '/' || inPath === '/cv' || inPath === '/cvpdf' || inPath === ''

      if (conditions) {
         setBackgroundClass("");
      } else {
         setBackgroundClass("background--project");
      }
   }, [inPath]);

   return (
      <div
         className={`container container-background ${backgroundClass}`}
      ></div>
   );
}
