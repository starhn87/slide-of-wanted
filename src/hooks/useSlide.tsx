import { MutableRefObject, useEffect, useMemo, useState } from "react";
import Contents from "../assets/Data.json";
import { SlideProvider } from "../components/Slide";

interface Provider {
  list: SlideProvider[];
  slideMargin: number;
  width: number;
  moveRight: () => void;
  moveLeft: () => void;
}

const DEFAULT_SLIDING_WIDTH = 1084;
const DEFAULT_SLIDE_SIZE = 1085;
const STANDARD_SCREEN_WIDTH = 1200;

const useSlide = (
  slides: MutableRefObject<HTMLDivElement | null>
): Provider => {
  const [size, setSize] = useState(
    window.innerWidth < STANDARD_SCREEN_WIDTH
      ? -window.innerWidth
      : -DEFAULT_SLIDING_WIDTH
  );
  const [count, setCount] = useState(2);
  const [slideMargin, setSlideMargin] = useState(
    window.innerWidth < STANDARD_SCREEN_WIDTH
      ? -window.innerWidth * count + 195
      : size * count + ((window.innerWidth - STANDARD_SCREEN_WIDTH) * 14) / 29.5
  );
  const [list, setList] = useState<SlideProvider[]>([]);
  const [width, setWidth] = useState(0);
  let startPos = 0;
  let offset = 0;
  let swiping = false;
  let timer: NodeJS.Timeout;

  const slideList = useMemo(() => {
    const list = Contents.data;
    if (Contents.data.length > 2) {
      list.unshift(Contents.data[Contents.data.length - 1]);
      list.unshift(Contents.data[Contents.data.length - 2]);
      list.push(Contents.data[2]);
      list.push(Contents.data[3]);
    }

    return list;
  }, []);

  const swipe = () => {
    (slides as MutableRefObject<HTMLDivElement>).current.addEventListener(
      "mousedown",
      handleMouseDown
    );
    (slides as MutableRefObject<HTMLDivElement>).current.addEventListener(
      "mousemove",
      handleMouseMove
    );
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

      (slides as MutableRefObject<HTMLDivElement>).current.setAttribute(
        "style",
        `transform: translate3d(${slideMargin + offset}px, 0, 0);`
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
      (slides as MutableRefObject<HTMLDivElement>).current.setAttribute(
        "style",
        `transform: translate3d(${slideMargin}px, 0, 0);`
      );

      clearTimeout(timer);
      timer = setTimeout(() => {
        moveRight();
      }, 4000);
    }
  };

  const moveRight = () => {
    (slides as MutableRefObject<HTMLDivElement>).current.setAttribute(
      "style",
      `transform: translate3d(${slideMargin + size}px, 0, 0)`
    );

    if (count === slideList.length - 3) {
      setTimeout(() => {
        setCount(2);
        (slides as MutableRefObject<HTMLDivElement>).current.setAttribute(
          "style",
          `transition: 0s; transform: translate3d(${slideMargin}px, 0, 0)`
        );
      }, 500);
    } else {
      setTimeout(() => {
        setCount(count + 1);
        (slides as MutableRefObject<HTMLDivElement>).current.setAttribute(
          "style",
          `transition: 0s; transform: translate3d(${slideMargin}px, 0, 0)`
        );
      }, 500);
    }
  };

  const moveLeft = () => {
    (slides as MutableRefObject<HTMLDivElement>).current.setAttribute(
      "style",
      `transform: translate3d(${slideMargin - size}px, 0, 0)`
    );

    if (count === 2) {
      setTimeout(() => {
        setCount(slideList.length - 3);
        (slides as MutableRefObject<HTMLDivElement>).current.setAttribute(
          "style",
          `transition: 0s; transform: translate3d(${slideMargin}px, 0, 0)`
        );
      }, 500);
    } else {
      setCount(count - 1);
      setTimeout(() => {
        (slides as MutableRefObject<HTMLDivElement>).current.setAttribute(
          "style",
          `transition: 0s; transform: translate3d(${slideMargin}px, 0, 0)`
        );
      }, 500);
    }
  };

  const handleResize = () => {
    if (window.innerWidth < STANDARD_SCREEN_WIDTH) {
      setSlideMargin(-window.innerWidth * count + 195);
      setSize(-window.innerWidth + 95);
      setWidth(window.innerWidth - 95);
      (slides as MutableRefObject<HTMLDivElement>).current.setAttribute(
        "style",
        `width: ${width * slideList.length}px; transform: translate3d(${
          -window.innerWidth * count + 195
        }px, 0, 0)`
      );
    } else if (window.innerWidth === STANDARD_SCREEN_WIDTH) {
      setSlideMargin(-DEFAULT_SLIDE_SIZE * count + 10);
      setSize(-DEFAULT_SLIDING_WIDTH);
      setWidth(1060);
      (slides as MutableRefObject<HTMLDivElement>).current.setAttribute(
        "style",
        `width: ${
          DEFAULT_SLIDE_SIZE * slideList.length
        }px; transform: translate3d(${
          -DEFAULT_SLIDE_SIZE * count - 100
        }px, 0, 0)`
      );
    } else {
      const margin =
        size * count +
        ((window.innerWidth - STANDARD_SCREEN_WIDTH) * slideList.length) / 29.5;
      setSize(-DEFAULT_SLIDING_WIDTH);
      setSlideMargin(margin);
      setWidth(1060);

      (slides as MutableRefObject<HTMLDivElement>).current.setAttribute(
        "style",
        `width: ${
          (window.innerWidth - STANDARD_SCREEN_WIDTH + DEFAULT_SLIDE_SIZE) *
          slideList.length
        }px; transform: translate3d(${margin}px, 0, 0)`
      );
    }

    setPadding();
  };

  const setPadding = () => {
    const list = document.querySelector(".list");
    if (window.innerWidth < STANDARD_SCREEN_WIDTH) {
      list?.setAttribute("style", `padding: 0 40px`);
    } else {
      list?.setAttribute("style", `padding: 0 50px`);
    }
  };

  const makeList = () => {
    const centerNode: SlideProvider = { ...slideList[count] };
    centerNode.center = true;

    setList([
      ...slideList.slice(count - 2, count),
      centerNode,
      ...slideList.slice(count + 1, count + 3),
    ]);
  };

  useEffect(() => {
    makeList();
    setPadding();

    timer = setTimeout(() => {
      moveRight();
    }, 4000);

    window.addEventListener("resize", handleResize);
    swipe();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      (slides as MutableRefObject<HTMLDivElement>).current.removeEventListener(
        "mousedown",
        handleMouseDown
      );
      (slides as MutableRefObject<HTMLDivElement>).current.removeEventListener(
        "mousemove",
        handleMouseMove
      );
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [count]);

  useEffect(() => {
    handleResize();
  }, [width]);

  return { list, slideMargin, width, moveRight, moveLeft };
};

export { useSlide };
