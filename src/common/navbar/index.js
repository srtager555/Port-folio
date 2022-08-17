import { useState, useEffect } from "react";

import { NavHome } from "./components/navHome";
import { NavMain } from "./components/navMain";
import { NavResume } from "./components/navResume";

export function Navbar({ handleResetScroll, inPath, ...navbarProps }) {
  const [navComponent, setNavComponent] = useState(null);
  const props = { handleResetScroll, navbarProps };

  useEffect(() => {
    switch (inPath) {
      case "home":
        setNavComponent(<NavHome {...props} />);
        break;

      case "resume":
        setNavComponent(<NavResume {...props} />);
        break;

      case "none":
        setNavComponent(null);
        break;

      case "":
        setNavComponent(<NavMain {...props} />);
        break;

      default:
        setNavComponent(null);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inPath]);
  return navComponent;
}
