import React, { useState } from "react";

const AutomatonExample = function ({ cols, cells, answer }) {
    const [selection, setSelection] = useState("");
    return (
        <div style={{ display: "inline-block", width: "100%" }}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${cols}, 50px)`,
                    float: "left",
                }}
            >
                {cells.map((cell) => {
                    switch (cell) {
                        case 0:
                            return <div className="cell" />;
                        case 1:
                            return <div className="cell" style={{ backgroundColor: "black" }} />;
                        case 2:
                            return <div className="cell" style={{ backgroundColor: "red" }} />;
                        default:
                            return;
                    }
                })}
            </div>
            <div style={{ float: "left", marginLeft: "50px", cursor: "pointer" }} onClick={() => setSelection("1")}>
                Alive
                <div className="cell" style={{ backgroundColor: "black" }} />
            </div>
            <div style={{ float: "left", marginLeft: "50px", cursor: "pointer" }} onClick={() => setSelection("0")}>
                Dead
                <div className="cell" />
            </div>
            <br />
            <div
                style={{
                    display: selection === "" ? "none" : "inline-block",
                    margin: "25px 0px 0px 50px",
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "5px",
                }}
            >
                {selection === answer
                    ? "✅ Great job! The cell would be " + (answer === "0" ? "Dead." : "Alive.")
                    : "❌ Nice try! The correct answer was " + (answer === "0" ? "Dead." : "Alive.")}
            </div>
        </div>
    );
};

export default AutomatonExample;
