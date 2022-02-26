import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/home";

import { Navbar } from "../components/navbar";
import { Background } from "../components/background";

function NotMatch() {
    return (
        <div>
            <h1>404</h1>
        </div>
    )
}

export function Router() {
    return (
        <>
            <Background />
            <Navbar />
            <div className="container-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotMatch />} />
                </Routes>
            </div>
        </>

    )
}