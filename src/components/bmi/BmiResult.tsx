import React from "react";

export class BmiResult{
    static weight: number
    static height: number
    static result: string

    static Calculate = (): void => {
        if (BmiResult.weight && BmiResult.height) {
            BmiResult.result = String((BmiResult.weight / (BmiResult.height * BmiResult.height)) * 10000);
        } else{
            BmiResult.result = 'Проверьте правильность введённых параметров';
        }
    }
}