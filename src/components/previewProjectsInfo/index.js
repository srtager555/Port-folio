import { IS_MOBILE } from "@contexts/constVarible";

import Link from "next/link";
import { useEffect } from "react";

export function PreviewProjectsInfo({
  infoToShow,
  selectedProject,
  setSelectedProject,
  BgImageRef,
  setCurrentInfo,
  mouseOver,
}) {
  return itsShowTime(
    selectedProject,
    setSelectedProject,
    infoToShow,
    BgImageRef,
    setCurrentInfo,
    mouseOver
  );
}

function itsShowTime(
  selectedProject,
  setSelectedProject,
  infoToShow = {},
  BgImageRef,
  setCurrentInfo,
  mouseOver
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
              if (mouseOver) setSelectedProject(true);
              setCurrentInfo(infoToShow);
            }}
            src={IS_MOBILE ? bgImageMobile : bgImage}
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
          {IS_MOBILE ? anchorMobile(infoToShow) : null}
        </div>
      </div>
    </div>
  );
}
function anchorMobile(infoToShow) {
  return (
    <div className="container__actionButton">
      <Link href={`p/${infoToShow.Id || "/"}`} className="container-anchor">
        <a>
          <span>go to see </span>
        </a>
      </Link>
      <span className="span-notificationXd">scroll to leave</span>
    </div>
  );
}
