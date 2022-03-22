import React, { useEffect } from "react";
import WrappingLetters from "wrapping-letters-react";
import { useNavigate } from "react-router-dom";

import { ProjectsElementList } from "../../contexts/projectsContexts";
import { IS_MOBILE_DEVICE } from "../../contexts/constVarible";

export function NextPost({ data, setLoader }) {
   let dataIndex = ProjectsElementList.getProjectIndexAvailableById(data.Id);
   const navigate = useNavigate()

   function changeNextRoute() {
      setLoader(false)
      setTimeout(()=>{
         navigate(`/p/${data.Id}`)
      }, 1000)
   }
   
   return (
      <div onClick={changeNextRoute} className="nextPost__container">
         <div className="nextPost__background">
            <img
               src={
                  IS_MOBILE_DEVICE
                     ? data.BackgroundImageMobile
                     : data.BackgroundImageDesktop
               }
            />
            <div className="nextPost__container--nextWord">
               <span>NEXT</span>
               <span>
                  {dataIndex < 10 ? `0${dataIndex + 1}` : dataIndex + 1}
               </span>
            </div>
         </div>
         <div className="nextPost__container--info">
            <h1 className="nextPost__container--info__title">{data.Title}</h1>
            <div className="nextPost__container--info__margin__bar"></div>
            <span className="nextPost__container--info__typeJob">
               {data.Job[0]}
            </span>
         </div>
      </div>
   );
}
