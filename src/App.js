import React from "react";

function App() {
    const [a, setA] = React.useState(undefined);
    React.useEffect(() => {
        console.log("App.js");
        window.addEventListener('load', (event) => {
            console.log(event.eventPhase);
            setTimeout(() => {
                setA("loaded");
            }, 1000);
            console.log(event.eventPhase);
        });
    }, []);

    return (
        <>
        <h1>Hola!</h1>
        <p>{a}</p>
        </>
    );
}

export default App;