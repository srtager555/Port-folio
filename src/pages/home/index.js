import React, { useEffect } from "react";

import { HomeContainer } from "../../containers/home";
import { ProjectsContainer } from "../../containers/projects";
import { LestTalkContainer } from "../../containers/lestTalk";
// import { AboutMeContainer } from "../../containers/aboutMe";

export function HomePage({ setInHome }) {
    useEffect(() => {
        setInHome(true);
    }, []);
   return (
      <>
         <HomeContainer />
         <ProjectsContainer />
         {/* <AboutMeContainer /> */}
         <LestTalkContainer />
      </>
   );
}
