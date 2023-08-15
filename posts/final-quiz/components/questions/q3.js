import React, { useState } from "react";
import Grid from "../grid";

const Q3 = function ({}) {
    const [cells, setCells] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [submitted, setSubmitted] = useState(false);
    const [correct, setCorrect] = useState(false);
    const handleSubmit = () => {
        setSubmitted(true);
        cells.toString() == [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0].toString()
            ? setCorrect(true)
            : setCorrect(false);
    };
    return (
        <div className="knowledge-check">
            <h2>Question 3</h2>
            Suppose you have an automaton with the initial configuration shown below.
            <br />
            <br />
            <Grid
                cols="5"
                interactive={false}
                colors={["white", "black"]}
                cells={[0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]}
                setCells={() => null}
            />
            <br />
            <br />
            Given these rules, what will be the next state of the automaton?
            <br />
            <br />
            <span style={{ border: "1px solid black", padding: "15px", borderRadius: "5px", display: "inline-block" }}>
                <b>Rule 1:</b> A cell with exactly 5 live neighbors becomes alive.
                <br />
                <b>Rule 2:</b> If a live cell has more than 5 live neighbors, it dies.
                <br />
                <b>Rule 3:</b> A cell with less than 5 live neighbors remains in the same state.
            </span>
            <br />
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
                {submitted ? (correct ? "✅ Great job, that's correct!" : "❌ Nice try, why don't you try again?") : ""}
            </div>
        </div>
    );
};

export default Q3;
