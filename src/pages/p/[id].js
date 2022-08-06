import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { ProjectsElementList } from "@contexts/projectsContexts";

import { NotMatch } from "../404";

import { ImageProcess } from "@components/projectImage";
import { NextPost } from "@components/nextPost";
import { HeaderProjects } from "@components/headerProjects";
import { HeadComponent } from "@components/Head.next";
import { Links } from "@components/links";
import { ScrollProgress } from "@components/ScrollProgress";

import styles from "@sass/projects/header.module.sass";
import contentStyles from "@sass/projects/content.module.sass";

export default function ProjectPage({
  // handleResetScroll,
  setLoader,
  chagePath,
}) {
  const router = useRouter();
  const containerContentRef = useRef(null);
  const [containerContentSize, setContainerContetSize] = useState(0);
  const { id } = router.query;
  const project = ProjectsElementList.getProjectById(id || "wrapping-letters");

  function handleContainerSize() {
    setContainerContetSize(containerContentRef.current.offsetWidth);
  }

  useLayoutEffect(() => {
    chagePath("");
    handleContainerSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    setLoader(false);
    // handleResetScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    window.addEventListener("resize", handleContainerSize);
    return () => window.removeEventListener("resize", handleContainerSize);
  }, []);

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
      <div className={`container ${styles.project}`}>
        <ScrollProgress />
        <HeaderProjects project={project} />
        <div ref={containerContentRef} className={contentStyles.content}>
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
