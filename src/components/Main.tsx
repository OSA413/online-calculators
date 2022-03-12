import React from "react";
import {CalculatorList} from "./CalculatorList";
import classes from "./Main.module.css";
import CalculatorWindow from "./CalculatorWindow";

export const Main: React.FC = () => {
    return <div className={classes.root}>
        {CalculatorWindow.getCalculator()}
        {<CalculatorList/>}
    </div>
}