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
   function handleResetScroll() {
      window.scrollTo(0, 0);
   }

   useEffect(() => {
      setLoader(true);
   }, []);

   useEffect(() => {
      console.log("Loaded", loader);
      handleResetScroll();
   });

   return (
      <>
         <LoadScreen loaded={loader} />
         <Background />
         <div className={`opacity-container ${loader ? "active" : ""}`}>
            <Navbar handleResetScroll={handleResetScroll} />
            <div className="container-content">
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route
                     path="/p/:id"
                     element={
                        <ProjectPage
                           handleResetScroll={handleResetScroll}
                           setLoader={setLoader}
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