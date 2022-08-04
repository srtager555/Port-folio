import { useConstVariable } from "@contexts/constVarible";

import styles from "@sass/projects/header.module.sass";

export function HeaderProjects({ project }) {
  let { IS_MOBILE_DEVICE } = useConstVariable();

  const HeaderImage = ({ project }) => {
    return (
      <div className={styles.background}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            IS_MOBILE_DEVICE
              ? project.BackgroundImageMobile
              : project.BackgroundImageDesktop
          }
          alt={project.Title}
        />
      </div>
    );
  };

  const HeaderDesktop = ({ project }) => (
    <>
      <div className={styles["container-info__header"]}>
        <h1 className={styles.title}>{project.Title}</h1>
        <p className={styles.description}>{project.Description}</p>
      </div>
      <HeaderImage project={project} />
      <div className={styles.typeJob}>
        <span className={styles["typeJob-word"]}>{project.Job[0]}</span>
        <div className={styles["typeJob-margin__bar"]}></div>
        <span className={styles["typeJob-word"]}>{project.Job[1]}</span>
      </div>
    </>
  );

  const HeaderMobile = ({ project }) => (
    <>
      <div className={styles["container-info__header"]}>
        <h1 className={styles.title}>{project.Title}</h1>
        <div className={styles.typeJob}>
          <span className={styles["typeJob-word"]}>{project.Job[0]}</span>
          <div className={styles["typeJob-margin__bar"]}></div>
          <span className={styles["typeJob-word"]}>{project.Job[1]}</span>
        </div>
        <p className={styles.description}>{project.Description}</p>
      </div>
      <HeaderImage project={project} />
    </>
  );

  return (
    <header className={styles.header}>
      {IS_MOBILE_DEVICE ? (
        <HeaderMobile project={project} />
      ) : (
        <HeaderDesktop project={project} />
      )}
    </header>
  );
}
