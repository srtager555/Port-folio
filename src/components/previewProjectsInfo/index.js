import React, { useEffect, useRef } from "react";
import WrappingLetters from "wrapping-letters-react";

import { IS_MOBILE } from "../../contexts/constVarible";

import { Link } from "react-router-dom";

function structureInfoProject({ letter, cssClass, ...props }) {
    return <div {...props} className="container-words">
        <span> {letter} </span>
    </div>
}

export function PreviewProjectsInfo({ infoToShow, selectedProjetc, setSelectedProject }) {

    return itsShowTime(selectedProjetc, setSelectedProject, infoToShow)
}

function itsShowTime(selectedProjetc, setSelectedProject, infoToShow) {
    return <div className="container__projectsInfo">
        <div className={`container__projectsInfo--container__content ${selectedProjetc ? "visible" : ""}`}>
            <div className="container__projectsInfo--background__image">
                <img
                    onLoad={() => setSelectedProject(true)}
                    src={IS_MOBILE ? infoToShow.BackgroundImageMobile : infoToShow.BackgroundImageDesktop}
                    alt={infoToShow.Title}
                />
            </div>
            <div className="container__projectsInfo--continer__gradientBG"></div>
            <div className="container__projectsInfo--container__content--text">
                <div className="container-title">
                    <WrappingLetters
                        word={infoToShow.Title}
                        wordOptions={[{
                            ClassToAdd: "project-words",
                            PerWord: true
                        }]}
                        structure={structureInfoProject} />
                </div>
                <div className="container-date">
                    <WrappingLetters
                        word={infoToShow.Date}
                        wordOptions={[{
                            ClassToAdd: "project-words",
                            PerWord: true
                        }]}
                        structure={structureInfoProject} />
                </div>
                {IS_MOBILE ? anchorMobile(infoToShow) : null}
            </div>
        </div>
    </div>;
}
function anchorMobile(infoToShow) {
    return <div className="container__actionButton">
        <Link to={`p/${infoToShow.Id || "/"}`} className="container-anchor">
            <WrappingLetters
                word="go to see"
                wordOptions={[{
                    ClassToAdd: "project-words",
                    PerWord: true
                }]} />
        </Link>
        <span className="span-notificationXd">scroll to leave</span>
    </div>;
}

