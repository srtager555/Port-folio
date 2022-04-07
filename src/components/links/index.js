import React from "react";

export function Links({ projects = {} }) {
    const { Links = [] } = projects;

   const a = (
      <div className="project__links">
         <div className="project__links-title">
            <h2>Links</h2>
         </div>
         <div className="project__links-content">
            {Links.map((link) => (
               <div className="project__links-content-item">
                  <a href={link[1]} target="_blank" rel="noopener noreferrer">
                     {link[0]}
                  </a>
               </div>
            ))}
         </div>
      </div>
   );

   const b = Links === [] || Links === undefined ? null : a;
   return b;
}
