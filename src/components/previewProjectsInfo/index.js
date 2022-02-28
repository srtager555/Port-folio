import React from "react";
import WrappingLetters from "wrapping-letters-react";

import { recentProjects } from "../../contexts/projectsContexts"

export function PreviewProjectsInfo() {
    return <div className="container__projectsInfo">
        <div className="container__projectsInfo--container__content">
            <div className="container__projectsInfo--background__image"></div>
            <div className="container__projectsInfo--container__content--text">
                <div className="container-tittle">
                    <WrappingLetters
                        word={recentProjects[0].Title}
                        wordOptions={[{
                            ClassToAdd: "project-words",
                            PerWord: true,
                        }]}
                    />
                </div>
                <div className="container-date">
                    <WrappingLetters
                        word={recentProjects[0].Date}
                        wordOptions={[{
                            ClassToAdd: "project-words",
                        }]}
                    />
                </div>
            </div>
        </div>
    </div>
}