/* SOURCE:
/* https://github.com/yantsishko/slider-from-scratch-reactjs/tree/main */
import React from "react";

export default function Slide({ data: { url, title } }) {
    return (
        <div className="slide">
            <img src={url} className="slide-image" />
            <div className="slide-title">
                <b>{title}</b>
            </div>
        </div>
    );
}
