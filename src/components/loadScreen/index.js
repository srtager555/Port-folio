import React, { useState, useEffect } from "react";

import "../../styles/LoadScreen.css";

export function LoadScreen({ loaded }) {
   const [loadEnded, setLoadEnded] = useState(false);
   useEffect(() => {
      if (loaded) {
         setTimeout(() => {
            setLoadEnded(true);
         }, 1000);
      } else {
          setLoadEnded(false)
      }
   }, [loaded]);
   console.log(loaded, "b");
   return (
      <div className={`container loader ${loadEnded ? "" : "loading"}`}>
         <span>{loaded ? "Loaded" : "Loading..."}</span>
      </div>
   );
}
