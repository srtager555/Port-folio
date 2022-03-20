import React from "react";

export function HeaderProjects({project}) {
    return (
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
    )
} 