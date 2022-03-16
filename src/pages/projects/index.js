import React, { useEffect } from "react";
import WrappingLetters from "wrapping-letters-react";
import { useParams } from "react-router-dom";

import {
   ProjectsElementList,
   ImageWithText,
} from "../../contexts/projectsContexts";

import "../../styles/ProjectPage.css";

function ImageProcess({ project, index }) {
   return project.GaleryImages.map((image) => {
      if (typeof image === "string") {
         return (
            <div className="project__image">
               <img
                  key={`image ${index}`}
                  className="project__image-img"
                  src={image}
                  alt=""
               />
            </div>
         );
      } else {
         if (!image instanceof ImageWithText) {
            throw new Error(
               "ImageWithText: image must be a string or an ImageWithText"
            );
         }
         return (
            <div key={`image ${index}`} className="project__image">
               <div className="project__image-container__text">
                  <h3 className="project__image-container__text-title">
                     {image.Title}
                  </h3>
                  <p className="project__image-container__text-description">
                     {image.Description}
                  </p>
               </div>
               <img className="project__image-img" src={image.Image} alt="" />
            </div>
         );
      }
   });
}

export function ProjectPage({ handleResetScroll }) {
   const { id } = useParams();
   const project = ProjectsElementList().find((project) => project.Id === id);

   if (!project) {
      return <div>404</div>;
   }
   ProjectsElementList().length
   const postIndex = ProjectsElementList().findIndex((project) => project.Id === id);
   const nextPostIndex = ProjectsElementList()[postIndex + 1] <= (ProjectsElementList().length - 1) ? ProjectsElementList()[postIndex + 1] : ProjectsElementList()[0];
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
