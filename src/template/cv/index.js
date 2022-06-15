import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// import { navbar as Navbar } from "./components/navbar";
import { home } from "./pages/home";
import { profile } from "./pages/profile";
import { skills_and_qualities as sq } from "./pages/sq";
import { experience } from "./pages/experience";
import { more_info as moreInfo } from "./pages/moreInfo";

export function cvtemplate({ setLoader }) {
   // url values
   // home, profile, sq, experience, moreInfo
   let { cvId } = useParams();
   let navigate = useNavigate();

   const PAGES = [home, profile, sq, experience, moreInfo];
   let currentPage = PAGES[0];

   // here been declared the function because in the
   // component it's not possible to us e the useNavigate,
   // throwed a warning when's declared
   function handleClickChangePage(path) {
      setLoader(false);
      setTimeout(() => {
         navigate(`/cv/${path}`);
      }, 1000);
   }

   const FUNCTIONS_NAMES = {
      [home.name]: "home",
      [profile.name]: "profile",
      [sq.name]: "sq",
      [experience.name]: "experience",
      [moreInfo.name]: "moreInfo",
   };

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
   currentPage = PAGES.find((element) => element.name === currentPageFn[0])(
      { handleClickChangePage, setLoader }
   );

   useEffect(() => {
      setLoader(true);
   }, [cvId]);

   return (
      <>
         {currentPage}
      </>
   );
}
