import React from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./containers/home";
import { LestTalk } from "./containers/lestTalk";
import { Projects } from "./containers/projects";

import './index.css'

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Projects />
            <LestTalk />
        </>
    );
}

export default App;