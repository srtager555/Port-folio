import React, { useRef, useEffect } from "react";
import './index.css'

function App() {
    const observerRef = useRef(null); 

    const handleScroll = () => {
        var a = observerRef.current.getBoundingClientRect().top;
        console.log(a)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <>
            <div className="container"></div>
            <div className="observer" ref={observerRef}></div>
        </>
    );
}

export default App;