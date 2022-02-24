import React, { useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/home";

import { Navbar } from "../components/navbar";
import { Background } from "../components/background";

export function Router() {
    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const lestTalkRef = useRef(null);

    // useEffect(() => {
    //     console.log(homeRef.current);
    //     console.log(projectsRef.current);
    //     console.log(lestTalkRef.current);
    // }, [])

    return (
        <>
            <Background />
            <Navbar />
            <div className="container-content">
                <Routes>
                    <Route path="/" element={<HomePage homeRef={homeRef} projectsRef={projectsRef} lestTalkRef={lestTalkRef} />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </div>
        </>

    )
}