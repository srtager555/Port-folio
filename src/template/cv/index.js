import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import { navbar as Navbar } from "./components/navbar";
import { home } from "./pages/home";
import { profile } from "./pages/profile";
import { skills_and_qualities as sq } from "./pages/sq";
import { experience } from "./pages/experience";
import { more_info as moreInfo } from "./pages/moreInfo";

export function cvtemplate() {
   // url values
   // home, profile, sq, experience, moreInfo
   let { cvId } = useParams();
   
   const [currentPage, setCurrentPage] = useState(home);
   const PAGES = [home, profile, sq, experience, moreInfo];

   const FUNCTIONS_NAMES = {
      [home.name]: "home",
      [profile.name]: "profile",
      [sq.name]: "sq",
      [experience.name]: "experience",
      [moreInfo.name]: "moreInfo",
   };
   
   
   useEffect(() => {
      let fnNameKeys = Object.entries(FUNCTIONS_NAMES);
   
      let pagesName = fnNameKeys.map((element) => {
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

      setCurrentPage(PAGES.find((element) => element.name === currentPageFn[0]));
   
   }, [cvId]);

   // let navbarProps = {
   //    pageName: currentPageFn,
   //    pagesName: fnNameKeys
   // }
   return (
      <>
         {/* <Navbar {...navbarProps} /> */}
         {currentPage}
      </>
   );
}
