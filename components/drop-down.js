import React from "react";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

const DropDown = function ({ items }) {
    return (
        <Accordion allowZeroExpanded={true}>
            {items.map((item, i) => {
                return (
                    <AccordionItem key={item.heading}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <b>{item.heading}</b>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>{item.panel}</AccordionItemPanel>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};

export default DropDown;
