import { useLayoutEffect, useEffect, useRef } from "react";
import Link from "next/link";
import WrappingLetter from "wrapping-letters-react";
import anime from "animejs";
import { HelmetComponent } from "../../components/Helmet";

import "../../styles/NotMatch.css";

export function NotMatch({ chagePath, setLoader }) {
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
      <HelmetComponent
        title="404 Page not found"
        description="404, There is nothing here :("
      />
      <div className="container container__NotMatch">
        <div className="container__NotMatch--404">
          <span>404</span>
          <img src="https://i.ibb.co/7QZ2QT6/IMG-9088.jpg" alt="404" />
        </div>
        <div className=""></div>
        <div className="container__NotMatch--redirects">
          <Link
            href="/"
            onMouseEnter={() => moveUpLetterAnimation(returnToHomeRef)}
            onMouseLeave={() => moveDownLetterAnimation(returnToHomeRef)}
          >
            <a ref={returnToHomeRef}>
              <div className="container__NotMatch--redirects-container__letters">
                <WrappingLetter
                  text="return to Home"
                  textOptions={[{ PerWord: true }]}
                />
              </div>
              <div className="container__NotMatch--redirects-container__letters">
                <WrappingLetter
                  text="return to Home"
                  textOptions={[{ PerWord: true }]}
                />
              </div>
            </a>
          </Link>
        </div>
        <div className="container__NotMatch--freeStyleXD">
          <span>Overflow of freeStyle</span>
        </div>
      </div>
    </>
  );
}
