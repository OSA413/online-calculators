import * as React from "react";
import {InputHTMLAttributes, useState} from "react";
import classes from "./Cell.module.css";

export const Cell: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) =>
{
    const [newValue, setNewValue] = useState<number>(0);
    console.log(newValue)
    return  <input {...props} type={"number"} value={newValue} onChange={event => setNewValue(parseInt(event.target.value))}
                   className={classes.root}

    />
}