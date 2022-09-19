import Link from "next/link";

import { ProjectsElementList } from "@contexts/projectsContexts";
import { useConstVariable } from "@contexts/constVarible";

import styles from "@sass/Projects.module.sass";

export function ProjectsElement({
  SliderProjectsRef,
  ViewProjectsScroll,
  ProjectsElementRef,
  PreviewProjects,
}) {
  let { IS_MOBILE } = useConstVariable();

  const MobileAnchor = ({ forwardRef, element }) => (
    <button
      id={element.Id}
      onClick={(event) => PreviewProjects(event, true)}
      key={`project-${element.Id}`}
      ref={forwardRef}
      className={`${styles["container__image-projects__scrollSlider"]} ${
        element.Developing && styles["in-progess"]
      }`}
    >
      <img src={element.PrincipalImageMobile} alt={element.Id} />
    </button>
  );

  const DesktopButton = ({ forwardRef, element }) => (
    <Link href={`p/${element.Id}`}>
      <a
        id={element.Id}
        key={`project-${element.Id}`}
        ref={forwardRef}
        onMouseOver={(event) => PreviewProjects(event, true)}
        onMouseLeave={(event) => PreviewProjects(event, false)}
        className={`${styles["container__image-projects__scrollSlider"]} ${
          element.Developing && styles["in-progess"]
        }`}
      >
        <img src={element.PrincipalImageDesktop} alt={element.Id} />
      </a>
    </Link>
  );

  return (
    <div
      ref={SliderProjectsRef}
      style={ViewProjectsScroll}
      className={styles["container__projects-scrollSlider-item"]}
    >
      {ProjectsElementList.getRecentProjectsAvailable().map(
        (element, index) => {
          let forwardRef;

          if (index === 1) forwardRef = ProjectsElementRef;
          else forwardRef = null;

          return IS_MOBILE ? (
            <MobileAnchor
              forwardRef={forwardRef}
              element={element}
              key={`mobile-button-${index}`}
            />
          ) : (
            <DesktopButton
              forwardRef={forwardRef}
              element={element}
              key={`mobile-button-${index}`}
            />
          );
        }
      )}
    </div>
  );
}
