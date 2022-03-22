import React, { useEffect, useState } from "react";
import "../../styles/ScrollProgress.css"

export function ScrollProgress() {
    const [barWidth, setBarWidth] = useState({width: 0})

    function handleScrollPercent() {
        let windowScroll = window.scrollY
        let windowTotalScroll = document.body.scrollHeight - window.innerHeight
        let scrollPercent = (windowScroll / windowTotalScroll) * 100
        setBarWidth({width: `${scrollPercent}%`})
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScrollPercent)
    }, [])

   return (
      <div className="container__scrollProgress">
         <div style={barWidth} className="container__scrollProgress__bar"></div>
         <div className="container__scrollProgress__smallBar"></div>
      </div>
   );
}
