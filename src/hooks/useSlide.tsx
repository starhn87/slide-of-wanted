import { useEffect, useMemo, useState } from "react";
import Contents from "../assets/Data.json";
import { SlideProvider } from "../components/Slide";

interface Provider {
  slideList: SlideProvider[];
  slideMargin: number;
  moveRight: () => void;
  moveLeft: () => void;
}

const DEFAULT_SLIDING_WIDTH = 1084;
const DEFAULT_SLIDE_SIZE = 1085;
const STANDARD_SCREEN_WIDTH = 1200;

const useSlide = (): Provider => {
  const [size, setSize] = useState(
    window.innerWidth < STANDARD_SCREEN_WIDTH
      ? -window.innerWidth
      : -DEFAULT_SLIDING_WIDTH
  );
  const [count, setCount] = useState(2);
  const [slideMargin, setSlideMargin] = useState(size);
  let NODES: NodeListOf<HTMLElement>;
  let SLIDES: HTMLDivElement | null;
  let startPos = 0;
  let offset = 0;
  let swiping = false;
  let timer: NodeJS.Timeout;

  const slideList = useMemo(() => {
    const list = Contents.data;
    if (Contents.data.length > 2) {
      const firstSlide = { ...list[0] };
      delete firstSlide.center;
      list.unshift(Contents.data[Contents.data.length - 1]);
      list.unshift(Contents.data[Contents.data.length - 2]);
      list.push(firstSlide);
      list.push(Contents.data[3]);
    }

    return list;
  }, [Contents]);

  const swipe = () => {
    SLIDES?.addEventListener("mousedown", handleMouseDown);
    SLIDES?.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    clearTimeout(timer);
    startPos = event.pageX;
    swiping = true;
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (swiping) {
      offset = event.pageX - startPos;

      SLIDES?.setAttribute(
        "style",
        `transitionDuration: 0ms; transform: translate3d(${
          slideMargin + offset
        }px, 0, 0);`
      );
    }
  };

  const handleMouseUp = () => {
    swiping = false;

    if (offset < size / 2) {
      moveRight();
    } else if (offset > -size / 2) {
      moveLeft();
    } else if (offset > size / 2) {
      SLIDES?.setAttribute(
        "style",
        `transitionDuration: 0ms; transform: translate3d(${slideMargin}px, 0, 0);`
      );

      clearTimeout(timer);
      timer = setTimeout(() => {
        moveRight();
      }, 4000);
    }
  };

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
    const nextSlide = activedSlide?.nextElementSibling;
    unfocusSlide(activedSlide);

    // 무한 슬라이딩을 위해 해당 조건일 경우 trainsition을 바꿔서 앞으로 이동시킨다.
    if (count === NODES.length - 3) {
      const firstSlide = NODES[1];
      focusSlide(firstSlide);

      SLIDES?.setAttribute("style", "transition: 0s");
      setCount(1);
      setSlideMargin(
        window.innerWidth > 1200
          ? size +
              ((window.innerWidth - STANDARD_SCREEN_WIDTH) * NODES.length) / 29
          : size
      );

      unfocusSlide(firstSlide);
      focusSlide(firstSlide.nextElementSibling);

      setTimeout(() => {
        SLIDES?.setAttribute("style", "transition: .5s ease 0s");
        setSlideMargin(
          window.innerWidth > 1200
            ? size * 2 +
                ((window.innerWidth - STANDARD_SCREEN_WIDTH) * NODES.length) /
                  29
            : size * 2
        );
        setCount((count) => {
          return count + 1;
        });
      }, 0);
    } else {
      focusSlide(nextSlide);
      setSlideMargin(slideMargin + size);
      setCount(count + 1);
    }
  };

  const moveLeft = () => {
    const activedSlide = document.querySelector(".center");
    const prevSlide = activedSlide?.previousElementSibling;
    unfocusSlide(activedSlide);

    // 무한 슬라이딩 효과를 위해 해당 조건일 경우 transition을 바꿔서 뒤로 이동시킨다.
    if (count === 2) {
      const lastNode = NODES[NODES.length - 2];
      focusSlide(lastNode);

      SLIDES?.setAttribute("style", "transition: 0s");
      setSlideMargin(slideMargin + size * 11);
      setCount(NODES.length - 2);

      unfocusSlide(lastNode);
      focusSlide(lastNode.previousElementSibling);

      setTimeout(() => {
        SLIDES?.setAttribute("style", "transition: .5s ease 0s");
        setSlideMargin((slideMargin: number) => slideMargin - size);
        setCount((count) => count - 1);
      }, 0);
    } else {
      focusSlide(prevSlide);
      setSlideMargin(slideMargin - size);
      setCount(count - 1);
    }
  };

  const handleResize = () => {
    let width = 1060;
    if (window.innerWidth < STANDARD_SCREEN_WIDTH) {
      setSlideMargin(-window.innerWidth * count + 195);
      setSize(-window.innerWidth + 95);
      width = window.innerWidth - 95;
      SLIDES?.setAttribute(
        "style",
        `width: ${width * NODES.length}px; transform: translate3d(${
          -window.innerWidth * count + 195
        }px, 0, 0);`
      );
    } else if (window.innerWidth === STANDARD_SCREEN_WIDTH) {
      setSlideMargin(-DEFAULT_SLIDE_SIZE * count + 10);
      setSize(-DEFAULT_SLIDING_WIDTH);
      SLIDES?.setAttribute(
        "style",
        `width: ${
          DEFAULT_SLIDE_SIZE * NODES.length
        }px; transform: translate3d(${
          -DEFAULT_SLIDE_SIZE * count - 100
        }px, 0, 0);`
      );
    } else {
      const margin =
        size * count +
        ((window.innerWidth - STANDARD_SCREEN_WIDTH) * NODES.length) / 29;
      setSize(-DEFAULT_SLIDING_WIDTH);
      setSlideMargin(margin);

      SLIDES?.setAttribute(
        "style",
        `width: ${
          (window.innerWidth - STANDARD_SCREEN_WIDTH + DEFAULT_SLIDE_SIZE) *
          NODES.length
        }px; transform: translate3d(${margin}px, 0, 0);`
      );
    }

    setPadding();

    NODES.forEach((node) => {
      node.setAttribute("style", `width: ${width}px`);
    });
  };

  const setPadding = () => {
    const list = document.querySelector(".list");
    if (window.innerWidth < STANDARD_SCREEN_WIDTH) {
      list?.setAttribute("style", `padding: 0 40px`);
    } else {
      list?.setAttribute("style", `padding: 0 50px`);
    }
  };

  useEffect(() => {
    NODES = document.querySelectorAll(".slide");
    SLIDES = document.querySelector("#slideList");
    swipe();

    setPadding();

    timer = setTimeout(() => {
      moveRight();
    }, 4000);
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      SLIDES?.removeEventListener("mousedown", handleMouseDown);
      SLIDES?.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [slideMargin, count]);

  useEffect(() => {
    NODES = document.querySelectorAll(".slide");
    SLIDES = document.querySelector("#slideList");
    handleResize();
  }, []);

  return { slideList, slideMargin, moveRight, moveLeft };
};

export { useSlide };
