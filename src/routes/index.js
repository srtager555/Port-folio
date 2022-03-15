import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/home";
import { ProjectPage } from "../pages/projects";

import { Navbar } from "../components/navbar";
import { Background } from "../components/background";

function NotMatch() {
   return (
      <div>
         <h1>404</h1>
      </div>
   );
}

export function Router() {
   function handleResetScroll() {
      window.scrollTo(0, 0);
   }

   useEffect(() => {
      handleRouteChange();
   })

   return (
      <>
         <Navbar handleRouteChange={handleRouteChange} />
         <Background />
         <div className="container-content">
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route
                  path="/p/:id"
                  element={
                     <ProjectPage handleResetScroll={handleResetScroll} />
                  }
               />
               <Route path="*" element={<NotMatch />} />
            </Routes>
         </div>
      </>
   );
}
