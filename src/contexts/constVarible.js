import React, { useEffect, useState } from "react";

const MOBILE_SIZE = 610;
const TABLET_SIZE = 1024;
const MOBILE_DEVICE_SIZE = 1024;

export const NAVBAR_MOBILE_SIZE = 510;

function IS_MOBILE() {
   const [IS_MOBILE__, set_IS_MOBILE__] = useState(false);

   function handleIsMobile() {
      set_IS_MOBILE__(window.innerWidth < MOBILE_DEVICE_SIZE);
   }

   useEffect(() => {
      handleIsMobile();
      window.addEventListener("resize", handleIsMobile);
      return () => window.removeEventListener("resize", handleIsMobile);
   }, []);

   return IS_MOBILE__;
}

function IS_MOBILE_DEVICE() {
   const [IS_MOBILE_DEVICE__, set_IS_MOBILE_DEVICE__] = useState(false);

   function handleIsMobileDevice() {
      set_IS_MOBILE_DEVICE__(window.innerWidth < MOBILE_DEVICE_SIZE);
   }

   useEffect(() => {
      handleIsMobileDevice();
      window.addEventListener("resize", handleIsMobileDevice);
      return () => window.removeEventListener("resize", handleIsMobileDevice);
   }, []);

   return IS_MOBILE_DEVICE__;
}

export { IS_MOBILE, IS_MOBILE_DEVICE };
