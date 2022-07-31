import { useEffect, useRef, useState } from "react";
import WrappingLetters from "wrapping-letters-react";

import { PreviewProjectsInfo } from "@components/previewProjectsInfo";
import { ProjectsElement } from "@components/projectElement/";

import { ProjectsElementList } from "@contexts/projectsContexts";
import { IS_MOBILE } from "@contexts/constVarible";

import styles from "@sass/Projects.module.sass";

export function ProjectsContainer() {
  const ProjectsRef = useRef(null);
  const ProjectObserverRef = useRef(null);
  const ProjectsElementRef = useRef(null);
  const SliderProjectsRef = useRef(null);
  const BgImageRef = useRef(null);

  const initialMarginLeft = window.innerWidth * 1.1;
  const windowHeight = window.innerHeight;
  const leftMargin = initialMarginLeft + windowHeight;
  const heightMultiplier = 1.8;
  const recentProjectsLength =
    ProjectsElementList.getRecentProjectsAvailable().length;
  const recentProjects = ProjectsElementList.getRecentProjectsAvailable();
  const defaultInfoProject = { Title: ".", Date: "." };

  const [ViewProjectsScroll, setViewProjectsScroll] = useState({
    marginLeft: `${leftMargin}px`,
  });

  const [ProjectsHeight, setProjectsHeight] = useState({
    height: `${
      recentProjectsLength * (250 + 150) -
      150 +
      leftMargin +
      window.innerHeight * heightMultiplier
    }px`,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [showPreviewProject, setShowPreviewProject] =
    useState(defaultInfoProject);
  const [selectedProject, setSelectedProject] = useState(false);
  const [currentInfo, setCurrentInfo] = useState(undefined);
  const [mouseOver, setMouseOver] = useState(false);

  // function about the scroll on projects
  function handleScrollMoventToLeft() {
    const halfWindowHeight = -parseInt(ProjectsHeight.height.replace("px", ""));
    let projectTop = ProjectsRef.current.getBoundingClientRect().top;

    if (projectTop <= 0 && projectTop > halfWindowHeight) {
      setViewProjectsScroll({
        marginLeft: `${
          leftMargin + ProjectsRef.current.getBoundingClientRect().top
        }px`,
      });
    }
    if (projectTop < halfWindowHeight) {
      setViewProjectsScroll({
        marginLeft: -`${leftMargin}px`,
      });
    }
  }

  function handleHeightProjectSection() {
    let projectElementWidthOutPx = parseInt(
      window
        .getComputedStyle(ProjectsElementRef.current)
        .getPropertyValue("width")
        .replace("px", "")
    );
    let projectElementMarginOutPx = parseInt(
      window
        .getComputedStyle(ProjectsElementRef.current)
        .getPropertyValue("margin-left")
        .replace("px", "")
    );

    //this comment is about a auto centering of the projects element
    // console.log(SliderProjectsRef.current.childNodes[0].getBoundingClientRect().left);

    setProjectsHeight({
      height: `${
        recentProjectsLength *
          (projectElementWidthOutPx + projectElementMarginOutPx) -
        projectElementMarginOutPx +
        leftMargin +
        windowHeight * heightMultiplier
      }px`,
    });
  }

  // Observer function about the scroll on projects
  function handleObserProjects(entries) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function previewProjects(event, mouseOver = false) {
    setShowPreviewProject(
      recentProjects.find(
        (project) => project.Id === event.target.parentElement.id
      )
    );
    setMouseOver(mouseOver);
  }

  useEffect(() => {
    function imageLoaded() {
      setSelectedProject(true);
    }

    function hiddenPreviewProject() {
      setSelectedProject(false);
      setIsVisible(true);
      setMouseOver(false);

      window.removeEventListener("scroll", hiddenPreviewProject);
    }

    setIsVisible(false);

    if (IS_MOBILE()) {
      if (currentInfo === showPreviewProject) imageLoaded();

      window.addEventListener("scroll", hiddenPreviewProject);
    } else {
      if (mouseOver) {
        if (currentInfo === showPreviewProject) imageLoaded();
      } else {
        setSelectedProject(false);
        setIsVisible(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPreviewProject, mouseOver]);

  useEffect(() => {
    const ProjectObserverRefCurrent = ProjectObserverRef.current;
    const options = {
      root: null,
      rootMargin: `0px`,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleObserProjects, options);
    if (ProjectObserverRef.current) {
      observer.observe(ProjectObserverRefCurrent);
    }
    return () => {
      if (ProjectObserverRefCurrent) {
        observer.unobserve(ProjectObserverRefCurrent);
      }
    };
  }, [ProjectObserverRef]);

  useEffect(() => {
    // intilize the projects height and the projects margin
    handleHeightProjectSection();
    handleScrollMoventToLeft();

    window.addEventListener("scroll", handleHeightProjectSection);
    window.addEventListener("scroll", handleScrollMoventToLeft);

    return () => {
      window.removeEventListener("scroll", handleHeightProjectSection);
      window.removeEventListener("scroll", handleScrollMoventToLeft);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ProjectsRef}
      style={ProjectsHeight}
      className={`container ${styles["container-projects"]}`}
    >
      <div
        className={`container ${styles["container__background-projects"]}`}
      ></div>
      <div
        id="projects"
        className={`${styles["container__text--heightPositionControl"]} ${
          selectedProject ? "invisible" : ""
        }`}
      >
        <div ref={ProjectObserverRef} className={styles.container__text}>
          <WrappingLetters
            text="I have worked in"
            textOptions={[
              {
                PerWord: true,
              },
            ]}
          />
        </div>
      </div>
      <PreviewProjectsInfo
        BgImageRef={BgImageRef}
        infoToShow={showPreviewProject}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        setCurrentInfo={setCurrentInfo}
        mouseOver={mouseOver}
      />
      <div
        className={`${styles["container__projects-scrollSlider"]} ${
          isVisible ? "visible" : ""
        }`}
      >
        <ProjectsElement
          SliderProjectsRef={SliderProjectsRef}
          ViewProjectsScroll={ViewProjectsScroll}
          ProjectsElementRef={ProjectsElementRef}
          PreviewProjects={previewProjects}
        />
      </div>
    </div>
  );
}
