import MatrixCalculator from "./matrix";

describe("Matrix tests", () => {
    describe("Addition", () => {

        test("1x1 + 1x1", () => {
            const a = MatrixCalculator.Add({data:[[1]]}, {data:[[2]]});
            expect(a.data[0][0]).toBe(3);
        });
        
        test("2x2 + 2x2", () => {
            const a = MatrixCalculator.Add({data:[[1, 2],[3, 4]]}, {data:[[1, 2],[3, 4]]});
            expect(a.data[0][0]).toBe(2);
            expect(a.data[0][1]).toBe(4);
            expect(a.data[1][0]).toBe(6);
            expect(a.data[1][1]).toBe(8);
        });
        
        test("3x3 + 3x3", () => {
            const a = MatrixCalculator.Add({data:[[1,2, 3],[4,5, 6], [7, 8, 9]]}, {data:[[1,2, 3],[4,5, 6], [7, 8, 9]]});
            expect(a.data[0][0]).toBe(2);
            expect(a.data[0][1]).toBe(4);
            expect(a.data[0][2]).toBe(6);
            expect(a.data[1][0]).toBe(8);
            expect(a.data[1][1]).toBe(10);
            expect(a.data[1][2]).toBe(12);
            expect(a.data[2][0]).toBe(14);
            expect(a.data[2][1]).toBe(16);
            expect(a.data[2][2]).toBe(18);
        });
    })

    describe("Subtraction", () => {

        test("1x1 - 1x1", () => {
            const a = MatrixCalculator.Subtraction({data:[[1]]}, {data:[[2]]});
            expect(a.data[0][0]).toBe(-1);
        });

        test("2x2 - 2x2", () => {
            const a = MatrixCalculator.Subtraction({data:[[1, 2],[3, 4]]}, {data:[[5, 6],[7, 8]]});
            expect(a.data[0][0]).toBe(-4);
            expect(a.data[0][1]).toBe(-4);
            expect(a.data[1][0]).toBe(-4);
            expect(a.data[1][1]).toBe(-4);
        });

        test("3x3 - 3x3", () => {
            const a = MatrixCalculator.Subtraction({data:[[1,2, 3],[4,5, 6], [7, 8, 9]]}, {data:[[1,2, 3],[4,5, 6], [7, 8, 9]]});
            expect(a.data[0][0]).toBe(0);
            expect(a.data[0][1]).toBe(0);
            expect(a.data[0][2]).toBe(0);
            expect(a.data[1][0]).toBe(0);
            expect(a.data[1][1]).toBe(0);
            expect(a.data[1][2]).toBe(0);
            expect(a.data[2][0]).toBe(0);
            expect(a.data[2][1]).toBe(0);
            expect(a.data[2][2]).toBe(0);
        });
    })

})