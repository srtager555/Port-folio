import React, { useState, useEffect } from "react";

import { NavHome } from "./components/navHome";
import { NavMain } from "./components/navMain";

export function Navbar({ handleResetScroll, inPath }) {
   const [navComponent, setNavComponent] = useState(null);
   const props = { handleResetScroll };

   useEffect(() => {
      console.log(inPath);

      if (inPath === "/cv" || inPath === "/cvpdf") {
         setNavComponent(null);
      } else {
         console.log("?");
         if (inPath === "" || inPath === "/")
            setNavComponent(<NavHome {...props} />);
         else setNavComponent(<NavMain {...props} />);
      }
   }, [inPath]);
   return navComponent;
}
