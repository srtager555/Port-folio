// import { resolveHref } from "next/dist/shared/lib/router/router";
import React, { useEffect, useState } from "react";
import WrappingLetters from "wrapping-letters-react";

import { ImageWithText } from "../../contexts/projectsContexts";

export function ImageProcess({ project, containerWitdh }) {
   const [imageWidth, setImageWidth] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      let arrayOfPromise = project.GaleryImages.map((image, index) => {
         let i = new Image();
         i.src = typeof image === "string" ? image : image.Image;
         return new Promise((resolve, reject) => {
            i.onload = () => {
               let width = i.naturalWidth;
               resolve([width, index]);
            };
         });
      });

      Promise.all(arrayOfPromise)
         .then((value) => {
            setImageWidth(value);
            setIsLoading(false);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   const a = isLoading ? (
      <span>Xd</span>
   ) : (
      project.GaleryImages.map((image, index) => {
         if (typeof image === "string") {
            return (
               <div className="project__image">
                  <img
                     key={`image ${index}`}
                     className="project__image-img"
                     src={image}
                     alt=""
                  />
               </div>
            );
         } else {
            if (!image instanceof ImageWithText) {
               throw new Error(
                  "ImageWithText: image must be a string or an ImageWithText"
               );
            }

            let imageW = imageWidth.find((a) => a[1] === index);
            let imageWrap = imageW[0] <= containerWitdh * 0.6 ? true : false;

            return (
               <div
                  key={`image ${index}`}
                  className={`project__image project__image-container ${
                     imageWrap ? "project__image-container--not_wrapp" : ""
                  }`}
               >
                  <div className="project__image-container__text">
                     <h3 className="project__image-container__text-title">
                        {image.Title}
                     </h3>
                     <p className="project__image-container__text-description">
                        {image.Description}
                     </p>
                  </div>
                  <img
                     className="project__image-img"
                     src={image.Image}
                     alt=""
                  />
               </div>
            );
         }
      })
   );
   return a;
}
