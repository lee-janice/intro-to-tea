import React, { useState } from "react";
import Cell from "./cell.js";

const Grid = function ({ cols, interactive, colors, cells, setCells }) {
    return (
        <div style={{ display: "inline-block", width: "100%" }}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${cols}, 50px)`,
                }}
            >
                {cells.map((cell, i) => {
                    return (
                        <Cell
                            cell={cell}
                            cells={cells}
                            setCells={setCells}
                            colors={colors}
                            interactive={interactive}
                            i={i}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Grid;
