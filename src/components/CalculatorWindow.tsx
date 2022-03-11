import React, {ReactComponentElement, useState} from "react";

export const CalculatorWindow: React.FC<{
    calculator: React.FC
}>= () => {
    const [content, setContent] = useState([]);
    return <div>
        {content}
    </div>
}

function setCalculator (calculator: React.Component) { //interface here?

}