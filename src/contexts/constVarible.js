// const TABLET_SIZE = 1024;
const MOBILE_SIZE = 610;
export const NAVBAR_MOBILE_SIZE = 510;
const MOBILE_DEVICE_SIZE = 1024;

let IS_MOBILE__ = false;
let IS_MOBILE_DEVICE__ = false;
function useConstSizes() {
  window.addEventListener("resize", () => IS_MOBILE());

  window.addEventListener("resize", () => IS_MOBILE_DEVICE(IS_MOBILE_DEVICE__));
}

useConstSizes.prototype.IS_MOBILE_DEVICE = function () {
  IS_MOBILE_DEVICE__ = window.innerWidth < MOBILE_SIZE;

  return IS_MOBILE_DEVICE__;
};

useConstSizes.prototype.IS_MOBILE = function () {
  IS_MOBILE__ = window.innerWidth < MOBILE_DEVICE_SIZE;

  return IS_MOBILE__;
};

const IS_MOBILE = useConstSizes.IS_MOBILE;
const IS_MOBILE_DEVICE = useConstSizes.IS_MOBILE_DEVICE;

export { IS_MOBILE, IS_MOBILE_DEVICE };
