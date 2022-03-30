import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import { ProjectsElementList } from "../../contexts/projectsContexts";
import { ImageProcess } from "../../components/projectImage";
import { NextPost } from "../../components/nextPost";
import { HeaderProjects } from "../../components/headerProjects";
import { HelmetComponent } from "../../components/Helmet";
import { ScrollProgress } from "../../components/ScrollProgress";

import "../../styles/ProjectPage.css";

export function ProjectPage({ handleResetScroll, setLoader, setInHome }) {
   const containerContentRef = useRef(null);

   const { id } = useParams();
   const project = ProjectsElementList.getProjectById(id);

   const [containerContentSize, setContainerContetSize] = useState(0);

   if (!project) {
      return <div>404</div>;
   }

   const nextPostIndex = ProjectsElementList.getNextProjectAvailableById(id);

   function handleContainerSize() {
      setContainerContetSize(containerContentRef.current.offsetWidth);
   }

   useLayoutEffect(() => {
      handleContainerSize();
      setInHome(false);
   }, []);

   useLayoutEffect(() => {
      setLoader(false);
      handleResetScroll();
   }, [id]);

   useEffect(() => {
      window.addEventListener("resize", handleContainerSize);
      return () => window.removeEventListener("resize", handleContainerSize);
   }, []);

   return (
      <>
         <HelmetComponent title={project.Title}  description={project.Description} image={project.PrincipalImageDesktop} />
         <div className="container project">
            <ScrollProgress />
            <HeaderProjects project={project} />
            <div ref={containerContentRef} className="project__content">
               <ImageProcess
                  containerWitdh={containerContentSize}
                  project={project}
                  setLoader={setLoader}
               />
            </div>
            <NextPost data={nextPostIndex} setLoader={setLoader} />
         </div>
      </>
   );
}
