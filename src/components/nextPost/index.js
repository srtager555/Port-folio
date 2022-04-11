import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ProjectsElementList } from "../../contexts/projectsContexts";
import { IS_MOBILE } from "../../contexts/constVarible";

import { ImageNextPost } from "./Image/index";

export function NextPost({ data, setLoader }) {
   const a = useRef(null);

   const [stylesIsHover, setStylesIsHover] = useState({});
   const [isHover, setIsHover] = useState(0);

   let dataIndex = ProjectsElementList.getProjectIndexAvailableById(data.Id);
   const navigate = useNavigate();

   function changeNextRoute() {
      setLoader(false);
      setTimeout(() => {
         navigate(`/p/${data.Id}`);
      }, 1000);
   }

   function handleMouseOver(event) {
      if (!IS_MOBILE()) {
         setStylesIsHover({
            ...stylesIsHover,
            transform: `translate(${
               ((event.target.width / 2 - event.screenX / 1.655) * -1) / 5
            }px, ${
               (((event.target.height / 2) - (event.screenY / 2.29)) * -1) / 5
            }px) scale(1.1)`,
            transition: "all 50ms ease-in-out",
         });
      }
   }

   function handleMouseOut() {
      if (!IS_MOBILE()) {
         setStylesIsHover({
            ...stylesIsHover,
            transform: "translate(0%, 0%)",
         });
      }
   }

   useEffect(() => {
      a.current.addEventListener("mousemove", (event) =>
         handleMouseOver(event)
      );
      a.current.addEventListener("mouseout", () => handleMouseOut());
      return () => {
         a.current.removeEventListener("mousemove", (event) =>
            handleMouseOver(event)
         );
         a.current.removeEventListener("mouseout", () => handleMouseOut());
      };
   }, []);

   return (
      <div className="container__nextPost--main">
         <div
            onClick={changeNextRoute}
            className="nextPost__container"
         >
            <div ref={a} className="nextPost__background">
               {ImageNextPost({ data, stylesIsHover })}
               <div className="nextPost__container--nextWord">
                  <span>NEXT</span>
                  <span>
                     {dataIndex < 10 ? `0${dataIndex + 1}` : dataIndex + 1}
                  </span>
               </div>
            </div>
            <div className="nextPost__container--info">
               <h1 className="nextPost__container--info__title">
                  {data.Title}
               </h1>
               <div className="nextPost__container--info__margin__bar"></div>
               <span className="nextPost__container--info__typeJob">
                  {data.Job[0]}
               </span>
            </div>
         </div>
      </div>
   );
}
