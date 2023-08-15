import React, { useState } from "react";
import Grid from "../grid";

const Q1 = function ({}) {
    const [cells, setCells] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [submitted, setSubmitted] = useState(false);
    const [correct, setCorrect] = useState(false);
    const handleSubmit = () => {
        setSubmitted(true);
        cells.toString() == [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 2, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0].toString()
            ? setCorrect(true)
            : setCorrect(false);
    };
    return (
        <div className="knowledge-check">
            <h2>Question 1</h2>
            Can you highlight the cells that make up the neighborhood of the red cell?
            <br />
            <br />
            <Grid
                cols="5"
                interactive={true}
                colors={["white", "rgba(151, 151, 112, 0.4)", "red"]}
                cells={cells}
                setCells={setCells}
            />
            <br />
            <br />
            <button className="submit" onClick={handleSubmit}>
                Submit
            </button>
            <br />
            <br />
            <div style={{ clear: "both" }}>
                {submitted ? (correct ? "✅ Great job, that's correct!" : "❌ Nice try, why don't you try again?") : ""}
            </div>
        </div>
    );
};

export default Q1;
