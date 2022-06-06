import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { navbar as Navbar } from "./components/navbar";
import { home } from "./pages/home";
import { profile } from "./pages/profile";
import { skills_and_qualities as sq } from "./pages/sq";
import { experience } from "./pages/experience";
import { more_info as moreInfo } from "./pages/moreInfo";

export function cvtemplate() {
   // url values
   // home, profile, sq, experience, moreInfo
   let { cvId } = useParams();
   const PAGES = [home, profile, sq, experience, moreInfo];
   let functionsName = {
      [home.name]: home.name,
      [profile.name]: profile.name,
      [sq.name]: sq.name,
      [experience.name]: experience.name,
      [moreInfo.name]: moreInfo.name,
   };
   let fnNameKeys = Object.entries(functionsName);

   let pagesName = fnNameKeys.map((element) => {
      if (element[1] === sq.name) element[1] = "sq";
      if (element[1] === moreInfo.name) element[1] = "moreInfo";

      return element[1];
   });

   
   // here, the code find the page with the useParams and the variables
   // First find the name of the page
   let currentPageName = pagesName.find((element) => element === cvId);
   // Then find the name of the function
   let currentPageFn = fnNameKeys.find(
      (element) => element[1] === currentPageName
   );
   // and finally, the find the component
   let currentPage = PAGES.find((element) => element.name === currentPageFn[0]);

   let navbarProps = {
      pageName: currentPageFn,
      pagesName: fnNameKeys
   }
   return (
      <>
         <Navbar {...navbarProps} />
         {currentPage()}
      </>
   );
}
