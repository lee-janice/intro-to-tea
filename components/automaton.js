/*
 * https://github.com/bryanmoon1991/cellular-automata
 */
import React, { useState, useCallback, useRef } from "react";
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

export const Automaton = ({ birth, survival, death, numRows, numCols }) => {
    const resetGrid = () => {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0));
        }

        return rows;
    };

    const [grid, setGrid] = useState(() => {
        return resetGrid();
    });

    const [running, setRunning] = useState(false);

    const runningRef = useRef(running);
    runningRef.current = running;
    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return;
        }
        setGrid((grid) => {
            if (typeof birth === "string") {
                birth = birth.split(",").map((item) => parseInt(item));
            }
            if (typeof survival === "string") {
                survival = survival.split(",").map((item) => parseInt(item));
            }
            if (typeof death === "string") {
                death = death.split(",").map((item) => parseInt(item));
            }

            return produce(grid, (gridCopy) => {
                for (let x = 0; x < numRows; x++) {
                    for (let y = 0; y < numCols; y++) {
                        let neighbors = 0;
                        neighborCoordinates.forEach(([a, b]) => {
                            const newX = x + a;
                            const newY = y + b;
                            if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols) {
                                neighbors += grid[newX][newY];
                            }
                        });
                        if (death.includes(neighbors)) {
                            gridCopy[x][y] = 0;
                        } else if (grid[x][y] === 0 && birth.includes(neighbors)) {
                            gridCopy[x][y] = 1;
                        } else if (grid[x][y] === 1 && survival.includes(neighbors)) {
                            gridCopy[x][y] = 1;
                        }

                        // "seeds"
                        // if (grid[x][y] === 1 && neighbors === 2) {
                        //   gridCopy[x][y] = 1;
                        // } else if (grid[x][y] === 0 && neighbors === 2) {
                        //   gridCopy [x][y] = 1;
                        // } else {
                        //   gridCopy[x][y] = 0;
                        // }
                    }
                }
            });
        });

        setTimeout(runSimulation, 200);
    }, [birth, survival, death]);

    return (
        <>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${numCols}, 10px)`,
                }}
            >
                {grid.map((rows, x) =>
                    rows.map((col, y) => (
                        <div
                            onClick={() => {
                                const newGrid = produce(grid, (gridCopy) => {
                                    gridCopy[x][y] = grid[x][y] ? 0 : 1;
                                });
                                setGrid(newGrid);
                            }}
                            key={`${x}-${y}`}
                            style={{
                                width: 10,
                                height: 10,
                                backgroundColor: grid[x][y] ? "black" : undefined,
                                border: "0.5px solid black",
                            }}
                        />
                    ))
                )}
            </div>
            <div style={{ textAlign: "center" }}>
                <button
                    style={{ display: "inline-block", margin: "10px", border: "1px solid black", borderRadius: "5px" }}
                    onClick={() => {
                        setRunning(!running);
                        if (!running) {
                            runningRef.current = true;
                            runSimulation();
                        }
                    }}
                >
                    {running ? "Stop" : "Start"}
                </button>
                <button
                    style={{ display: "inline-block", margin: "10px", border: "1px solid black", borderRadius: "5px" }}
                    onClick={() => setGrid(resetGrid())}
                >
                    Clear
                </button>
                <button
                    style={{ display: "inline-block", margin: "10px", border: "1px solid black", borderRadius: "5px" }}
                    onClick={() => {
                        const rows = [];
                        for (let i = 0; i < numRows; i++) {
                            rows.push(Array.from(Array(numCols), () => (Math.random() < 0.2 ? 1 : 0)));
                        }
                        setGrid(rows);
                    }}
                >
                    Randomize
                </button>
            </div>
        </>
    );
};

export default Automaton;
