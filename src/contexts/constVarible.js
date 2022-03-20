const MOBILE_SIZE = 610;
const TABLET_SIZE = 1024;
const MOBILE_DEVICE_SIZE = 1024;

export const NAVBAR_MOBILE_SIZE = 510;

let IS_MOBILE = true;
let IS_MOBILE_DEVICE = true;

window.addEventListener("resize", isMobile)
window.addEventListener("resize", isMobileDevice)

function isMobile() {
    IS_MOBILE = window.innerWidth < MOBILE_DEVICE_SIZE;
}
function isMobileDevice() {
    IS_MOBILE_DEVICE = window.innerWidth < MOBILE_SIZE;
}


isMobile();
isMobileDevice();


export { IS_MOBILE, IS_MOBILE_DEVICE }
