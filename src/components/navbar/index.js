import React, { useState, useEffect } from "react";


import { NavHome } from "./components/navHome";
import { NavMain } from "./components/navMain";


export function Navbar({ handleResetScroll, inHome }) {
   return inHome ? (
      <NavHome handleResetScroll={handleResetScroll}  />
   ) : (
      <NavMain handleResetScroll={handleResetScroll} />
   );
}
