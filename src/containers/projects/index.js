import React from "react";
import WrappingLetters from "wrapping-letters-react";

import "../../styles/Projects.css";

function strucutureTitle({ letter, cssClass, ...props }) {
    return (
        <div className={cssClass} {...props}>
            <span> {letter} </span>
        </div>
    )
}

export function ProjectsContainer({ l }) {
    return (
        <div ref={l} id="projects" className="container container-projects">
            <div className="container container__background-projects"></div>
            <div className="container__text">
                <WrappingLetters
                    word="I have worked in"
                    wordOptions={[{
                        ClassToAdd: "projects-words",
                        PerWord: true,
                    }]}
                    structure={strucutureTitle}
                />
            </div>
            {/* <div className="container__projectsInfo"></div> */}
            <div className="container__projects-scrollSlider">
                <div className="container__image-projects__scrollSlider">
                    <img src="https://i.ibb.co/X5Wg7S5/kda.jpg" alt="kda Ahri" />
                </div>
            </div>
        </div>
    )
} 