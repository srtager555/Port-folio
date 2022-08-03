import Link from "next/link";

import { ProjectsElementList } from "@contexts/projectsContexts";
import { IS_MOBILE } from "@contexts/constVarible";

import styles from "@sass/Projects.module.sass";

export function ProjectsElement({
  SliderProjectsRef,
  ViewProjectsScroll,
  ProjectsElementRef,
  PreviewProjects,
}) {
  return (
    <div
      ref={SliderProjectsRef}
      style={ViewProjectsScroll}
      className={styles["container__projects-scrollSlider-item"]}
    >
      {ProjectsElementList.getRecentProjectsAvailable().map((element, index) =>
        IS_MOBILE ? (
          <button
            id={element.Id}
            onClick={(event) => PreviewProjects(event, true)}
            key={`project-${index}`}
            ref={
              ProjectsElementList.getRecentProjectsAvailable().length < 2 ||
              index === 1
                ? ProjectsElementRef
                : null
            }
            className={styles["container__image-projects__scrollSlider"]}
          >
            <img src={element.PrincipalImageMobile} alt={element.Id} />
          </button>
        ) : (
          <Link
            href={`p/${element.Id}`}
            key={`project-${index}`}
            onMouseOver={(event) => PreviewProjects(event, true)}
            onMouseLeave={(event) => PreviewProjects(event, false)}
            ref={
              ProjectsElementList.getRecentProjectsAvailable().length < 2 ||
              index === 1
                ? ProjectsElementRef
                : null
            }
          >
            <a
              id={element.Id}
              className={styles["container__image-projects__scrollSlider"]}
            >
              <img src={element.PrincipalImageDesktop} alt={element.Id} />
            </a>
          </Link>
        )
      )}
    </div>
  );
}
