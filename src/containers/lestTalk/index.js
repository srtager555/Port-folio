import React, { useRef, useEffect } from "react";
import WrappingLetters from "wrapping-letters-react";
import anime from "animejs";

import "../../styles/LestTalk.css";

export function LestTalkContainer() {

    const linkedinRef = useRef(null);
    const githubRef = useRef(null);
    const behanceRef = useRef(null);

    function moveUpLetterFirstChild() {
        anime
            .timeline({
                duration: 500,
                easing: "easeInOutSine",
            })
            .add({
                targets: linkedinRef.current.children[0].childNodes,
                translateY: [0, "-200%"],
                delay: anime.stagger(20),
            })
            .add({
                targets: linkedinRef.current.children[1].childNodes,
                translateY: ["200%", 0],
                delay: anime.stagger(20),
            }, 0)
    }
    function moveUpLetterSecondChild() {
        anime
            .timeline({
                duration: 500,
                easing: "easeInOutSine",
            })
            .add({
                targets: linkedinRef.current.children[0].childNodes,
                translateY: ["-200%", 0],
                delay: anime.stagger(20),
            })
            .add({
                targets: linkedinRef.current.children[1].childNodes,
                translateY: [0, "200%"],
                delay: anime.stagger(20),
            }, 0)
    }

    useEffect(() => {
        moveUpLetterFirstChild()
        setTimeout(() => {
            moveUpLetterSecondChild()
        }, 1000)
        // linkedinRef.current.addEventListener("mouseenter", () => );
    }, []);


    return (
        <div id="lest-talk" className="container container_lestTalk">
            <div className="button-mail">
                <a href="mailto:srtager555@gmail.com">
                    <div className="container__text">
                        <WrappingLetters
                            word="Let's Talk"
                            wordOptions={[{
                                ClassToAdd: "button-mail-letter",
                            }]}
                        />
                    </div>
                    <div className="container__text">
                        <WrappingLetters
                            word="Let's Talk"
                            wordOptions={[{
                                ClassToAdd: "button-mail-letter",
                            }]}
                        />
                    </div>
                </a>
            </div>
            <div className="container__social_networks">
                <h2>About me</h2>
                <div className="container_networks">
                    <a ref={linkedinRef} onMouseEnter={() => console.log(linkedinRef.current.children[0].children)} href="https://www.linkedin.com/in/srtager555/" target="_blank" rel="noopener noreferrer">
                        <div className="container-text">
                            <WrappingLetters
                                word="LinkedIn"
                                wordOptions={[{
                                    ClassToAdd: "social-network-letter",
                                }]}
                            />
                        </div>
                        <div className="container-text">
                            <WrappingLetters
                                word="LinkedIn"
                                wordOptions={[{
                                    ClassToAdd: "social-network-letter",
                                }]}
                            />
                        </div>
                    </a>
                    <a ref={githubRef} href="https://www.github.com/srtager555" target="_blank" rel="noopener noreferrer">
                        <div className="container-text">
                            <WrappingLetters
                                word="Github"
                                wordOptions={[{
                                    ClassToAdd: "social-network-letter",
                                }]}
                            />
                        </div>
                        <div className="container-text">
                            <WrappingLetters
                                word="Github"
                                wordOptions={[{
                                    ClassToAdd: "social-network-letter",
                                }]}
                            />
                        </div>

                    </a>
                    <a ref={behanceRef} href="https://www.behance.net/srtager555" target="_blank" rel="noopener noreferrer">
                        <div className="container-text">
                            <WrappingLetters
                                word="Behance"
                                wordOptions={[{
                                    ClassToAdd: "social-network-letter",
                                }]}
                            />
                        </div>
                        <div className="container-text">
                            <WrappingLetters
                                word="Behance"
                                wordOptions={[{
                                    ClassToAdd: "social-network-letter",
                                }]}
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
