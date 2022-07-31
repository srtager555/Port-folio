import Link from "next/link";

import { ProjectsElementList } from "@contexts/projectsContexts";
import { IS_MOBILE } from "@contexts/constVarible";

export function ProjectsElement({
  SliderProjectsRef,
  ViewProjectsScroll,
  ProjectsElementRef,
  PreviewProjects,
}) {
  const mobileCard = cardElement(
    SliderProjectsRef,
    ViewProjectsScroll,
    ProjectsElementRef,
    PreviewProjects,
    mobileCardElement
  );
  const desktopCard = cardElement(
    SliderProjectsRef,
    ViewProjectsScroll,
    ProjectsElementRef,
    PreviewProjects,
    desktopCardElement
  );

  const projectCard = IS_MOBILE() ? mobileCard : desktopCard;

  return projectCard;
}

function cardElement(
  SliderProjectsRef,
  ViewProjectsScroll,
  ProjectsElementRef,
  PreviewProjects,
  callback
) {
  return (
    <div
      ref={SliderProjectsRef}
      style={ViewProjectsScroll}
      className="container__projects-scrollSlider-item"
    >
      {ProjectsElementList.getRecentProjectsAvailable().map((element, index) =>
        callback(ProjectsElementRef, element, index, PreviewProjects)
      )}
    </div>
  );
}

function desktopCardElement(ProjectsElementRef, element, index, callback) {
  return (
    <Link
      href={`p/${element.Id}`}
      key={`project-${index}`}
      onMouseOver={(event) => callback(event, true)}
      onMouseLeave={(event) => callback(event, false)}
      ref={
        ProjectsElementList.getRecentProjectsAvailable().length < 2 ||
        index === 1
          ? ProjectsElementRef
          : null
      }
    >
      <a id={element.Id} className="container__image-projects__scrollSlider">
        <img src={element.PrincipalImageDesktop} alt={element.Id} />
      </a>
    </Link>
  );
}

function mobileCardElement(ProjectsElementRef, element, index, callback) {
  return (
    <button
      id={element.Id}
      onClick={(event) => callback(event, true)}
      key={`project-${index}`}
      ref={
        ProjectsElementList.getRecentProjectsAvailable().length < 2 ||
        index === 1
          ? ProjectsElementRef
          : null
      }
      className="container__image-projects__scrollSlider"
    >
      <img src={element.PrincipalImageMobile} alt="kda Ahri" />
    </button>
  );
}
