import React from "react";
import {Typography} from "@mui/material";
import logo from '../../main.png';

const MainPage = (): JSX.Element => {
    return <div className={"home"}>
        <Typography variant="h4" align={"center"}>
           Онлайн калькуляторы!
        </Typography>
        <img className={"home-img"} src={logo}/>
    </div>
}

export default MainPage;