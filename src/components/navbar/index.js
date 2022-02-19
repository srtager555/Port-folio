import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {

    return (
        <nav className="nav__container">
            <div className="nav__background"></div>
            <div className="nav__logo">
                <a href="/">
                    <img width={50} src="https://ttager.netlify.app/img/logo-new-top.png" alt="logo" />
                </a>
            </div>
            <div className="nav__content">
                <div className="nav__links">
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#about-me">About Me</a>
                    <a href="#lest-talk">Lest Talk</a>
                    <Link to="a">-a</Link>
                </div>
                <div className="equalizer">
                    <div className="equalizer__bar"></div>
                    <div className="equalizer__bar"></div>
                    <div className="equalizer__bar"></div>
                </div>
            </div>
        </nav>
    )
}