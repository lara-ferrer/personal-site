import React from 'react'
import leftArrow from "../../../../../../images/left-arrow.svg"
import rightArrow from "../../../../../../images/right-arrow.svg"
import "./btn-slider.scss";

export default function Work({direction, moveSlide}) {
    return (
        <span className="m-btn-arrow" onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            <img src={direction === "next" ? rightArrow : leftArrow} className="a-arrow-left" />
        </span>
    );
}