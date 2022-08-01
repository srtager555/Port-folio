import { IS_MOBILE_DEVICE } from "@contexts/constVarible";

import styles from "@sass/projects/header.module.sass";

function JobBar({ project }) {
  return (
    <div className={styles.typeJob}>
      <span className={styles["typeJob-word"]}>{project.Job[0]}</span>
      <div className={styles["typeJob-margin__bar"]}></div>
      <span className={styles["typeJob-word"]}>{project.Job[1]}</span>
    </div>
  );
}
function HeaderTitle({ project }) {
  return <h1 className={styles.title}>{project.Title}</h1>;
}
function HeaderDescription({ project }) {
  return <p className={styles.description}>{project.Description}</p>;
}
function HeaderImage({ project }) {
  return (
    <div className={styles.background}>
      <img
        src={
          IS_MOBILE_DEVICE()
            ? project.BackgroundImageMobile
            : project.BackgroundImageDesktop
        }
        alt={project.Title}
      />
    </div>
  );
}

function HeaderMobile({ project }) {
  return (
    <>
      <div className={styles["container-info__header"]}>
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
      <div className={styles["container-info__header"]}>
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
    <header className={styles.header}>
      {IS_MOBILE_DEVICE() ? (
        <HeaderMobile project={project} />
      ) : (
        <HeaderDesktop project={project} />
      )}
    </header>
  );
}
