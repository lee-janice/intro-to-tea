/* SOURCE:
/* https://github.com/yantsishko/slider-from-scratch-reactjs/tree/main */
import React, { useEffect, useState, createContext } from "react";
// import PropTypes from "prop-types";
import SlidesList from "./image-slider/slides-list";

export const SliderContext = createContext();

const Slider = function ({ images, width, height, autoPlay, autoPlayTime }) {
    const [items, setItems] = useState([]);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        setItems(JSON.parse(images.value));
    }, []);

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);
    };

    const goToSlide = (number) => {
        setSlide(number % items.length);
    };

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, autoPlayTime);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide]); // when images uploaded or slide changed manually we start timer

    return (
        <div style={{ width, height }} className="slider">
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    slidesCount: items.length,
                    slideNumber: slide,
                    items,
                }}
            >
                {/* <Arrows /> */}
                <div className="arrows">
                    <div className="arrow left" onClick={() => changeSlide(-1)}>
                        ←
                    </div>
                    <div className="arrow right" onClick={() => changeSlide(1)}>
                        →
                    </div>
                </div>
                <SlidesList />
                {/* <Dots /> */}
            </SliderContext.Provider>
        </div>
    );
};

// Slider.propTypes = {
//     autoPlay: PropTypes.bool,
//     autoPlayTime: PropTypes.number,
//     width: PropTypes.string,
//     height: PropTypes.string,
// };

// Slider.defaultProps = {
//     autoPlay: false,
//     autoPlayTime: 5000,
//     width: "100%",
//     height: "100%",
// };

export default Slider;
