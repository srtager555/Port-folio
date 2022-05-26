import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/home";
import { ProjectPage } from "../pages/projects";
import { NotMatch } from "../pages/NotMatch";
import { CV } from "../pages/cv";
import { cvpdf as Cvpdf } from "../pages/cvpdf";

import { Navbar } from "../components/navbar";
import { Background } from "../components/background";
import { LoadScreen } from "../components/loadScreen";
import { useInPath } from "../hooks/useInPath";

import "../styles/OpacityContainer.css";

export function Router() {
   const [loader, setLoader] = useState(false);
   const [inPath, setInPath] = useState('');
   
   const props = {
      setLoader,
      chagePath: () => HandleChangePath(),
   }

   function handleResetScroll() {
      window.scrollTo(0, 0);
   }

   function HandleChangePath() {
      useInPath(setInPath);
    }

   // useEffect(() => {
   //    setLoader(true);
   // }, []);

   //This guy reset any scroll when you change the route(The content of the page)
   useEffect(() => {
      //This guy probaly is not the best way to do this, but it works
      handleResetScroll();
      // setinCV(false);
   });

   return (
      <>
         <LoadScreen loaded={loader} inPath={inPath} />
         <Background inPath={inPath} />
         <div className={`opacity-container ${loader ? "active" : ""}`}>
            <Navbar inPath={inPath} handleResetScroll={handleResetScroll} />
            <div className="container-content">
               <Routes>
                  <Route
                     path="/"
                     element={
                        <HomePage {...props} />
                     }
                  />
                  <Route
                     path="/cv"
                     element={<CV {...props} />}
                  />
                  <Route
                     path="/cvpdf"
                     element={<Cvpdf {...props} />}
                  />
                  <Route
                     path="/p/:id"
                     element={
                        <ProjectPage
                           handleResetScroll={handleResetScroll}
                           {...props}
                        />
                     }
                  />
                  <Route
                     path="*"
                     element={
                        <NotMatch {...props} />
                     }
                  />
               </Routes>
            </div>
         </div>
      </>
   );
}
