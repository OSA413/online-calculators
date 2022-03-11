import React, {ButtonHTMLAttributes, createRef, useState} from 'react';

export const CalculatorListItem: React.FC <ButtonHTMLAttributes<HTMLButtonElement>> = (
    props, onClickRender: React.Component
) => {
    const calcWindow = createRef<CalculatorWindow>()
    return <button
        {...props}
        onClick={() => )}
    >{content}</button>
}

