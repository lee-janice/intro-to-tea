import React, { useState } from "react";

const Cell = function ({ cell, cells, setCells, colors, interactive, i }) {
    const [state, setState] = useState(cell);
    return (
        <div
            className="cell"
            onClick={() => {
                if (interactive) {
                    setCells(
                        cells.map((cell, j) => {
                            return i === j ? (state + 1) % 2 : cell;
                        })
                    );
                    if (state === 0 || state === 1) {
                        setState((state + 1) % 2);
                    }
                }
            }}
            style={{
                backgroundColor: colors[state],
            }}
        />
    );
};

export default Cell;
