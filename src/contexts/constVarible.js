export const MOBILE_SIZE = 1024;

export const NAVBAR_MOBILE_SIZE = 510;

let IS_MOBILE = true;
window.addEventListener("resize", isMobile)

function isMobile() {
    IS_MOBILE = window.innerWidth < MOBILE_SIZE;
}
isMobile();

export { IS_MOBILE }
