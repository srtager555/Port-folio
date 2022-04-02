import React from "react";
import { Link } from "react-router-dom";

import { ProjectsElementList } from "../../contexts/projectsContexts";
import { IS_MOBILE } from "../../contexts/constVarible";

export function ProjectsElement({ SliderProjectsRef, ViewProjectsScroll, ProjectsElementRef, PreviewProjects }) {

    const mobileCard = cardElement(SliderProjectsRef, ViewProjectsScroll, ProjectsElementRef, PreviewProjects, mobileCardElement);
    const desktopCard = cardElement(SliderProjectsRef, ViewProjectsScroll, ProjectsElementRef, PreviewProjects, desktopCardElement);

    const projectCard = IS_MOBILE() ? mobileCard : desktopCard;

    return projectCard;
}

function cardElement(SliderProjectsRef, ViewProjectsScroll, ProjectsElementRef, PreviewProjects, callback) {

    React.useEffect(() => {
    }, []);
    return <div ref={SliderProjectsRef} style={ViewProjectsScroll} className="container__projects-scrollSlider-item">
        {
            ProjectsElementList.getRecentProjectsAvailable().map((element, index) => (
                callback(ProjectsElementRef, element, index, PreviewProjects)
            ))
        }
    </div>
}

function desktopCardElement(ProjectsElementRef, element, index, callback) {
    return <Link
        id={element.Id}
        to={`p/${element.Id}`} key={`project-${index}`}
        onMouseEnter={(event) => callback(event, true)}
        onMouseLeave={(event) => callback(event, false)}
        ref={(ProjectsElementList.getRecentProjectsAvailable().length < 2 || index === 1) ? ProjectsElementRef : null}
        className="container__image-projects__scrollSlider"
    >
        <img src={element.PrincipalImageMobile} alt="kda Ahri" />
    </Link>
}

function mobileCardElement(ProjectsElementRef, element, index, callback) {
    return <button
        id={element.Id}
        onClick={callback}
        key={`project-${index}`}
        ref={(ProjectsElementList.getRecentProjectsAvailable().length < 2 || index === 1) ? ProjectsElementRef : null}
        className="container__image-projects__scrollSlider"
    >
        <img src={element.PrincipalImageMobile} alt="kda Ahri" />
    </button>
}