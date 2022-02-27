import React, { useEffect, useState } from "react";

import { recentProjects } from "../../contexts/projectsContexts";

export function ProjectsElement({ SliderProjectsRef, ViewProjectsScroll, ProjectsElementRef }) {


    return (
        <div ref={SliderProjectsRef} style={ViewProjectsScroll} className="container__projects-scrollSlider-item">
            {
                recentProjects.map((element, index) => {
                    return (
                        (index === 1) ?
                            <div key={`project-${index}`} className="container__image-projects__scrollSlider">
                                <img src={element.PrincipalImageMobile} alt="kda Ahri" />
                            </div> :
                            <div key={
                                `project-${index}`
                            } ref={ProjectsElementRef} className="container__image-projects__scrollSlider">
                                <img src={element.PrincipalImageMobile} alt="kda Ahri" />
                            </div>
                    )
                })
            }
        </div>
    )
}