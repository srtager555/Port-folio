import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { NotMatch } from "../404";
import { ProjectsElementList } from "../../contexts/projectsContexts";
import { ImageProcess } from "@components/projectImage";
import { NextPost } from "@components/nextPost";
import { HeaderProjects } from "@components/headerProjects";
import { HeadComponent } from "@components/Head.next";
import { Links } from "@components/links";
import { ScrollProgress } from "@components/ScrollProgress";

import "../../styles/ProjectPage.css";

export function ProjectPage({ handleResetScroll, setLoader, chagePath }) {
  chagePath("");

  function handleContainerSize() {
    setContainerContetSize(containerContentRef.current.offsetWidth);
  }

  useLayoutEffect(() => {
    handleContainerSize();
  }, []);

  useLayoutEffect(() => {
    setLoader(false);
    handleResetScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    window.addEventListener("resize", handleContainerSize);
    return () => window.removeEventListener("resize", handleContainerSize);
  }, []);

  const containerContentRef = useRef(null);

  const { id } = useRouter().query;
  const project = ProjectsElementList.getProjectById(id);

  const [containerContentSize, setContainerContetSize] = useState(0);

  if (!project) {
    return <NotMatch chagePath={chagePath} setLoader={setLoader} />;
  }

  const nextPostIndex = ProjectsElementList.getNextProjectAvailableById(id);

  return (
    <>
      <HeadComponent
        title={project.Title}
        description={project.Description}
        image={project.PrincipalImageDesktop}
      />
      <div className="container project">
        <ScrollProgress />
        <HeaderProjects project={project} />
        <div ref={containerContentRef} className="project__content">
          <ImageProcess
            containerWitdh={containerContentSize}
            project={project}
            setLoader={setLoader}
          />
          <Links project={project.Links} />
        </div>
        <NextPost data={nextPostIndex} setLoader={setLoader} />
      </div>
    </>
  );
}
