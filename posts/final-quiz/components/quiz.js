import React, { useState } from "react";
import Q1 from "./questions/q1";
import Q2 from "./questions/q2";
import Q3 from "./questions/q3";
import Q4 from "./questions/q4";
import Q5 from "./questions/q5";

const Quiz = function ({}) {
    [score, setScore] = useState(0);
    return (
        <section>
            <Q1 />
            <Q2 />
            <Q3 />
            <Q4 />
            <Q5 />
        </section>
    );
};

export default Quiz;
