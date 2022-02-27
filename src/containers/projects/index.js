import React, { useEffect, useRef, useState } from "react";
import WrappingLetters from "wrapping-letters-react";

import { ProjectsElement } from "../../components/projectElement/";

import { recentProjects } from "../../contexts/projectsContexts";

import "../../styles/Projects.css";


function strucutureTitle({ letter, cssClass, ...props }) {
    return (
        <div className="project-words" {...props}>
            <span> {letter} </span>
        </div>
    )
}

export function ProjectsContainer() {
    const ProjectsRef = useRef(null);
    const ProjectObserverRef = useRef(null);
    const ProjectsElementRef = useRef(null);
    const SliderProjectsRef = useRef(null);

    const initialMarginLeft = (window.innerWidth * 1.1);
    const windowHeight = window.innerHeight;
    const leftMargin = initialMarginLeft + windowHeight;
    const heightMultiplier = 1.8;
    const recentProjectsLength = recentProjects.length;

    const [ViewProjectsScroll, setViewProjectsScroll] = useState({
        marginLeft: `${leftMargin}px`,
    });

    const [ProjectsHeight, setProjectsHeight] = useState({
        height: `${((recentProjectsLength * (250 + 150) - 150) + leftMargin) + (window.innerHeight * heightMultiplier)}px`,
    });

    const [isVisible, setIsVisible] = useState(false);

    function handleScrollMoventToLeft() {
        const halfWindowHeight = -(parseInt(ProjectsHeight.height.replace("px", "")));
        let projectTop = ProjectsRef.current.getBoundingClientRect().top;

        if (projectTop <= 0 && projectTop > halfWindowHeight) {
            setViewProjectsScroll({
                marginLeft: `${leftMargin + ProjectsRef.current.getBoundingClientRect().top}px`,
            });
        }
        if (projectTop < halfWindowHeight) {
            setViewProjectsScroll({
                marginLeft: -`${leftMargin}px`,
            });
        }
    }

    function hendleObserProjects(entries) {
        const [entry] = entries;

        if (entry.isIntersecting) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    function handleHeightProjectSection() {

        let projectElementWidthOutPx = parseInt(window.getComputedStyle(ProjectsElementRef.current).getPropertyValue("width").replace("px", ""));
        let projectElementMarginOutPx = parseInt(window.getComputedStyle(ProjectsElementRef.current).getPropertyValue("margin-left").replace("px", ""));
        
        //this comment is about a auto centering of the projects element
        // console.log(SliderProjectsRef.current.childNodes[0].getBoundingClientRect().left);

        setProjectsHeight({
            height: `${((recentProjectsLength * (projectElementWidthOutPx + projectElementMarginOutPx) - projectElementMarginOutPx) + leftMargin) + (windowHeight * heightMultiplier)}px`,
        });
    }

    const options = {
        root: null,
        rootMargin: `0px`,
        threshold: 0.5,
    }

    useEffect(() => {
        const observer = new IntersectionObserver(hendleObserProjects, options);
        if (ProjectObserverRef.current) {
            observer.observe(ProjectObserverRef.current);
        }
        return () => {
            if (ProjectObserverRef.current) {
                observer.unobserve(ProjectObserverRef.current);
            }
        }
    }, [ProjectObserverRef, options]);

    useEffect(() => {
        window.addEventListener("scroll", handleHeightProjectSection);
        window.addEventListener("scroll", handleScrollMoventToLeft);

        return () => {
            window.removeEventListener("scroll", handleHeightProjectSection);
            window.removeEventListener("scroll", handleScrollMoventToLeft);
        }
    }, [])

    return (
        <div ref={ProjectsRef} style={ProjectsHeight} id="projects" className="container container-projects">
            <div className="container container__background-projects">
            </div>
            <div className="container__text--heightPositionControl">
                <div ref={ProjectObserverRef} className="container__text">
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
            <div className={`container__projects-scrollSlider ${isVisible ? "visible" : ""}`}>
                <ProjectsElement SliderProjectsRef={SliderProjectsRef} ViewProjectsScroll={ViewProjectsScroll} ProjectsElementRef={ProjectsElementRef} />
            </div>
        </div>
    )
} 