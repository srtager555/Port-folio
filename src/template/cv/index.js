import React, { useState, useEffect } from "react";

import { navbar as Navbar } from "./components/navbar";
import { home } from "./pages/home";
import { profile } from "./pages/profile";
import { skills_and_qualities as sq } from "./pages/sq";
import { experience } from "./pages/experience";
import { more_info as moreInfo } from "./pages/moreInfo";

export function cvtemplate() {
   const [page, setPage] = useState(null);
   const [pageName, setPageName] = useState("home");

   const pages = [home, profile, sq, experience, moreInfo];

   const pagesName = pages.map((element) => {
      return element.name.replace(/_/g, " ");
   });

   const navbarProps = {
      pageName,
      setPageName,
      pagesName,
   };

   useEffect(() => {
      //A global variable only changes when the function,
      //ends, The variable that is born in this scope can
      //change immediately
      let findpage = pages.find((element) => {
         // navbar change namePage without '_' here is added
         console.log(element)
         return element.name === pageName.replace(/\s/g, '_');
      });
      console.log(findpage)

      if (findpage.name === "home") {
         setPage(findpage(setPageName));
      } else setPage(findpage);

      return () => setPage(null);
   }, [pageName]);

   return (
      <>
         <Navbar {...navbarProps} />
         {page}
      </>
   );
}
