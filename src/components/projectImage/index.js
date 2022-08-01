import { useEffect, useState } from "react";
import styles from "@sass/projects/home.module.sass";

export function ImageProcess({ project, containerWitdh, setLoader }) {
  const [imageWidth, setImageWidth] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let arrayOfPromise = project.GaleryImages.map((image, index) => {
      let i = new Image();
      i.src =
        typeof image === "string"
          ? image
          : image.Image || "https://i.ibb.co/YXFZxRL/default-image.png";
      return new Promise((resolve) => {
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
        setLoader(true);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  const a = isLoading ? (
    <span>Xd</span>
  ) : (
    project.GaleryImages.map((image, index) => {
      if (typeof image === "string") {
        return (
          <div className={styles.image}>
            <img
              key={`image ${index}`}
              className={styles["image-img"]}
              src={image}
              alt=""
            />
          </div>
        );
      } else {
        const {
          Image = "https://i.ibb.co/YXFZxRL/default-image.png",
          Title = "",
          Description = "",
        } = image;

        let imageW = imageWidth.find((a) => a[1] === index) || [800];
        let imageSize = imageW[0];
        let imageWrap = imageSize <= containerWitdh * 0.6 ? true : false;

        return (
          <div
            key={`image ${index}`}
            className={`${styles.image} ${styles["image-container"]} ${
              imageWrap ? styles["image-container--not_wrapp"] : ""
            }`}
          >
            <div className={styles["image-container__text"]}>
              {Title != "" ? (
                <h3 className={styles["image-container__text-title"]}>
                  {Title}
                </h3>
              ) : null}
              {Description != "" ? (
                <p className={styles["image-container__text-description"]}>
                  {Description}
                </p>
              ) : null}
            </div>
            <img className={styles["image-img"]} src={Image} alt="" />
          </div>
        );
      }
    })
  );
  return a;
}
