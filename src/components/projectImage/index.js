import React from "react";
import WrappingLetters from "wrapping-letters-react";

import { ImageWithText } from "../../contexts/projectsContexts";

export function ImageProcess({ project }) {
   return project.GaleryImages.map((image, index) => {
      let i = new Image();
      i.src = typeof image === "string" ? image : image.Image;
      i.onload = function () {
         let height = this.naturalHeight;
         let width = this.naturalWidth;
         console.log(height, width, index);
      };

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
         return (
            <div
               key={`image ${index}`}
               className="project__image project__image-container"
            >
               <div className="project__image-container__text">
                  <h3 className="project__image-container__text-title">
                     {image.Title}
                  </h3>
                  <p className="project__image-container__text-description">
                     {image.Description}
                  </p>
               </div>
               <img className="project__image-img" src={image.Image} alt="" />
            </div>
         );
      }
   });
}
