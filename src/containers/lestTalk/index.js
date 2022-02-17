import React from "react";
import WrappingLetters from "wrapping-letters-react";

export function LestTalk() {
    return (
        <div className="container">
            <div className="button-mail">
                <a href="mailto:srtager555@gmail.com">
                    <WrappingLetters
                        word="Let's Talk"
                        wordOptions={[{
                            ClassToAdd: "button-mail-letter",
                        }]}
                    />
                </a>
            </div>
            <div className="container__social_networks">
                <a href="https://www.linkedin.com/in/srtager555/" target="_blank" rel="noopener noreferrer">
                    <WrappingLetters
                        word="LinkedIn"
                        wordOptions={[{
                            ClassToAdd: "social-network-letter",
                        }]}
                    />
                </a>
                <a href="https://www.github.com/srtager555" target="_blank" rel="noopener noreferrer">
                    <WrappingLetters
                        word="Github"
                        wordOptions={[{
                            ClassToAdd: "social-network-letter",
                        }]}
                    />
                </a>

                <a href="https://www.behance.net/srtager555" target="_blank" rel="noopener noreferrer">
                    <WrappingLetters
                        word="Behance"
                        wordOptions={[{
                            ClassToAdd: "social-network-letter",
                        }]}
                    />
                </a>
            </div>
        </div>
    );
}
