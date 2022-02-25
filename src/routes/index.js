import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/home";

import { Navbar } from "../components/navbar";
import { Background } from "../components/background";

export function Router() {

    return (
        <>
            <Background />
            <Navbar />
            <div className="container-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </div>
        </>

    )
}