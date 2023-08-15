import React, { useState } from "react";
import Automaton from "../../../../components/automaton";

const Q4 = function ({}) {
    const [birth, setBirth] = useState("");
    const [survival, setSurvival] = useState("");
    const [death, setDeath] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [correct, setCorrect] = useState(false);
    const handleSubmit = () => {
        setSubmitted(true);
        if (
            birth === "3" &&
            (survival === "2,3" || survival === "3,2") &&
            death.split(",").sort().toString() === [0, 1, 4, 5, 6, 7, 8].toString()
        ) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    };
    return (
        <div className="knowledge-check">
            <h2>Question 4</h2>
            Do you remember the rules for the Game of Life?
            <br />
            <br />
            <ul>
                <li>
                    A cell will become alive if it has{" "}
                    <input
                        type="text"
                        style={{
                            width: "125px",
                            autoComplete: "off",
                        }}
                        onChange={(e) => {
                            setBirth(e.target.value);
                        }}
                    />{" "}
                    live neighbors.
                </li>
                <li>
                    A cell will stay alive if it has{" "}
                    <input
                        type="text"
                        style={{
                            width: "125px",
                            autoComplete: "off",
                        }}
                        onChange={(e) => setSurvival(e.target.value)}
                    />{" "}
                    live neighbors.
                </li>
                <li>
                    A cell will die if it has{" "}
                    <input
                        type="text"
                        style={{
                            width: "125px",
                            autoComplete: "off",
                        }}
                        onChange={(e) => setDeath(e.target.value)}
                    />{" "}
                    live neighbors.
                </li>
            </ul>
            Use the automaton below to test your answer before submitting.
            <br />
            <br />
            <Automaton birth={birth} survival={survival} death={death} numRows={25} numCols={60} />
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

export default Q4;
