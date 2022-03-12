import React, {ReactComponentElement, useState} from "react";

class CurrentCalculator {
    static Calculator: React.Component
    static getCalculator = () => CurrentCalculator.Calculator;
    static setCalculator = (calculator: React.Component) => CurrentCalculator.Calculator = calculator;
}

export default CurrentCalculator;