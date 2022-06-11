import React, { useState, useEffect } from "react";

import { NavHome } from "./components/navHome";
import { NavMain } from "./components/navMain";
import { NavCV } from "./components/navCV";

export function Navbar({ handleResetScroll, inPath }) {
   const [navComponent, setNavComponent] = useState(null);
   const props = { handleResetScroll };

   useEffect(() => {
      switch (inPath) {
         case "home":
            setNavComponent(<NavHome {...props} />);
            break;

         case "cv":
            setNavComponent(<NavCV {...props} />);
            break;

         case "none":
            setNavComponent(null);
            break;

         case "":
            setNavComponent(<NavMain {...props} />);
            break;

         default:
            setNavComponent(<NavMain {...props} />);
            break;
      }
   }, [inPath]);
   return navComponent;
}
