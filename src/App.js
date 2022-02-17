import React from "react";
import { Home } from "./containers/home";
import { LestTalk } from "./containers/lestTalk";
import { Projects } from "./containers/projects";

import './index.css'

function App() {
    return (
        <>
            <Home />
            <Projects />
            <LestTalk />
        </>
    );
}

export default App;