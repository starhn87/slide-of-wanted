/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import { useSlide } from "../hooks/useSlide";
import "../assets/scss/slide.scss";
import Slide from "./Slide";
import Buttons from "./Buttons";

const Slider: React.FC = () => {
  const slides = useRef<HTMLDivElement>(null);
  const { list, slideMargin, width, moveLeft, moveRight } = useSlide(slides);

  return (
    <div className="TopBanner">
      <div className="slider initialized" dir="ltr">
        <div className="list">
          <div
            id="slideList"
            ref={slides}
            className="track list sliding"
            style={{
              transform: `translate3d(${slideMargin}px, 0px, 0px)`,
            }}
          >
            {list.map((s) => (
              <Slide key={uuid()} width={width} {...s}></Slide>
            ))}
          </div>
        </div>
      </div>
      <Buttons moveLeft={moveLeft} moveRight={moveRight} />
    </div>
  );
};

export default Slider;
