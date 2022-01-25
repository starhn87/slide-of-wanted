/* eslint-disable react/require-default-props */
import React from "react";
import "../assets/scss/slide.scss";

type Button = {
  moveRight: () => void;
  moveLeft: () => void;
};

const Buttons: React.FC<Button> = ({ moveRight, moveLeft }) => (
  <>
    <button
      type="button"
      id="nextBtn"
      className="topBannerArrow topBannerNextArrow"
      aria-label="nextArrowButton"
      onClick={moveRight}
    >
      <span className="svgIconRoot">
        <svg className="svgIconRoot2" viewBox="0 0 18 18">
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
        </svg>
      </span>
    </button>
    <button
      type="button"
      id="prevBtn"
      className="topBannerArrow topBannerPrevArrow"
      aria-label="prevArrowButton"
      onClick={moveLeft}
    >
      <span className="svgIconRoot">
        <svg className="svgIconRoot2" viewBox="0 0 18 18">
          <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
        </svg>
      </span>
    </button>
  </>
);

export default Buttons;
