import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";

import { useDroppable } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function Draggable(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
    });
    const style = {
        display: "inline-block",
        margin: "5px",
        // height: "32px",
        // lineHeight: "50%",
        border: "1px solid black",
        borderRadius: "5px",
        transform: CSS.Translate.toString(transform),
    };

    return (
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </button>
    );
}

function Droppable(props) {
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
    });
    const style = {
        float: "left",
        margin: "5px",
        textAlign: "center",
        height: "250px",
        width: "200px",
        border: "1px solid black",
        borderRadius: "5px",
    };

    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}

const DragAndDrop = function ({}) {
    const [p1, setParent1] = useState(null);
    const [p2, setParent2] = useState(null);
    const [p3, setParent3] = useState(null);
    const [p4, setParent4] = useState(null);
    const [p5, setParent5] = useState(null);
    const d1 = <Draggable id="1">Still life</Draggable>;
    const d2 = <Draggable id="2">Still life</Draggable>;
    const d3 = <Draggable id="3">Oscillator</Draggable>;
    const d4 = <Draggable id="4">Oscillator</Draggable>;
    const d5 = <Draggable id="5">Spaceship</Draggable>;

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div
                style={{
                    float: "left",
                    margin: "5px",
                    textAlign: "center",
                    height: "250px",
                    width: "200px",
                }}
            >
                {p1 === null ? d1 : null}
                {p2 === null ? d2 : null}
                {p3 === null ? d3 : null}
                {p4 === null ? d4 : null}
                {p5 === null ? d5 : null}
            </div>
            <Droppable key={"A"} id={"A"}>
                <img src="../static/images/beehive.png" style={{ width: "auto", height: "60%", marginTop: "15px" }} />
                {p1 === "A" ? d1 : ""}
                {p2 === "A" ? d2 : ""}
                {p3 === "A" ? d3 : ""}
                {p4 === "A" ? d4 : ""}
                {p5 === "A" ? d5 : ""}
                <br />
                {[p1, p2].includes("A") ? "✅ Correct!" : ""}
                {[p3, p4, p5].includes("A") ? "❌ Incorrect!" : ""}
            </Droppable>
            <Droppable key={"B"} id={"B"}>
                <img src="../static/images/blinker.jpg" style={{ width: "auto", height: "60%", marginTop: "15px" }} />
                {p1 === "B" ? d1 : ""}
                {p2 === "B" ? d2 : ""}
                {p3 === "B" ? d3 : ""}
                {p4 === "B" ? d4 : ""}
                {p5 === "B" ? d5 : ""}
                <br />
                {[p3, p4].includes("B") ? "✅ Correct!" : ""}
                {[p1, p2, p5].includes("B") ? "❌ Incorrect!" : ""}
            </Droppable>
            <Droppable key={"C"} id={"C"}>
                <img src="../static/images/block.png" style={{ width: "auto", height: "60%", marginTop: "15px" }} />
                {p1 === "C" ? d1 : ""}
                {p2 === "C" ? d2 : ""}
                {p3 === "C" ? d3 : ""}
                {p4 === "C" ? d4 : ""}
                {p5 === "C" ? d5 : ""}
                <br />
                {[p1, p2].includes("C") ? "✅ Correct!" : ""}
                {[p3, p4, p5].includes("C") ? "❌ Incorrect!" : ""}
            </Droppable>
            <Droppable key={"D"} id={"D"}>
                <img src="../static/images/glider.jpg" style={{ width: "auto", height: "60%", marginTop: "15px" }} />
                {p1 === "D" ? d1 : ""}
                {p2 === "D" ? d2 : ""}
                {p3 === "D" ? d3 : ""}
                {p4 === "D" ? d4 : ""}
                {p5 === "D" ? d5 : ""}
                <br />
                {[p5].includes("D") ? "✅ Correct!" : ""}
                {[p1, p2, p3, p4].includes("D") ? "❌ Incorrect!" : ""}
            </Droppable>
            <Droppable key={"E"} id={"E"}>
                <img src="../static/images/toad.jpg" style={{ width: "auto", height: "60%", marginTop: "15px" }} />
                {p1 === "E" ? d1 : ""}
                {p2 === "E" ? d2 : ""}
                {p3 === "E" ? d3 : ""}
                {p4 === "E" ? d4 : ""}
                {p5 === "E" ? d5 : ""}
                <br />
                {[p3, p4].includes("E") ? "✅ Correct!" : ""}
                {[p1, p2, p5].includes("E") ? "❌ Incorrect!" : ""}
            </Droppable>
            <br />
        </DndContext>
    );

    function handleDragEnd(event) {
        const { active, over } = event;
        switch (active.id) {
            case "1":
                setParent1(over ? over.id : null);
                break;
            case "2":
                setParent2(over ? over.id : null);
                break;
            case "3":
                setParent3(over ? over.id : null);
                break;
            case "4":
                setParent4(over ? over.id : null);
                break;
            case "5":
                setParent5(over ? over.id : null);
                break;
        }
    }
};

export default DragAndDrop;
