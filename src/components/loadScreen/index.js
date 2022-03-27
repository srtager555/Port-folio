import React, { useState, useEffect, useLayoutEffect } from "react";

import "../../styles/LoadScreen.css";

export function LoadScreen({ loaded, inHome  }) {
   const [loadEnded, setLoadEnded] = useState(false);
   const [arrClassAnimeCont, setArrClassAnimeCont] = useState([]);

   function handleLoadEnd() {
      setTimeout(() => {
         setArrClassAnimeCont(["loader--exit"])
         setTimeout(() => {
            setArrClassAnimeCont([""])
         }, 2100)
      }, 1000)
   } 

   useLayoutEffect(() => {
      setArrClassAnimeCont(["loading"]);
   }, [loaded]);

   useEffect(() => {
      if (loaded) {
         handleLoadEnd()
      }
   }, [loaded]);

   return (
      <div className={`container loader ${arrClassAnimeCont}`}>
         <div className={`loader--background ${inHome ? "homeColor" : ""}`}></div>
         <div className={`loader--successText `}>
            <span>Loaded</span>
         </div>
         <div className={`loader--placeholder `}>
            <div className="loader--placeholder--innerLetter">
               <span>&&&&&&&&&&</span>
            </div>
            <div className="loader--placeholder--innerLetter">
               <span>&&&&&&&&&&</span>
            </div>
         </div>

         <div className="loader--randomPhrase">
            <span>{loaded ? "Loaded" : "Loading..."}</span>
         </div>
      </div>
   );
}
