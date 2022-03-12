import React, {ButtonHTMLAttributes, createRef, useState} from 'react';
import CalculatorWindow from "../../components/CalculatorWindow";

export const CalculatorListItem: React.FC <ButtonHTMLAttributes<HTMLButtonElement>> = (
    props, onClickRender: React.Component
) => {
    return <button
        {...props}
        onClick={() => CalculatorWindow.setCalculator(onClickRender)}
    >some content</button>
}

