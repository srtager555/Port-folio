import { useEffect, useState } from "react";
import style from "@sass/Background.module.sass";

export function Background({ inPath }) {
  const [backgroundClass, setBackgroundClass] = useState("");

  useEffect(() => {
    if (inPath === "home") {
      setBackgroundClass("");
    } else {
      setBackgroundClass(style["background--project"]);
    }
  }, [inPath]);

  return (
    <div
      className={`container ${style["container-background"]} ${backgroundClass}`}
    ></div>
  );
}
