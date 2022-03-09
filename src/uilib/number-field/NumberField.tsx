import * as React from "react";
import {InputHTMLAttributes} from "react";
import classes from "./NumberField.module.css";

export const NumberField:React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {

    return <input className={classes.root} {...props} type={"number"}  />
}