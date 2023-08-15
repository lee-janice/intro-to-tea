import React, { useState } from "react";
import Grid from "../grid";
import { produce } from "immer";

const neighborCoordinates = [
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
    [1, 0],
];

const Q5 = function ({}) {
    const [cells, setCells] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [newCells, setNewCells] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [correct, setCorrect] = useState(false);
    const handleSubmit = () => {
        setSubmitted(true);
        const newCells = produce(cells, (cellsCopy) => {
            for (let x = 0; x < 5; x++) {
                for (let y = 0; y < 5; y++) {
                    const idx = y * 5 + x;
                    let neighbors = 0;
                    neighborCoordinates.forEach(([a, b]) => {
                        const newX = (x + a) % 5;
                        const newY = (y + b) % 5;
                        if (newX >= 0 && newX < 5 && newY >= 0 && newY < 5) {
                            neighbors += cells[newY * 5 + newX];
                        }
                    });
                    if ([0, 1, 4, 5, 6, 7, 8].includes(neighbors)) {
                        cellsCopy[idx] = 0;
                    } else if (cells[idx] === 0 && [3].includes(neighbors)) {
                        cellsCopy[idx] = 1;
                    } else if (cells[idx] === 1 && [2, 3].includes(neighbors)) {
                        cellsCopy[idx] = 1;
                    }
                }
            }
        });
        cells.toString() == newCells.toString() ? setCorrect(true) : setCorrect(false);
        setNewCells(newCells);
        console.log(newCells);
    };
    return (
        <div className="knowledge-check">
            <h2>Question 5</h2>
            Draw a "still life" organism in the grid below.
            <br />
            <br />
            <Grid cols="5" interactive={true} colors={["white", "black"]} cells={cells} setCells={setCells} />
            <br />
            <br />
            <button className="submit" onClick={handleSubmit}>
                Submit
            </button>
            <br />
            <br />
            <div style={{ clear: "both" }}>
                {submitted ? (
                    correct ? (
                        <div>
                            {" "}
                            ✅ Great job, that's correct! This is the next state of your automaton: <br /> <br />{" "}
                            <Grid
                                cols="5"
                                interactive={false}
                                colors={["white", "black"]}
                                cells={newCells}
                                setCells={() => null}
                            />{" "}
                        </div>
                    ) : (
                        <div>
                            {" "}
                            ❌ Nice try, why don't you try again? This is the next state of your automaton: <br />{" "}
                            <br />{" "}
                            <Grid
                                cols="5"
                                interactive={false}
                                colors={["white", "black"]}
                                cells={newCells}
                                setCells={() => null}
                            />{" "}
                        </div>
                    )
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Q5;
