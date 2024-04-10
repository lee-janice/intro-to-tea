import React, { useState } from "react";

const KC = function ({}) {
    const [withering, setWithering] = useState("");
    const [bruising, setBruising] = useState("");
    const [oxidizing, setOxidizing] = useState("");
    const [fixing, setFixing] = useState("");
    // const [wrapping, setWrapping] = useState("");
    const [drying, setDrying] = useState("");
    const [fermenting, setFermenting] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [correct, setCorrect] = useState(false);
    const handleSubmit = () => {
        setSubmitted(true);
        if (
            (withering.toLowerCase() === "withering" || withering.toLowerCase() === "wither") &&
            (bruising.toLowerCase() === "bruising" || bruising.toLowerCase() === "bruise") &&
            (oxidizing.toLowerCase() === "oxidizing" || oxidizing.toLowerCase() === "oxidize") &&
            (fixing.toLowerCase() === "fixing" || fixing.toLowerCase() === "fix") &&
            // (wrapping.toLowerCase() === "wrapping" || wrapping.toLowerCase() === "wrap") &&
            (drying.toLowerCase() === "withering" || drying.toLowerCase() === "dry") &&
            (fermenting.toLowerCase() === "fermenting" || fermenting.toLowerCase() === "ferment")
        ) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    };

    return (
        <div className="knowledge-check">
            <h2>Knowledge Check</h2>
            Can you identify the steps in tea processing?
            <br />
            <br />
            <ol>
                <li>
                    <input
                        type="text"
                        style={{ width: "125px", autoComplete: "off" }}
                        onChange={(e) => {
                            setFixing(e.target.value);
                        }}
                    />{" "}
                    Stopping the oxidation of the tea leaves.{" "}
                </li>
                <li>
                    <input
                        type="text"
                        style={{ width: "125px", autoComplete: "off" }}
                        onChange={(e) => setFermenting(e.target.value)}
                    />{" "}
                    Exposing the tea to humidity and oxygen for several months to years.{" "}
                </li>
                <li>
                    <input
                        type="text"
                        style={{ width: "125px", autoComplete: "off" }}
                        onChange={(e) => setWithering(e.target.value)}
                    />{" "}
                    Controlling the process of wilting to remove moisture and change the chemical structure of the
                    leaves.{" "}
                </li>
                {/* <li>
                    {" "}
                    <input
                        type="text"
                        style={{ width: "125px", autoComplete: "off" }}
                        onChange={(e) => setWrapping(e.target.value)}
                    />{" "}
                </li> */}
                <li>
                    <input
                        type="text"
                        style={{ width: "125px", autoComplete: "off" }}
                        onChange={(e) => setBruising(e.target.value)}
                    />{" "}
                    Lightly damaging the leaves to promote and accelerate oxidation.{" "}
                </li>
                <li>
                    <input
                        type="text"
                        style={{ width: "125px", autoComplete: "off" }}
                        onChange={(e) => setDrying(e.target.value)}
                    />{" "}
                    Reducing the moisture level of the leaves to 2-3%.{" "}
                </li>
                <li>
                    <input
                        type="text"
                        style={{ width: "125px", autoComplete: "off" }}
                        onChange={(e) => setOxidizing(e.target.value)}
                    />{" "}
                    Exposing enzymes in the leaf to air.{" "}
                </li>
            </ol>
            <button className="submit" onClick={handleSubmit}>
                Submit
            </button>
            <div style={{ clear: "both" }}>
                {submitted ? (correct ? "✅ Great job, that's correct!" : "❌ Nice try, why don't you try again?") : ""}
            </div>
        </div>
    );
};

export default KC;
