import { useRef } from "react";
import WrappingLetters from "wrapping-letters-react";
import anime from "animejs";

import "../../styles/LestTalk.css";

export function LestTalkContainer() {
  const lestTalkRef = useRef(null);
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);
  const behanceRef = useRef(null);

  function moveUpLetterAnimation2(element) {
    anime
      .timeline({
        targets: element.current.children[0].childNodes,
        duration: 1000,
        easing: "easeInOutSine",
      })
      .add({
        translateY: [0, "-100%", 0],
        delay: anime.stagger(30),
      });
  }
  function moveUpLetterAnimation(element) {
    anime
      .timeline({
        duration: 500,
        easing: "easeInOutSine",
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
        duration: 500,
        easing: "easeInOutSine",
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

  return (
    <div id="lest-talk" className="container container_lestTalk">
      <div className="button-mail">
        <a
          ref={lestTalkRef}
          onMouseEnter={() => moveUpLetterAnimation2(lestTalkRef)}
          href="mailto:srtager555@gmail.com"
        >
          <div className="container__text">
            <WrappingLetters
              text="Let's Talk !!"
              textOptions={{
                ClassToAdd: "button-mail-letter",
                SelectClass: {
                  wordToSearch: "!!",
                  classToAdd: "button-mail-letter_exclamation",
                },
              }}
            />
          </div>
        </a>
        <div className="border-letstalk"></div>
      </div>
      <div className="container__social_networks">
        <h2>About me</h2>
        <div className="container_networks">
          <a
            ref={linkedinRef}
            onMouseEnter={() => moveUpLetterAnimation(linkedinRef)}
            onMouseLeave={() => moveDownLetterAnimation(linkedinRef)}
            href="https://www.linkedin.com/in/srtager555/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="container__text">
              <WrappingLetters
                text="LinkedIn"
                textOptions={{
                  ClassToAdd: "social-network-letter",
                }}
              />
            </div>
            <div className="container__text">
              <WrappingLetters
                text="LinkedIn"
                textOptions={{
                  ClassToAdd: "social-network-letter",
                }}
              />
            </div>
          </a>
          <a
            ref={githubRef}
            onMouseEnter={() => moveUpLetterAnimation(githubRef)}
            onMouseLeave={() => moveDownLetterAnimation(githubRef)}
            href="https://www.github.com/srtager555"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="container__text">
              <WrappingLetters
                text="Github"
                textOptions={{
                  ClassToAdd: "social-network-letter",
                }}
              />
            </div>
            <div className="container__text">
              <WrappingLetters
                text="Github"
                textOptions={{
                  ClassToAdd: "social-network-letter",
                }}
              />
            </div>
          </a>
          <a
            ref={behanceRef}
            onMouseEnter={() => moveUpLetterAnimation(behanceRef)}
            onMouseLeave={() => moveDownLetterAnimation(behanceRef)}
            href="https://www.behance.net/srtager555"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="container__text">
              <WrappingLetters
                text="Behance"
                textOptions={{
                  ClassToAdd: "social-network-letter",
                }}
              />
            </div>
            <div className="container__text">
              <WrappingLetters
                text="Behance"
                textOptions={{
                  ClassToAdd: "social-network-letter",
                }}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
