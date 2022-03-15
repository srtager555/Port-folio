import React, { useEffect, useState } from "react";
import "../../styles/Background.css";

export function Background() {
   const [backgroundClass, setBackgroundClass] = useState("");

   useEffect(() => {
      // XDXDXDXD
      setInterval(function() {
         if (window.location.pathname === "/") {
            setBackgroundClass("");
         } else {
            setBackgroundClass("background--project");
         }
      }, 1000)
   });

   return (
      <div
         className={`container container-background ${backgroundClass}`}
      ></div>
   );
}
