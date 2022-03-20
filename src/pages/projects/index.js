import React, { useEffect, useRef, useState } from "react";
import WrappingLetters from "wrapping-letters-react";
import { useParams } from "react-router-dom";

import { ProjectsElementList } from "../../contexts/projectsContexts";
import { ImageProcess } from "../../components/projectImage";
import { NextPost } from "../../components/nextPost";
import { HeaderProjects } from "../../components/headerProjects";

import "../../styles/ProjectPage.css";

export function ProjectPage({ handleResetScroll }) {
   const containerContentRef = useRef(null);

   const { id } = useParams();
   const project = ProjectsElementList.getProjectById(id);

   const [containerContentSize, setContainerContetSize] = useState(0)

   if (!project) {
      return <div>404</div>;
   }

   const nextPostIndex = ProjectsElementList.getNextProjectAvailableById(id);

   function handleContainerSize() {
      setContainerContetSize(containerContentRef.current.offsetWidth) 
   }

   useEffect(() => {
      handleResetScroll();
   }, [id]);

   useEffect(() => {
      handleContainerSize()
      window.addEventListener("resize", handleContainerSize)
      return () => window.removeEventListener("resize", handleContainerSize)
   }, []);

   return (
      <div className="container project">
         <div className="container__scrollProgress">
            <div className="container__scrollProgress__bar"></div>
            <div className="container__scrollProgress__smallBar"></div>
         </div>
         <HeaderProjects project={project} />
         <div ref={containerContentRef} className="project__content">
            <ImageProcess containerWitdh={containerContentSize} project={project} />
         </div>
         <NextPost data={nextPostIndex} />
      </div>
   );
}
