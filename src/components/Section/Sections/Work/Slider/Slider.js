import React, { useState } from "react"
import BtnSlider from "./BtnSlider";

export default function Slider (isDEV, isSEO) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {

  }

  const prevSlide = () => {

  }

  return (
    <>
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </>
  );
}
