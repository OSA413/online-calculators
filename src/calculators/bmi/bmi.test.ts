import {bmi} from "./bmi";



describe("BMI tests", () => {
    describe("Bmi", () => {
        test("weight is undefined", () => {
            expect(() => {
                bmi(undefined, 170);
            }).toThrow("Not enough parameters passed");
        });

        test("height is undefined", () => {
            expect(() => {
                bmi(55, undefined);
            }).toThrow("Not enough parameters passed");
        });

        test("height and weight is undefined", () => {
            expect(() => {
                bmi(undefined, undefined);
            }).toThrow("Not enough parameters passed");
        });
        test("normal parameters", () => {
            const a = bmi(55, 165);
            expect(Number(a.toFixed(1))).toBe(20.2);

        });

    })
})