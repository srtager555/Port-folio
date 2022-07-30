const MOBILE_SIZE = 610;
// const TABLET_SIZE = 1024;
const MOBILE_DEVICE_SIZE = 1024;

export const NAVBAR_MOBILE_SIZE = 510;

let IS_MOBILE__ = false;

window.addEventListener("resize", () => IS_MOBILE());

function IS_MOBILE() {
  IS_MOBILE__ = window.innerWidth < MOBILE_DEVICE_SIZE;

  return IS_MOBILE__;
}

let IS_MOBILE_DEVICE__ = false;

window.addEventListener("resize", () => IS_MOBILE_DEVICE(IS_MOBILE_DEVICE__));

function IS_MOBILE_DEVICE() {
  IS_MOBILE_DEVICE__ = window.innerWidth < MOBILE_SIZE;

  return IS_MOBILE_DEVICE__;
}

export { IS_MOBILE, IS_MOBILE_DEVICE };
