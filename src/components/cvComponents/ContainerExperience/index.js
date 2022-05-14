import React from "react";

import { ProjectsElementList } from "Src/contexts/projectsContexts";

import styles from "Styles/cv.module.scss";

export function ContainerExperience() {
   return (
      <div
         className={`${styles.container__content} ${styles["container--experience"]}`}
      >
         <h2 className={styles.title__content}>Experience</h2>
         <div className={styles.experience__container}>
            {ProjectsElementList.getRecentProjectsAvailable().map((project, index) => (
               <div className={styles.experience__item} key={`${project.Title} - ${index}`}>
                  <div className={styles["experience__item--title"]}>
                     <h3>{project.Title}</h3>
                     <p>{project.Description}</p>
                  </div>
                  <div className={styles["experience__item--links"]}>
                     {project.Links.slice(2).map((link, index) => (
                        <a href={link[1]} target="_blank" key={`${link[0]} - ${index}`}>
                           {link[0]}
                        </a>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
