import React, { useEffect } from "react";
import WrappingLetters from "wrapping-letters-react";
import { useParams } from "react-router-dom";

import {
   ProjectsElementList,
   ImageWithText,
} from "../../contexts/projectsContexts";
import { ImageProcess } from "../../components/projectImage";

import "../../styles/ProjectPage.css";


export function ProjectPage({ handleResetScroll }) {
   const { id } = useParams();

   const project = ProjectsElementList.getProjectById(id);

   if (!project) {
      return <div>404</div>;
   }

   const nextPostIndex = ProjectsElementList.getNextProjectAvailableById(id);
   console.log(nextPostIndex)
   
   useEffect(() => {
      handleResetScroll();
   }, [id]);

   return (
      <div className="container project">
         <div className="container__scrollProgress">
            <div className="container__scrollProgress__bar"></div>
            <div className="container__scrollProgress__smallBar"></div>
         </div>
         <header className="project__header">
            <div className="project__container-info__header">
               <h1 className="project__title">{project.Title}</h1>
               <div className="project__typeJob">
                  <span className="project__typeJob-word">
                     {project.Job[0]}
                  </span>
                  <div className="project__typeJob-margin__bar"></div>
                  <span className="project__typeJob-word">
                     {project.Job[1]}
                  </span>
               </div>
               <p className="project__description">{project.Description}</p>
            </div>
            <div className="project__background">
               <img src={project.PrincipalImageMobile} alt={project.Title} />
            </div>
         </header>
         <div className="project__content">
            <ImageProcess project={project} />
         </div>
      </div>
   );
}
