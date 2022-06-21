import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// import { navbar as Navbar } from "./components/navbar";
import { home as Home } from "./pages/home";
import { profile as Profile } from "./pages/profile";
import { skills_and_qualities as Sq } from "./pages/sq";
import { experience as Experience } from "./pages/experience";
import { more_info as MoreInfo } from "./pages/moreInfo";

export function cvtemplate({ setLoader }) {
   let currentPage = <Home {...pageProps} />;
   // url values
   // home, profile, sq, experience, moreInfo
   let { id } = useParams();
   let navigate = useNavigate();

   const pageProps = {
      handleClickChangePage,
      setLoader,
   };

   function handleClickChangePage(path) {
      setLoader(false);
      setTimeout(() => {
         navigate(`/cv/${path}`);
      }, 1000);
   }

   const PAGES = [
      <Home {...pageProps} />,
      <Profile {...pageProps} />,
      <Sq {...pageProps} />,
      <Experience {...pageProps} />,
      <MoreInfo {...pageProps} />,
   ];

   const FUNCTIONS_NAMES = {
      [Home.name]: "home",
      [Profile.name]: "profile",
      [Sq.name]: "sq",
      [Experience.name]: "experience",
      [MoreInfo.name]: "moreInfo",
   };

   let fnNameKeys = Object.entries(FUNCTIONS_NAMES);

   let pagesName = fnNameKeys.map((element) => {
      return element[1];
   });

   // here, the code find the page with the useParams and the variables
   // First find the name of the page
   let currentPageName = pagesName.find((element) => element === id);

   // Then find the name of the function
   let currentPageFn = fnNameKeys.find(
      (element) => element[1] === currentPageName
   );
   // and finally, the find the component
   currentPage = PAGES.find((element) => {
      return element.type.name === currentPageFn[0];
   });

   useEffect(() => {
      setLoader(false);
   }, [id]);

   return <>{currentPage}</>;
}
