const MOBILE_SIZE = 610;
const TABLET_SIZE = 1024;
const MOBILE_DEVICE_SIZE = 1024;

export const NAVBAR_MOBILE_SIZE = 510;

let IS_MOBILE__ = false;

function handleIsMobile(param) {
   param = window.innerWidth < MOBILE_DEVICE_SIZE;
}

window.addEventListener("resize", () => handleIsMobile(IS_MOBILE__));

function IS_MOBILE() {
   handleIsMobile(IS_MOBILE__);

   return IS_MOBILE__;
}

let IS_MOBILE_DEVICE__ = false;

function handleIsMobileDevice(param) {
   param = window.innerWidth < MOBILE_DEVICE_SIZE;
}

window.addEventListener("resize", () =>
   handleIsMobileDevice(IS_MOBILE_DEVICE__)
);

function IS_MOBILE_DEVICE() {
   handleIsMobileDevice(IS_MOBILE_DEVICE__);

   return IS_MOBILE_DEVICE__;
}

export { IS_MOBILE, IS_MOBILE_DEVICE };
