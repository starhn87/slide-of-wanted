/* eslint-disable react/require-default-props */
import React from "react";
import "../assets/scss/slide.scss";

export interface SlideProvider {
  imgSrc: string;
  title: string;
  subtitle: string;
  center?: boolean;
}

const Slide: React.FC<SlideProvider> = ({
  imgSrc,
  title,
  subtitle,
  center,
}) => (
  <div className={`slide ${center ? "center" : ""}`}>
    <div>
      <div className="slideContent">
        <div className={`inactivedImage ${center ? "activedImage" : ""}`}>
          <div>
            <img src={imgSrc} alt={title} className="imageClass" />
          </div>
        </div>
        <div className={`inactivedInfo ${center ? "activedInfo" : ""}`}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <hr className="infoDivider infoDisplay" />
          <div className="buttonRoot buttonText buttonTextPrimary buttonMediumSize directButton">
            <span className="buttonLabel">
              바로가기
              <span className="buttonEndIcon">
                <span className="svgIconRoot">
                  <svg className="svgIconRoot2" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Slide;
