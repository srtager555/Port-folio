import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ProjectsElementList } from "@contexts/projectsContexts";
import { IS_MOBILE } from "@contexts/constVarible";

import { ImageNextPost } from "./Image/index";

import styles from "@sass/projects/nextPost.module.sass";

export function NextPost({ data, setLoader }) {
  const a = useRef(null);

  const [stylesIsHover, setStylesIsHover] = useState({});

  let dataIndex = ProjectsElementList.getProjectIndexAvailableById(data.Id);
  const router = useRouter();

  function changeNextRoute() {
    setLoader(false);
    setTimeout(() => {
      router.push(`/p/${data.Id}`);
    }, 1000);
  }

  function handleMouseOver(event) {
    // 1.655, 2.29
    let a = ((event.target.width / 2 - event.screenX / 2) * -1) / 5;
    let b = ((event.target.height / 2 - event.screenY / 2) * -1) / 5;

    if (!IS_MOBILE()) {
      if (a < -35) {
        setStylesIsHover({
          ...stylesIsHover,
          transform: `translate(-35px, ${b}px) scale(1.1)`,
          transition: "all 50ms ease-in-out",
        });
      } else if (a > 35) {
        setStylesIsHover({
          ...stylesIsHover,
          transform: `translate(35px, ${b}px) scale(1.1)`,
          transition: "all 50ms ease-in-out",
        });
      } else {
        setStylesIsHover({
          ...stylesIsHover,
          transform: `translate(${a}px, ${b}px) scale(1.1)`,
          transition: "all 50ms ease-in-out",
        });
      }
    }
  }

  function handleMouseOut() {
    if (!IS_MOBILE()) {
      setStylesIsHover({
        ...stylesIsHover,
        transform: "translate(0%, 0%)",
      });
    }
  }

  useEffect(() => {
    const element = a.current;

    element.addEventListener("mousemove", (event) => handleMouseOver(event));
    element.addEventListener("mouseout", () => handleMouseOut());
    return () => {
      element.removeEventListener("mousemove", (event) =>
        handleMouseOver(event)
      );
      element.removeEventListener("mouseout", () => handleMouseOut());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles["container__nextPost--main"]}>
      <div onClick={changeNextRoute} className={styles.container}>
        <div ref={a} className={styles.background}>
          {ImageNextPost({ data, stylesIsHover })}
          <div className={styles["container--nextWord"]}>
            <span>NEXT</span>
            <span>{dataIndex < 10 ? `0${dataIndex + 1}` : dataIndex + 1}</span>
          </div>
        </div>
        <div className={styles["container--info"]}>
          <h1 className={styles["container--info__title"]}>{data.Title}</h1>
          <div className={styles["container--info__margin__bar"]}></div>
          <span className={styles["container--info__typeJob"]}>
            {data.Job[0]}
          </span>
        </div>
      </div>
    </div>
  );
}
