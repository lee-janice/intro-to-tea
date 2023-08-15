import React, { useState } from "react";
import DragAndDrop from "../drag-and-drop";

const Q2 = function ({}) {
    const [answer, setAnswer] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [correct, setCorrect] = useState(false);
    const handleSubmit = () => {
        setSubmitted(true);
        answer.toString() == ["B", "A", "D", "C"].toString() ? setCorrect(true) : setCorrect(false);
    };
    return (
        <div className="knowledge-check">
            <h2>Question 2</h2>
            Let's compare a cellular automaton to a very, very simplified model of the brain. As a refresher of the
            basics of the brain:
            <br />
            <br />
            <ul>
                <li>The brain consists of neurons (among other things).</li>
                <li>
                    Neurons carry messages through the brain by firing electrical signals (called action potentials) to
                    other neurons. This action is all-or-nothing: the neuron either fires or it does not fire.
                </li>
                <li>Neurons communicate via synapses.</li>
            </ul>
            Using this information, can you connect the parts of a cellular automaton to analogous parts of the brain?
            <br />
            <br />
            <DragAndDrop answer={answer} setAnswer={setAnswer} />
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

export default Q2;
