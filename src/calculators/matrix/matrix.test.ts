import MatrixCalculator from "./matrix";

describe("Matrix tests", () => {
    describe("Addition", () => {

        test("1x1 + 1x1", () => {
            let a = MatrixCalculator.Add({data:[[1]]}, {data:[[2]]});
            expect(a.data[0][0]).toBe(3);
        });
        
        test("2x2 + 2x2", () => {
            let a = MatrixCalculator.Add({data:[[1],[3]]}, {data:[[4],[5]]});
            expect(a.data[0][0]).toBe(5);
            expect(a.data[1][0]).toBe(8);
        });
        
        test("3x3 + 3x3", () => {
            let a = MatrixCalculator.Add({data:[[1,4],[3,6]]}, {data:[[4,7],[5,10]]});
            expect(a.data[0][0]).toBe(5);
            expect(a.data[0][1]).toBe(11);
            expect(a.data[1][0]).toBe(8);
            expect(a.data[1][1]).toBe(16);
        });
    })

})