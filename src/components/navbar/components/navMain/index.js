import React from "react";
import { Link } from "react-router-dom";

import "../../../../styles/Navbar.css";

export function NavMain({ handleResetScroll }) {
   return (
      <>
         <div className="nav__background--main"></div>
         <div className="nav__background--main"></div>
         <nav className="nav__container">
            <div className="nav__container--main">
               <Link onClick={handleResetScroll} to="/">
                  &&
               </Link>
               <div className="equalizer">
                  <div className="equalizer__bar"></div>
                  <div className="equalizer__bar"></div>
                  <div className="equalizer__bar"></div>
               </div>
            </div>
            <div className="nav__container--cta">
               <a href="#home">let's talk</a>
            </div>
         </nav>
      </>
   );
}
