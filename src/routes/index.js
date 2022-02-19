import React, { useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/home";

import { Navbar } from "../components/navbar";

export function Router() {
    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const lestTalkRef = useRef(null);

    useEffect(() => {
        console.log(homeRef.current);
        console.log(projectsRef.current);
        console.log(lestTalkRef.current);
    }, [])

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage homeRef={homeRef} projectsRef={projectsRef} lestTalkRef={lestTalkRef} />} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </>

    )
}