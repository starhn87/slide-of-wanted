import { useEffect, useState } from "react";

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

  const unfocusSlide = (slide: Element | null | undefined) => {
    slide?.classList.remove("slick-center");

    const image = slide?.querySelector(
      ".Image_Image__T6WBp.Image_Image__active___6EY5"
    );
    const info = slide?.querySelector(
      ".Information_Information__SwERN.Information_Information__active__5qVDq"
    );
    image?.classList.remove("Image_Image__active___6EY5");
    info?.classList.remove("Information_Information__active__5qVDq");
  };

  const focusSlide = (slide: Element | null | undefined) => {
    slide?.classList.add("slick-center");

    const image = slide?.querySelector(".Image_Image__T6WBp");
    const info = slide?.querySelector(".Information_Information__SwERN");
    image?.classList.add("Image_Image__active___6EY5");
    info?.classList.add("Information_Information__active__5qVDq");
  };

  const moveRight = () => {
    const activedSlide = document.querySelector(".slick-center");
    unfocusSlide(activedSlide);

    if (count === NODES.length - 3) {
      const firstSlide = NODES[1];
      focusSlide(firstSlide);

      SLIDES?.setAttribute("style", "transition: 0s");
      setSlide(-700);
      setCount(1);

      unfocusSlide(firstSlide);
      focusSlide(firstSlide.nextElementSibling);

      setTimeout(() => {
        SLIDES?.setAttribute("style", "transition: .5s ease 0s");
        setSlide((slide) => {
          return slide + SIZE;
        });
        setCount((count) => {
          return count + 1;
        });
      }, 0);
    } else {
      focusSlide(activedSlide?.nextElementSibling);

      setSlide(slide + SIZE);
      setCount(count + 1);
    }
  };

  const moveLeft = () => {
    const activedSlide = document.querySelector(".slick-center");
    unfocusSlide(activedSlide);

    if (count === 2) {
      const lastNode = NODES[NODES.length - 2];
      focusSlide(lastNode);

      SLIDES?.setAttribute("style", "transition: 0s");
      setSlide(slide + SIZE * 11);
      setCount(NODES.length - 2);

      unfocusSlide(lastNode);
      focusSlide(lastNode.previousElementSibling);

      setTimeout(() => {
        SLIDES?.setAttribute("style", "transition: .5s ease 0s");
        setSlide((slide) => slide - SIZE);
        setCount((count) => count - 1);
      }, 0);
    } else {
      const prevSlide = activedSlide?.previousElementSibling;
      focusSlide(prevSlide);

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
