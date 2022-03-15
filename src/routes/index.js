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
   function handleRouteChange() {
      window.scrollTo(0, 0);
   }

   useEffect(() => {
      handleRouteChange();
   })

   return (
      <>
         <Navbar />
         <Background />
         <div className="container-content">
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route
                  path="/:id"
                  element={
                     <ProjectPage handleRouteChange={handleRouteChange} />
                  }
               />
               <Route path="*" element={<NotMatch />} />
            </Routes>
         </div>
      </>
   );
}
