import React, { useEffect } from "react";
import WrappingLetters from "wrapping-letters-react";

import { ProjectsElementList } from "../../contexts/projectsContexts";
import { IS_MOBILE_DEVICE } from "../../contexts/constVarible";

export function NextPost({ data }) {
   let dataIndex = ProjectsElementList.getProjectIndexAvailableById(data.Id)

   useEffect(() => {
      console.log(data);
      console.log(data.Title);
      console.log(dataIndex)
   }, []);
   return (
      <div className="nextPost__container">
         <div className="nextPost__background">
            <img
               src={
                  IS_MOBILE_DEVICE
                     ? data.BackgroundImageMobile
                     : BackgroundImageDesktop
               }
            />
            <div className="nextPost__container--nextWord">
               <span>NEXT</span>
               <span>{(dataIndex + 1)}</span>
            </div>
         </div>
         <div className="nextPost__container--title">
             <span>{data.Title}</span>
         </div>
      </div>
   );
}
