import React, { useEffect, useLayoutEffect } from "react";

import { HomeContainer } from "../../containers/home";
import { ProjectsContainer } from "../../containers/projects";
import { LestTalkContainer } from "../../containers/lestTalk";
import { HeadComponent } from "Src/components/Head.next";
// import { AboutMeContainer } from "../../containers/aboutMe";

export function HomePage({ chagePath, setLoader }) {
  // A

  chagePath("home");

  useLayoutEffect(() => {
    setLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeadComponent
        title="Carlos && Ponce"
        description="Hello!, This is my portfolio of the year 2022"
      />
      <HomeContainer />
      <ProjectsContainer />
      <LestTalkContainer />
    </>
  );
}
