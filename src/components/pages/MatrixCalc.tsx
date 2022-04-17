import React from 'react';
import {TwoMatrixCalculator} from "../matrix/TwoMatrixCalculator";

export function MatrixCalc(){
    return(
        <div className='matrix'>
            <div>
                <TwoMatrixCalculator />
            </div>
        </div>
    )
}