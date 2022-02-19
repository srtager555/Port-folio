import React from "react";

import { HomeContainer } from "../../containers/home";
import { ProjectsContainer } from "../../containers/projects";
import { LestTalkContainer } from "../../containers/lestTalk";
import { AboutMeContainer } from "../../containers/aboutMe";

export function HomePage({ homeRef, projectsRef, lestTalkRef }) {
    return (
        <>
            <HomeContainer l={homeRef} />
            <ProjectsContainer l={projectsRef} />
            <AboutMeContainer />
            <LestTalkContainer l={lestTalkRef} />
        </>
    );
}  
