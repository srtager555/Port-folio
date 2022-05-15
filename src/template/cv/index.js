import React from "react";

import { ContainerTitle } from "Src/components/cvComponents/containerTitle";
import { ContainerProfile } from "Src/components/cvComponents/containerProfile";
import { ContainerSQ } from "Src/components/cvComponents/containerSQ";
import { ContainerExperience } from "Src/components/cvComponents/ContainerExperience";
import { ContainerMoreInfo } from "Src/components/cvComponents/ContainerMoreInfo";

import styles from "Styles/cv.module.scss";

export function CV() {

   return (
      <div className={styles["container--cv"]}>
         <ContainerTitle />
         <ContainerProfile />
         <ContainerSQ />
         <ContainerExperience />
         <ContainerMoreInfo />
      </div>
   );
   //    https://i.ibb.co/vBK7p1q/profile-pic.jpg
}
