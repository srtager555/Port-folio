import React from "react";
import { Link } from "react-router-dom";

import "../../../../styles/Navbar.css";

export function NavMain({ handleResetScroll }) {
   return (
      <>
         {/* <div className="nav__background__container"> */}
            <div className="nav__background--main"></div>
            <div className="nav__background--main secondary"></div>
         {/* </div> */}
         {/* <nav className="nav__container"> */}
            <nav className="nav__container--main">
               <div className="nav__logo">
                  <Link onClick={handleResetScroll} to="/">
                     &&
                  </Link>
               </div>

            </nav>
            <nav className="nav__container--cta">
               <a href="mailto:srtager555@gmail.com">let's talk!</a>
            </nav>
         {/* </nav> */}
      </>
   );
}
