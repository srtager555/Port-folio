import React from "react";
import WrappingLetters from "wrapping-letters-react";


export function Home() {
    return (
        <div className="container container-home">
            <div className="container__title">
                <div className="container__title-image">
                    <img src="https://i.ibb.co/X5Wg7S5/kda.jpg" alt="kda Ahri" />
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
                <WrappingLetters
                    word="Hello! I’m a young developer, my specialty is front-end development. I invite you to see my projects are simple, but interesting."
                    wordOptions={[{
                        ClassToAdd: "description-words",
                        PerWord: true,
                    }]}
                />
            </div>
        </div>
    )
}