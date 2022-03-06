import * as React from "react";
import {ButtonHTMLAttributes, InputHTMLAttributes} from "react";
import classes from "./Operator.module.css";

export const Operator: React.FC<
    ButtonHTMLAttributes<HTMLButtonElement>
    > = React.memo((props) => {
    return <button className={classes.root} {...props} />
})