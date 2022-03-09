import * as React from "react";
import {ButtonHTMLAttributes} from "react";
import classes from "./Operator.module.css";

export const Operator: React.FC<
    ButtonHTMLAttributes<HTMLButtonElement>
    > = ((props) => {
    return <button className={classes.root} {...props}  />
})