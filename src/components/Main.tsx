import React from "react";
import {CalculatorList} from "./CalculatorList";
import {CalculatorWindow} from "./CalculatorWindow";
import classes from "./Main.module.css";

export const Main: React.FC = () => {
    return <div className={classes.root}>
        {<CalculatorWindow/>}
        {<CalculatorList/>}
    </div>
}