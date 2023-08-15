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
        margin: "5px",
        textAlign: "center",
        height: "225px",
        width: "175px",
        border: "1px solid black",
        borderRadius: "5px",
    };

    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}

const DragAndDrop = function ({ answer, setAnswer }) {
    const [p1, setParent1] = useState(null);
    const [p2, setParent2] = useState(null);
    const [p3, setParent3] = useState(null);
    const [p4, setParent4] = useState(null);
    const d1 = <Draggable id="1">Cell</Draggable>;
    const d2 = <Draggable id="2">Grid</Draggable>;
    const d3 = <Draggable id="3">Neighborhood</Draggable>;
    const d4 = <Draggable id="4">State</Draggable>;

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(3, 1fr)` }}>
                <div>
                    {p1 === null ? d1 : null}
                    {p2 === null ? d2 : null}
                    {p3 === null ? d3 : null}
                    {p4 === null ? d4 : null}
                </div>
                <Droppable key={"A"} id={"A"}>
                    <img
                        src="../../../../static/images/brain.webp"
                        style={{ width: "auto", height: "40%", marginTop: "15px" }}
                    />
                    Brain
                    <br />
                    {p1 === "A" ? d1 : ""}
                    {p2 === "A" ? d2 : ""}
                    {p3 === "A" ? d3 : ""}
                    {p4 === "A" ? d4 : ""}
                    <br />
                </Droppable>
                <Droppable key={"B"} id={"B"}>
                    <img
                        src="../../../../static/images/neuron.webp"
                        style={{ width: "auto", height: "40%", marginTop: "15px" }}
                    />
                    Neuron
                    <br />
                    {p1 === "B" ? d1 : ""}
                    {p2 === "B" ? d2 : ""}
                    {p3 === "B" ? d3 : ""}
                    {p4 === "B" ? d4 : ""}
                    <br />
                </Droppable>
                <Droppable key={"C"} id={"C"}>
                    <img
                        src="../../../../static/images/action-potential.jpg"
                        style={{ width: "auto", height: "40%", marginTop: "15px" }}
                    />
                    Firing vs. resting
                    <br />
                    {p1 === "C" ? d1 : ""}
                    {p2 === "C" ? d2 : ""}
                    {p3 === "C" ? d3 : ""}
                    {p4 === "C" ? d4 : ""}
                    <br />
                </Droppable>
                <Droppable key={"D"} id={"D"}>
                    <img
                        src="../../../../static/images/neurons.jpg"
                        style={{ width: "auto", height: "40%", marginTop: "15px" }}
                    />
                    Neurons connected via synapses
                    <br />
                    {p1 === "D" ? d1 : ""}
                    {p2 === "D" ? d2 : ""}
                    {p3 === "D" ? d3 : ""}
                    {p4 === "D" ? d4 : ""}
                    <br />
                </Droppable>
                <br />
            </div>
        </DndContext>
    );

    function handleDragEnd(event) {
        const { active, over } = event;
        switch (active.id) {
            case "1":
                setParent1(over ? over.id : null);
                setAnswer([over.id, p2, p3, p4]);
                break;
            case "2":
                setParent2(over ? over.id : null);
                setAnswer([p1, over.id, p3, p4]);
                break;
            case "3":
                setParent3(over ? over.id : null);
                setAnswer([p1, p2, over.id, p4]);
                break;
            case "4":
                setParent4(over ? over.id : null);
                setAnswer([p1, p2, p3, over.id]);
                break;
        }
    }
};

export default DragAndDrop;
