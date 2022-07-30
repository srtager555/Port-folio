import { IS_MOBILE_DEVICE } from "@contexts/constVarible";

export function ImageNextPost({ data, stylesIsHover }) {
  return imageFunction(stylesIsHover, data);
}
function imageFunction(stylesIsHover, data) {
  return (
    <img
      style={stylesIsHover}
      src={
        IS_MOBILE_DEVICE()
          ? data.BackgroundImageMobile
          : data.BackgroundImageDesktop
      }
    />
  );
}
