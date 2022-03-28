import React, { useState, useEffect, useLayoutEffect } from "react";

import "../../styles/LoadScreen.css";

export function LoadScreen({ loaded, inHome }) {
   const [loadEnded, setLoadEnded] = useState(false);
   const [arrClassAnimeCont, setArrClassAnimeCont] = useState([]);
   const [arrClassRoutes, setArrClassRoutes] = useState([]);
   const [arrClassAnimExit, setArrClassAnimExit] = useState([]);

   function handleLoadEnd() {
      setArrClassAnimExit(["loader--placeholder--loaderEnded"])
      setTimeout(() => {
         setArrClassAnimeCont(["loader--exit"]); // loader--exit
         setTimeout(() => {
            setArrClassAnimeCont([""]); // ""
            setArrClassAnimExit([""]); // ""
         }, 2100);
      }, 1000);
   }

   useEffect(() => {
      if (inHome) setArrClassRoutes(["home--style"]);
      else setArrClassRoutes([""]);
      console.log(inHome);
      console.log(arrClassRoutes);
   }, [inHome]);

   useLayoutEffect(() => {
      setArrClassAnimeCont(["loading"]);
   }, [loaded]);

   useEffect(() => {
      if (loaded) {
         handleLoadEnd();
      }
   }, [loaded]);

   return (
      <div
         className={`container loader ${arrClassAnimeCont} ${arrClassRoutes}`}
      >
         <div className={`container loader--background`}></div>
         <div className={`loader--successText ${arrClassAnimExit}`}>
            <span>Loaded</span>
         </div>
         <div className={`container loader--placeholder ${arrClassAnimExit}`}>
            <div className="loader--placeholder--innerLetter">
               <span>&&&&&&&&&&</span>
            </div>
            <div className="loader--placeholder--innerLetter">
               <span>&&&&&&&&&&</span>
            </div>
         </div>

         <div className="loader--randomPhrase">
            <span>A random phrase Xd, its a good idea...</span>
         </div>
      </div>
   );
}
