import { useConstVariable } from "@contexts/constVarible";

import Link from "next/link";
// import { useEffect } from "react";

import styles from "@sass/Projects.module.sass";

export function PreviewProjectsInfo({
  infoToShow,
  selectedProject,
  setSelectedProject,
  BgImageRef,
  setCurrentInfo,
  mouseOver,
}) {
  let { IS_MOBILE } = useConstVariable();

  let bgImage = infoToShow.BackgroundImageDesktop || "";
  let bgImageMobile = infoToShow.BackgroundImageMobile || "";

  return (
    <div className={styles.container__projectsInfo}>
      <div
        className={`${styles["container__projectsInfo--container__content"]} ${
          selectedProject ? styles.visible : ""
        }`}
      >
        <div className={styles["container__projectsInfo--background__image"]}>
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
        <div
          className={styles["container__projectsInfo--container__gradientBG"]}
        ></div>
        <div
          className={
            styles["container__projectsInfo--container__content--text"]
          }
        >
          <div className={styles["container-title"]}>
            <span>{infoToShow.Title}</span>
          </div>
          <div className={styles["container-date"]}>
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
    <div className={styles["container__actionButton"]}>
      <Link href={`p/${infoToShow.Id || "/"}`}>
        <a className={styles["container-anchor"]}>
          <span>go to see</span>
        </a>
      </Link>
      <span className={styles["span-notificationXd"]}>scroll to leave</span>
    </div>
  );
}
