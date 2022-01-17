import { useEffect, useMemo, useState } from "react";
import Data from "../assets/Data";
import { SlideProvider } from "../components/Slide";

interface Provider {
  slideList: SlideProvider[];
  slide: number;
  moveRight: () => void;
  moveLeft: () => void;
}

const useSlide = (): Provider => {
  const SIZE = -1084;
  const [count, setCount] = useState(2);
  const [slide, setSlide] = useState(-1800);
  let NODES: NodeListOf<HTMLElement>;
  let SLIDES: HTMLDivElement | null;

  const slideList = useMemo(() => {
    const list = Data;
    if (Data.length > 2) {
      list.unshift(Data[Data.length - 1]);
      list.unshift(Data[Data.length - 2]);
      list.push(Data[2]);
      list.push(Data[3]);
    }

    return list;
  }, [Data]);

  const unfocusSlide = (slide: Element | null | undefined) => {
    slide?.classList.remove("center");

    const image = slide?.querySelector(".inactivedImage.activedImage");
    image?.classList.remove("activedImage");

    const info = slide?.querySelector(".inactivedInfo.activedInfo");
    info?.classList.remove("activedInfo");
  };

  const focusSlide = (slide: Element | null | undefined) => {
    slide?.classList.add("center");

    const image = slide?.querySelector(".inactivedImage");
    image?.classList.add("activedImage");

    const info = slide?.querySelector(".inactivedInfo");
    info?.classList.add("activedInfo");
  };

  const moveRight = () => {
    const activedSlide = document.querySelector(".center");
    unfocusSlide(activedSlide);

    // 무한 슬라이딩을 위해 해당 조건일 경우 trainsition을 바꿔서 앞으로 이동시킨다.
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
    const activedSlide = document.querySelector(".center");
    unfocusSlide(activedSlide);

    // 무한 슬라이딩 효과를 위해 해당 조건일 경우 transition을 바꿔서 뒤로 이동시킨다.
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
    NODES = document.querySelectorAll(".slide");
    SLIDES = document.querySelector("#slideList");

    const slider = setTimeout(() => {
      moveRight();
    }, 3000);

    return () => {
      clearTimeout(slider);
    };
  }, [slide, count]);

  return { slideList, slide, moveRight, moveLeft };
};

export { useSlide };
