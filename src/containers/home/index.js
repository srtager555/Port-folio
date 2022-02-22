import React, { useState, useEffect } from "react";
import WrappingLetters from "wrapping-letters-react";

import "../../styles/HomeContainer.css";


export function HomeContainer({ l }) {
    const [isMobile, setIsMobile] = useState(false);

    const handleIsMobile = () => {
        // console.log(window.innerWidth);
        if (window.innerWidth > 510) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }
    useEffect(() => {
        handleIsMobile();
        window.addEventListener("resize", handleIsMobile);
        return () => {
            window.removeEventListener("resize", handleIsMobile);
        };
    }, []);

    return (
        <>
            <div ref={l} id="home" className="container container-home">
                <div className="container__title">

                    {isMobile ? (
                        <div className="container__title-image mobile">
                            <img src=
                                "https://i.ibb.co/YDnX5r8/mobile-home-image.jpg"
                                alt="kda Ahri" />
                        </div>
                    ) : (
                        <div className="container__title-image">
                            <img src=
                                "https://i.ibb.co/f8RVct5/home-image.jpg"
                                alt="kda Ahri" />
                        </div>

                    )}
                    <div className="container__title-hero">
                        <div className="container__name">
                            <WrappingLetters
                                word="Carlos Ponce"
                                wordOptions={[{
                                    ClassToAdd: "title-letter",
                                }]}
                            />
                        </div>
                        <div className="container__job">
                            <WrappingLetters
                                word="Front-end Developer"
                                wordOptions={[{
                                    ClassToAdd: "subTitle-letter",
                                }]}
                            />
                        </div>
                    </div>
                </div>
                <div className="container__description">
                    <div className="container__text">
                        <WrappingLetters
                            word="Hello! I’m a young developer, my specialty is front-end development. I invite you to see my projects are simple, but interesting."
                            wordOptions={[{
                                ClassToAdd: "description-words",
                                PerWord: true,
                            }]}
                        />
                    </div>
                    <div className="container__slider">
                        <span className="container__slider-item">
                            <WrappingLetters
                                word={`PORTFOLIO 2022 PORTFOLIO 2022 PORTFOLIO 2022 PORTFOLIO 2022 PORTFOLIO 2022`}
                                wordOptions={[{
                                    ClassToAdd: "slider-words",
                                    PerWord: true,
                                }]}
                            />
                        </span>
                        <span className="container__slider-item">
                            <WrappingLetters
                                word={`PORTFOLIO 2022 PORTFOLIO 2022 PORTFOLIO 2022 PORTFOLIO 2022 PORTFOLIO 2022`}
                                wordOptions={[{
                                    ClassToAdd: "slider-words",
                                    PerWord: true,
                                }]}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}