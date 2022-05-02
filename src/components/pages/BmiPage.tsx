import React from "react";
import {BmiCalculator} from "../bmi/BmiCalculator"

const BmiPage = (): JSX.Element => {
    return <div className='Bmi'>
        <BmiCalculator/>
    </div>
}

export default BmiPage;