import React from "react";

import { HomeContainer } from "../../containers/home";
import { ProjectsContainer } from "../../containers/projects";
import { LestTalkContainer } from "../../containers/lestTalk";
import { AboutMeContainer } from "../../containers/aboutMe";

export function HomePage() {
    return (
        <>
            <HomeContainer />
            <ProjectsContainer />
            <AboutMeContainer />
            <LestTalkContainer  />
        </>
    );
}  
