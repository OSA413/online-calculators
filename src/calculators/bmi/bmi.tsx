import React, {useEffect, useState} from "react";
import {BmiResult} from "../../components/bmi/BmiResult";

export const Bmi: React.FC = () => {
    const [result, setResult] = useState<string>(BmiResult.result);
    return <>
        <label>Вес в килограммах</label>
        <input type={"number"} className='weight' onChange={e => {
            changingValues(parseFloat(e.target.value), 'weight')
            setResult(BmiResult.result);
        }}/>
        <label>Рост в сантиметрах</label>
        <input type={"number"} className='height' onChange={e => {
            changingValues(parseFloat(e.target.value), 'height');
            setResult(BmiResult.result);
        }}/>
        <div>
            { result }
        </div>
    </>
}

function changingValues(value: number, parameter: string): void {
    if (value > 0 && parameter === 'height'){
        BmiResult.height = value;
    } else if (value > 0 && parameter === 'weight'){
        BmiResult.weight = value;
    }
    BmiResult.Calculate();
}