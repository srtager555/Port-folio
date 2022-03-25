import React from "react";
import { Link } from "react-router-dom";

import "../../../../styles/Navbar.css";

export function NavMain({ handleResetScroll }) {
   return (
      <>
         <div className="nav__background__container">
            <div className="nav__background--main"></div>
            <div className="nav__background--main"></div>
         </div>
         <nav className="nav__container">
            <div className="nav__container--main">
               <div className="nav__logo">
                  <Link onClick={handleResetScroll} to="/">
                     &&
                  </Link>
               </div>

            </div>
            <div className="nav__container--cta">
               <a href="#home">let's talk!</a>
            </div>
         </nav>
      </>
   );
}
