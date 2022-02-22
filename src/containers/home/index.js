import React from "react";
import WrappingLetters from "wrapping-letters-react";

import "../../styles/HomeContainer.css";


export function HomeContainer({ l }) {
    return (
        <>
            <div ref={l} id="home" className="container container-home">
                <div className="container__title">
                    <div className="container__title-image">
                        <img src="https://i.ibb.co/DfXG6HT/IMG-9113-2.jpg" alt="kda Ahri" />
                    </div>
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