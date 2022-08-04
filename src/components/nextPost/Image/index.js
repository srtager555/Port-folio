/* eslint-disable @next/next/no-img-element */
import { useConstVariable } from "@contexts/constVarible";

export function ImageNextPost({ data, stylesIsHover }) {
  let { IS_MOBILE_DEVICE } = useConstVariable();

  return (
    <img
      style={stylesIsHover}
      src={
        IS_MOBILE_DEVICE
          ? data.BackgroundImageMobile
          : data.BackgroundImageDesktop
      }
      alt=""
    />
  );
}
