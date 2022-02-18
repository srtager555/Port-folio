import React, {useRef, useEffect} from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./containers/home";
import { LestTalk } from "./containers/lestTalk";
import { Projects } from "./containers/projects";

import './index.css'

function App() {
    const home = useRef(null);
    const projects = useRef(null);
    const lestTalk = useRef(null);

    useEffect(() => {
        console.log(home.current);
        console.log(projects.current);
        console.log(lestTalk.current);
    }, [])
    
    return (
        <>
            <Navbar />
            <Home l={home} />
            <Projects l={projects} />
            <LestTalk l={lestTalk} />
        </>
    );
}

export default App;