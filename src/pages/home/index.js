import React, { useEffect, useLayoutEffect } from "react";

import { HomeContainer } from "../../containers/home";
import { ProjectsContainer } from "../../containers/projects";
import { LestTalkContainer } from "../../containers/lestTalk";
// import { AboutMeContainer } from "../../containers/aboutMe";

export function HomePage({ setInHome, setLoader }) {
   // A

   useLayoutEffect(() => {
      setLoader(false);
      setInHome(true);
   }, []);

   useEffect(() => {
      setTimeout(() => {
         setLoader(true);
         console.log("b");
      }, 1000);
   }, []);

   return (
      <>
         <HomeContainer />
         <ProjectsContainer />
         <LestTalkContainer />
      </>
   );
}
