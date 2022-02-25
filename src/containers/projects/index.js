import React, { useEffect, useRef, useState } from "react";
import WrappingLetters from "wrapping-letters-react";

import "../../styles/Projects.css";

function strucutureTitle({ letter, cssClass, ...props }) {
    return (
        <div className="project-words" {...props}>
            <span> {letter} </span>
        </div>
    )
}

export function ProjectsContainer({ l }) {
    const ProjectsRef = useRef(null);
    const ProjectsElementRef = useRef(null);
    const SliderProjectsRef = useRef(null);

    const initialMarginLeft = (window.innerWidth * 1.1);
    const windowHeight = window.innerHeight;
    const leftMargin = initialMarginLeft + windowHeight;

    const projects = [
        {
            img: "https://i.ibb.co/X5Wg7S5/kda.jpg",
        },
        {
            img: "https://i.ibb.co/X5Wg7S5/kda.jpg",
        },
        {
            img: "https://i.ibb.co/X5Wg7S5/kda.jpg",
        },
        {
            img: "https://i.ibb.co/X5Wg7S5/kda.jpg",
        },
        {
            img: "https://i.ibb.co/X5Wg7S5/kda.jpg",
        },
    ]

    const recentProjects = projects.slice(projects.length - 5, projects.length - 1);

    const [ViewProjectsScroll, setViewProjectsScroll] = useState({
        marginLeft: `${leftMargin}px`,
    });

    const [ProjectsHeight, setProjectsHeight] = useState({
        height: `${((recentProjects.length * (250 + 150) - 150) + leftMargin) + (window.innerHeight * 1.7)}px`,
    });

    function handleScrollMoventToLeft() {
        if (ProjectsRef.current.getBoundingClientRect().top <= 0) {
            setViewProjectsScroll({
                marginLeft: `${leftMargin + ProjectsRef.current.getBoundingClientRect().top}px`,
            })
        }
    }

    function handleHeightProjectSection() {
        let projectElementWidthOutPx = parseInt(window.getComputedStyle(ProjectsElementRef.current).getPropertyValue("width").replace("px", ""));
        let projectElementMarginOutPx = parseInt(window.getComputedStyle(ProjectsElementRef.current).getPropertyValue("margin-left").replace("px", ""));

        setProjectsHeight({
            height: `${((recentProjects.length * (projectElementWidthOutPx + projectElementMarginOutPx) - projectElementMarginOutPx) + leftMargin) + (windowHeight * 1.7)}px`,
        });
    }
    
    useEffect(() => {
        window.addEventListener("scroll", handleHeightProjectSection);
        window.addEventListener("scroll", handleScrollMoventToLeft);
        return () => {
            window.removeEventListener("scroll", handleScrollMoventToLeft);
            window.removeEventListener("scroll", handleHeightProjectSection);
        }
    }, [])

    return (
        <div ref={l} ref={ProjectsRef} style={ProjectsHeight} id="projects" className="container container-projects">
            <div className="container container__background-projects">
            </div>
            <div className="container__text--heightPositionControl">
                <div className="container__text">
                    <WrappingLetters
                        word="I have worked in"
                        wordOptions={[{
                            ClassToAdd: "project-words",
                            PerWord: true,
                        }]}
                        structure={strucutureTitle}
                    />
                </div>
            </div>
            {/* <div className="container__projectsInfo"></div> */}
            <div className="container__projects-scrollSlider">
                <div ref={SliderProjectsRef} style={ViewProjectsScroll} className="container__projects-scrollSlider-item">
                    <div className="container__image-projects__scrollSlider">
                        <img src="https://i.ibb.co/X5Wg7S5/kda.jpg" alt="kda Ahri" />
                    </div>
                    <div ref={ProjectsElementRef} className="container__image-projects__scrollSlider">
                        <img src="https://i.ibb.co/X5Wg7S5/kda.jpg" alt="kda Ahri" />
                    </div>
                    <div className="container__image-projects__scrollSlider">
                        <img src="https://i.ibb.co/X5Wg7S5/kda.jpg" alt="kda Ahri" />
                    </div>
                    <div className="container__image-projects__scrollSlider">
                        <img src="https://i.ibb.co/X5Wg7S5/kda.jpg" alt="kda Ahri" />
                    </div>
                </div>
            </div>
        </div>
    )
} 