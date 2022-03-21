import React from "react";

import { IS_MOBILE_DEVICE } from "../../contexts/constVarible";

function JobBar({ project }) {
   return (
      <div className="project__typeJob">
         <span className="project__typeJob-word">{project.Job[0]}</span>
         <div className="project__typeJob-margin__bar"></div>
         <span className="project__typeJob-word">{project.Job[1]}</span>
      </div>
   );
}
function HeaderTitle({ project }) {
   return <h1 className="project__title">{project.Title}</h1>;
}
function HeaderDescription({ project }) {
   return <p className="project__description">{project.Description}</p>;
}
function HeaderImage({ project }) {
   return (
      <div className="project__background">
         <img src={IS_MOBILE_DEVICE ? project.PrincipalImageMobile : project.PrincipalImageDesktop} alt={project.Title} />
      </div>
   );
}

function HeaderMobile({ project }) {
   return (
      <>
         <div className="project__container-info__header">
            <HeaderTitle project={project} />
            <JobBar project={project} />
            <HeaderDescription project={project} />
         </div>
         <HeaderImage project={project} />
      </>
   );
}
function HeaderDesktop({ project }) {
   return (
      <>
         <div className="project__container-info__header">
            <HeaderTitle project={project} />
            <HeaderDescription project={project} />
         </div>
         <HeaderImage project={project} />
         <JobBar project={project} />
      </>
   );
}

export function HeaderProjects({ project }) {
   return (
      <header className="project__header">
         {IS_MOBILE_DEVICE ? (
            <HeaderMobile project={project} />
         ) : (
            <HeaderDesktop project={project} />
         )}
      </header>
   );
}
