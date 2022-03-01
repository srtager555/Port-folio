import React from "react";
import WrappingLetters from "wrapping-letters-react";

import { Link } from "react-router-dom";

function structureInfoProject({ letter, cssClass, ...props }) {
    return <div {...props} className="container-words">
        <span> {letter} </span>
    </div>
}

export function PreviewProjectsInfo({ infoToShow, selectedProjetc}) {
    return <div className="container__projectsInfo">
        <div className={`container__projectsInfo--container__content ${selectedProjetc ? "visible" : ""}`}>
            <div className="container__projectsInfo--background__image">
                <img src={infoToShow.BackgroundImageMobile} alt={infoToShow.Title} />
            </div>
            <div className="container__projectsInfo--continer__gradientBG">

            </div>
            <div className="container__projectsInfo--container__content--text">
                <div className="container-title">
                    <WrappingLetters
                        word={infoToShow.Title}
                        wordOptions={[{
                            ClassToAdd: "project-words",
                            PerWord: true,
                        }]}
                        structure={structureInfoProject}
                    />
                </div>
                <div className="container-date">
                    <WrappingLetters
                        word={infoToShow.Date}
                        wordOptions={[{
                            ClassToAdd: "project-words",
                            PerWord: true,
                        }]}
                        structure={structureInfoProject}
                    />
                </div>
                <div className="container__actionButton">
                    <Link to={infoToShow.Link || "/"} className="container-anchor">
                        <WrappingLetters
                            word="go to see"
                            wordOptions={[{
                                ClassToAdd: "project-words",
                                PerWord: true,
                            }]}
                        />
                    </Link>
                    <span className="span-notificationXd">scroll to leave</span>
                </div>
            </div>
        </div>
    </div>
}