import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/home";
import { ProjectPage } from "../pages/projects";

import { Navbar } from "../components/navbar";
import { Background } from "../components/background";
import { LoadScreen } from "../components/loadScreen";

import "../styles/OpacityContainer.css"

function NotMatch() {
   return (
      <div>
         <h1>404</h1>
      </div>
   );
}

export function Router() {
   const [loader, setLoader] = useState(false);
   const [inHome, setInHome] = useState(false);

   function handleResetScroll() {
      window.scrollTo(0, 0);
   }

   // useEffect(() => {
   //    setLoader(true);
   // }, []);
   
   //This guy reset any scroll when you change the route(The content of the page)
   useEffect(() => {
      //This guy probaly is not the best way to do this, but it works
      handleResetScroll();
      console.log(inHome)
   });

   return (
      <>
         <LoadScreen loaded={loader} inHome={inHome} />
         <Background />
         <div className={`opacity-container ${loader ? "active" : ""}`}>
            <Navbar handleResetScroll={handleResetScroll} inHome={inHome} />
            <div className="container-content">
               <Routes>
                  <Route path="/" element={<HomePage setInHome={setInHome} setLoader={setLoader} />} />
                  <Route
                     path="/p/:id"
                     element={
                        <ProjectPage
                           handleResetScroll={handleResetScroll}
                           setLoader={setLoader}
                           setInHome={setInHome}
                        />
                     }
                  />
                  <Route path="*" element={<NotMatch />} />
               </Routes>
            </div>
         </div>
      </>
   );
}