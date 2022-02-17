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

/* `Soy desarrollador front - end, me encanta crear sitios web hermosos y 
funcionales.Soy una persona apasionada y dedicada a la que le encanta 
aprender cosas nuevas y siempre estoy buscando nuevos desafíos.Aprendo 
rápido y siempre estoy buscando nuevas oportunidades para mejorar mis 
habilidades.Soy un jugador de equipo y siempre estoy dispuesto a aprender 
cosas nuevas.Aprendo rápido y siempre estoy buscando nuevas oportunidades 
para mejorar mis habilidades.Soy un jugador de equipo y siempre estoy dispuesto 
a aprender cosas nuevas.` */