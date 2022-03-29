import React from "react";

import { IS_MOBILE_DEVICE, IS_MOBILE } from "../../contexts/constVarible";

import { Link } from "react-router-dom";

export function PreviewProjectsInfo({
   infoToShow,
   selectedProjetc,
   setSelectedProject,
}) {
   return itsShowTime(selectedProjetc, setSelectedProject, infoToShow);
}

function itsShowTime(selectedProjetc, setSelectedProject, infoToShow) {
   return (
      <div className="container__projectsInfo">
         <div
            className={`container__projectsInfo--container__content ${
               selectedProjetc ? "visible" : ""
            }`}
         >
            <div className="container__projectsInfo--background__image">
               <img
                  onLoad={() => setSelectedProject(true)}
                  src={
                     IS_MOBILE_DEVICE()
                        ? infoToShow.BackgroundImageMobile
                        : infoToShow.BackgroundImageDesktop
                  }
                  alt={infoToShow.Title}
               />
            </div>
            <div className="container__projectsInfo--continer__gradientBG"></div>
            <div className="container__projectsInfo--container__content--text">
               <div className="container-title">
                  <span>{infoToShow.Title}</span>
               </div>
               <div className="container-date">
                  <span>{infoToShow.Date}</span>
               </div>
               {IS_MOBILE() ? anchorMobile(infoToShow) : null}
            </div>
         </div>
      </div>
   );
}
function anchorMobile(infoToShow) {
   return (
      <div className="container__actionButton">
         <Link to={`p/${infoToShow.Id || "/"}`} className="container-anchor">
            <span>go to see </span>
         </Link>
         <span className="span-notificationXd">scroll to leave</span>
      </div>
   );
}
