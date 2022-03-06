import * as React from "react";
import {InputHTMLAttributes} from "react";
import classes from "./Cell.module.css";

export const Cell: React.FC<InputHTMLAttributes<HTMLInputElement>> = () =>
{
    return  <input type={"number"}
        className={classes.root}
    />
}