import React, { useEffect, useState } from "react";

const useSlide = (): {
  slide: number;
  moveRight: () => void;
  moveLeft: () => void;
} => {
  const SIZE = -1084;
  const [count, setCount] = useState(2);
  const [slide, setSlide] = useState(-1800);
  let NODES: NodeListOf<HTMLElement>;
  let SLIDES: HTMLDivElement | null;

  const moveRight = () => {
    const activedSlide = document.querySelector(".slick-center");
    activedSlide?.classList.remove("slick-center");

    const activedImage = activedSlide?.querySelector(
      ".Image_Image__T6WBp.Image_Image__active___6EY5"
    );
    const activedInfo = activedSlide?.querySelector(
      ".Information_Information__SwERN.Information_Information__active__5qVDq"
    );
    activedImage?.classList.remove("Image_Image__active___6EY5");
    activedInfo?.classList.remove("Information_Information__active__5qVDq");

    if (count === NODES.length - 3) {
      const firstSlide = NODES[1];
      firstSlide?.classList.add("slick-center");

      const firstImage = (firstSlide as HTMLElement).querySelector(
        ".Image_Image__T6WBp"
      );
      const firstInfo = (firstSlide as HTMLElement).querySelector(
        ".Information_Information__SwERN"
      );
      firstImage?.classList.add("Image_Image__active___6EY5");
      firstInfo?.classList.add("Information_Information__active__5qVDq");

      SLIDES?.setAttribute("style", "transition: 0s");
      setSlide(-700);
      setCount(1);

      const activedSlide = firstSlide;
      activedSlide?.classList.remove("slick-center");

      const activedImage = activedSlide?.querySelector(
        ".Image_Image__T6WBp.Image_Image__active___6EY5"
      );
      const activedInfo = activedSlide?.querySelector(
        ".Information_Information__SwERN.Information_Information__active__5qVDq"
      );
      activedImage?.classList.remove("Image_Image__active___6EY5");
      activedInfo?.classList.remove("Information_Information__active__5qVDq");

      const nextSlide = activedSlide?.nextElementSibling;
      nextSlide?.classList.add("slick-center");

      const nextImage = (nextSlide as HTMLElement).querySelector(
        ".Image_Image__T6WBp"
      );
      const nextInfo = (nextSlide as HTMLElement).querySelector(
        ".Information_Information__SwERN"
      );
      nextImage?.classList.add("Image_Image__active___6EY5");
      nextInfo?.classList.add("Information_Information__active__5qVDq");

      setTimeout(() => {
        SLIDES?.setAttribute("style", "transition: .5s ease 0s");
        setSlide((slide) => {
          return slide + SIZE;
        });
        setCount((count) => {
          return count + 1;
        });
      }, 0);
      // SLIDES?.setAttribute("style", "transition: 0.5s ease 0s");
    } else {
      const nextSlide = activedSlide?.nextElementSibling;
      nextSlide?.classList.add("slick-center");

      const nextImage = (nextSlide as HTMLElement).querySelector(
        ".Image_Image__T6WBp"
      );
      const nextInfo = (nextSlide as HTMLElement).querySelector(
        ".Information_Information__SwERN"
      );
      nextImage?.classList.add("Image_Image__active___6EY5");
      nextInfo?.classList.add("Information_Information__active__5qVDq");

      setSlide(slide + SIZE);
      setCount(count + 1);
    }
  };

  const moveLeft = () => {
    const activedSlide = document.querySelector(".slick-center");
    activedSlide?.classList.remove("slick-center");

    const activedImage = activedSlide?.querySelector(
      ".Image_Image__T6WBp.Image_Image__active___6EY5"
    );
    const activedInfo = activedSlide?.querySelector(
      ".Information_Information__SwERN.Information_Information__active__5qVDq"
    );
    activedImage?.classList.remove("Image_Image__active___6EY5");
    activedInfo?.classList.remove("Information_Information__active__5qVDq");

    if (count === 2) {
      const lastNode = NODES[NODES.length - 2];
      lastNode?.classList.add("slick-center");

      const lastImage = (lastNode as HTMLElement).querySelector(
        ".Image_Image__T6WBp"
      );
      const lastInfo = (lastNode as HTMLElement).querySelector(
        ".Information_Information__SwERN"
      );
      lastImage?.classList.add("Image_Image__active___6EY5");
      lastInfo?.classList.add("Information_Information__active__5qVDq");

      SLIDES?.setAttribute("style", "transition: 0s");
      setSlide(slide + SIZE * 11);
      setCount(NODES.length - 2);

      const activedSlide = lastNode;
      activedSlide?.classList.remove("slick-center");

      const activedImage = activedSlide?.querySelector(
        ".Image_Image__T6WBp.Image_Image__active___6EY5"
      );
      const activedInfo = activedSlide?.querySelector(
        ".Information_Information__SwERN.Information_Information__active__5qVDq"
      );
      activedImage?.classList.remove("Image_Image__active___6EY5");
      activedInfo?.classList.remove("Information_Information__active__5qVDq");

      const prevSlide = activedSlide?.previousElementSibling;
      prevSlide?.classList.add("slick-center");

      const prevImage = (prevSlide as HTMLElement).querySelector(
        ".Image_Image__T6WBp"
      );
      const prevInfo = (prevSlide as HTMLElement).querySelector(
        ".Information_Information__SwERN"
      );
      prevImage?.classList.add("Image_Image__active___6EY5");
      prevInfo?.classList.add("Information_Information__active__5qVDq");

      setTimeout(() => {
        SLIDES?.setAttribute("style", "transition: .5s ease 0s");
        setSlide((slide) => slide - SIZE);
        setCount((count) => count - 1);
      }, 0);
    } else {
      const prevSlide = activedSlide?.previousElementSibling;
      prevSlide?.classList.add("slick-center");

      const prevImage = (prevSlide as HTMLElement).querySelector(
        ".Image_Image__T6WBp"
      );
      const prevInfo = (prevSlide as HTMLElement).querySelector(
        ".Information_Information__SwERN"
      );
      prevImage?.classList.add("Image_Image__active___6EY5");
      prevInfo?.classList.add("Information_Information__active__5qVDq");

      setSlide(slide - SIZE);
      setCount(count - 1);
    }
  };

  useEffect(() => {
    NODES = document.querySelectorAll(".slick-slide.slick-cloned");
    SLIDES = document.querySelector("#slideList");

    const slider = setTimeout(() => {
      moveRight();
    }, 3000);

    return () => {
      clearTimeout(slider);
    };
  }, [slide, count]);

  return { slide, moveRight, moveLeft };
};

export { useSlide };
