import { useLayoutEffect, useEffect, useRef } from "react";
import Link from "next/link";
import WrappingLetter from "wrapping-letters-react";
import anime from "animejs";
import { HeadComponent } from "@components/Head.next";

import styles from "@sass/NotMatch.module.sass";

export default function NotMatch({ chagePath, setLoader }) {
  chagePath("");

  const returnToHomeRef = useRef(null);

  function moveUpLetterAnimation(element) {
    anime
      .timeline({
        duration: 800,
      })
      .add({
        targets: element.current.children[0].childNodes,
        translateY: [0, "-200%"],
        delay: anime.stagger(20),
      })
      .add(
        {
          targets: element.current.children[1].childNodes,
          translateY: ["200%", 0],
          delay: anime.stagger(20),
        },
        0
      );
  }
  function moveDownLetterAnimation(element) {
    anime
      .timeline({
        duration: 800,
      })
      .add({
        targets: element.current.children[0].childNodes,
        translateY: ["-200%", 0],
        delay: anime.stagger(20),
      })
      .add(
        {
          targets: element.current.children[1].childNodes,
          translateY: [0, "200%"],
          delay: anime.stagger(20),
        },
        0
      );
  }

  useLayoutEffect(() => {
    setLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeadComponent
        title="404 Page not found"
        description="404, There is nothing here :("
      />
      <div className={`container ${styles.container__NotMatch}`}>
        <div className={styles["container__NotMatch--404"]}>
          <span>404</span>
          <img src="https://i.ibb.co/7QZ2QT6/IMG-9088.jpg" alt="404" />
        </div>
        <div className=""></div>
        <div className={styles["container__NotMatch--redirects"]}>
          <Link href="/">
            <a
              onMouseEnter={() => moveUpLetterAnimation(returnToHomeRef)}
              onMouseLeave={() => moveDownLetterAnimation(returnToHomeRef)}
              ref={returnToHomeRef}
            >
              <div
                className={
                  styles["container__NotMatch--redirects-container__letters"]
                }
              >
                <WrappingLetter
                  text="return to Home"
                  textOptions={{ PerWord: true }}
                />
              </div>
              <div
                className={
                  styles["container__NotMatch--redirects-container__letters"]
                }
              >
                <WrappingLetter
                  text="return to Home"
                  textOptions={{ PerWord: true }}
                />
              </div>
            </a>
          </Link>
        </div>
        <div className={styles["container__NotMatch--freeStyleXD"]}>
          <span>Overflow of freeStyle</span>
        </div>
      </div>
    </>
  );
}
