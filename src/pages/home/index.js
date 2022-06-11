import React, { useEffect, useLayoutEffect } from "react";

import { HomeContainer } from "../../containers/home";
import { ProjectsContainer } from "../../containers/projects";
import { LestTalkContainer } from "../../containers/lestTalk";
import { HelmetComponent } from "../../components/Helmet";
// import { AboutMeContainer } from "../../containers/aboutMe";

export function HomePage({ chagePath, setLoader }) {
   // A

   chagePath('home');

   useLayoutEffect(() => {
      setLoader(false);
   }, []);

   useEffect(() => {
      setTimeout(() => {
         setLoader(true);
      }, 1000);
   }, []);

   return (
      <>
         <HelmetComponent title="Carlos && Ponce"  description="Hello!, This is my portfolio of the year 2022" />
         <HomeContainer />
         <ProjectsContainer />
         <LestTalkContainer />
      </>
   );
}
