import React from "react";

import { IS_MOBILE } from "../../contexts/constVarible";

import { Link } from "react-router-dom";

export function PreviewProjectsInfo({
   infoToShow,
   selectedProject,
   setSelectedProject,
   BgImageRef,
   setCurrentInfo,
}) {
   return itsShowTime(
      selectedProject,
      setSelectedProject,
      infoToShow,
      BgImageRef,
      setCurrentInfo
   );
}

function itsShowTime(
   selectedProject,
   setSelectedProject,
   infoToShow = {},
   BgImageRef,
   setCurrentInfo
) {
   let bgImage = infoToShow.BackgroundImageDesktop || "";
   let bgImageMobile = infoToShow.BackgroundImageMobile || "";

   return (
      <div className="container__projectsInfo">
         <div
            className={`container__projectsInfo--container__content ${
               selectedProject ? "visible" : ""
            }`}
         >
            <div className="container__projectsInfo--background__image">
               <img
                  ref={BgImageRef}
                  onLoad={() => {
                     setSelectedProject(true);
                     setCurrentInfo(infoToShow)
                  }}
                  src={IS_MOBILE() ? bgImageMobile : bgImage}
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
