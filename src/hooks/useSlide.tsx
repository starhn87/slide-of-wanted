import { useEffect, useState } from "react";

const useSlide: any = () => {
  const SIZE = -1060;
  const [slide, setSlide] = useState(0);

  const moveRight = () => {
    console.log("catch!");
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
    console.log(slide);
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
  };

  useEffect(() => {
    const slider = setTimeout(() => {
      moveRight();
    }, 3000);

    return () => clearTimeout(slider);
  }, [slide]);

  return { slide, moveRight, moveLeft };
};

export { useSlide };
