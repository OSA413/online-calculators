import React from "react";

export class Bmi {
    static weight: number
    static height: number
    static result: string

    static Calculate = (): void => {
        if (Bmi.weight && Bmi.height) {
            Bmi.result = String(((Bmi.weight / (Bmi.height * Bmi.height)) * 10000).toFixed(2));
        } else{
            Bmi.result = 'Проверьте правильность введённых параметров';
        }
    }
}