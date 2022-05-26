import React, { useState, useEffect } from "react";

import { home } from "./pages/home";
import { profile } from "./pages/profile";
import { sq } from "./pages/sq";
import { experience } from "./pages/experience";
import { moreInfo } from "./pages/moreInfo";

export function cvtemplate() {
   const [page, setPage] = useState(null);
   const [pageName, setPageName] = useState("home");

   const pages = [home, profile, sq, experience, moreInfo];

   const pagesName = pages.map((element) => {
      return element.name;
   });

   const navbarProps = {
        pageName,
        setPageName,
        pagesName,
   }

   useEffect(() => {
      setPage(
         pages.find((element) => {
            return element.name === pageName;
         })
      );
   }, [pageName]);

   return <>{page}</>;
}
