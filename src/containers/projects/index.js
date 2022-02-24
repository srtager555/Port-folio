import React, { useEffect, useRef } from "react";
import WrappingLetters from "wrapping-letters-react";

import "../../styles/Projects.css";

function strucutureTitle({ letter, cssClass, ...props }) {
    console.log(cssClass)
    return (
        <div className="project-words" {...props}>
            <span> {letter} </span>
        </div>
    )
}

export function ProjectsContainer({ l }) {
    const ProjectsRef = useRef(null);
    const SliderProjectsRef = useRef(null);

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
        }
    ]

    const recentProjects = projects.slice(projects.length - 5, projects.length - 1);
    
    let ProjectsScroll = {
        height: `${recentProjects.length * (250 + 150) + (window.innerHeight * 2)}px`,
    }

    let ViewProjectsScroll = {
        marginLeft: `${(window.innerHeight * 2) + (innerWidth * 1.1)}px`,
    }

    function handleScrollMoventToLeft() {
        if (ProjectsRef.current.getBoundingClientRect().top <= 0) {
            ViewProjectsScroll = {
                marginLeft: `${(window.innerHeight * 2) + (innerWidth * 1.1) + ProjectsRef.current.getBoundingClientRect().top}px`,
            }
            console.log(ViewProjectsScroll.marginLeft)
        } else {
            ViewProjectsScroll = {
                marginLeft: 0,
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollMoventToLeft);

        return () => {
            window.removeEventListener("scroll", "scroll", handleScrollMoventToLeft);
        }
    }, [])

    return (
        <div ref={l} ref={ProjectsRef} style={ProjectsScroll} id="projects" className="container container-projects">
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
                    <div className="container__image-projects__scrollSlider">
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