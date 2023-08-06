/* SOURCE:
/* https://github.com/yantsishko/slider-from-scratch-reactjs/tree/main */
import React, { useContext } from "react";
import Slide from "./slide.js";
import { SliderContext } from "../slider.js";

const SlidesList = function () {
    const { slideNumber, items } = useContext(SliderContext);

    return (
        <div className="slide-list" style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
            {items.map((slide, index) => (
                <Slide key={index} data={slide} />
            ))}
        </div>
    );
};

export default SlidesList;
