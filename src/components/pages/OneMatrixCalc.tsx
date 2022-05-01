import React from 'react';
import {TwoMatrixCalculator} from "../matrix/TwoMatrixCalculator";
import {OneMatrixCalculator} from "../matrix/OneMatrixCalculator";

export function OneMatrixCalc(){
    return(
        <div className='matrix'>
            <div>
                <OneMatrixCalculator />
            </div>
        </div>
    )
}