import {add, multiply, scalarMultiply, subtraction} from "./matrix";

describe("Matrix tests", () => {
    describe("Addition", () => {

        test("1x1 + 1x1", () => {
            const a = add({data:[[1]]}, {data:[[2]]});
            expect(a.data[0][0]).toBe(3);
        });
        
        test("2x2 + 2x2", () => {
            const a = add({data:[[1, 2],[3, 4]]}, {data:[[1, 2],[3, 4]]});
            expect(a.data[0][0]).toBe(2);
            expect(a.data[0][1]).toBe(4);
            expect(a.data[1][0]).toBe(6);
            expect(a.data[1][1]).toBe(8);
        });
        
        test("3x3 + 3x3", () => {
            const a = add({data:[[1,2, 3],[4,5, 6], [7, 8, 9]]}, {data:[[1,2, 3],[4,5, 6], [7, 8, 9]]});
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

        test("wrong size", () => {
            expect(() => {
                add({data:[[1,2],[4,5], [7, 8]]}, {data:[[1,2, 3],[4,5, 6], [7, 8, 9]]});
            }).toThrow();

        });
    })

    describe("Subtraction", () => {

        test("1x1 - 1x1", () => {
            const a = subtraction({data:[[1]]}, {data:[[2]]});
            expect(a.data[0][0]).toBe(-1);
        });

        test("2x2 - 2x2", () => {
            const a = subtraction({data:[[1, 2],[3, 4]]}, {data:[[5, 6],[7, 8]]});
            expect(a.data[0][0]).toBe(-4);
            expect(a.data[0][1]).toBe(-4);
            expect(a.data[1][0]).toBe(-4);
            expect(a.data[1][1]).toBe(-4);
        });

        test("3x3 - 3x3", () => {
            const a = subtraction({data:[[1,2, 3],[4,5, 6], [7, 8, 9]]}, {data:[[1,2, 3],[4,5, 6], [7, 8, 9]]});
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

        test("wrong size", () => {
            expect(() => {
                subtraction({data:[[1,2],[4,5], [7, 8]]}, {data:[[1,2, 3],[4,5, 6], [7, 8, 9]]});
            }).toThrow();

        });
    })

    describe("Multiply", () => {

        test("1x1 - 1x1", () => {
            const a = multiply({data:[[1]]}, {data:[[2]]});
            expect(a.data[0][0]).toBe(2);
        });

        test("2x2 - 2x2", () => {
            const a = multiply({data:[[1, 2],[3, 4]]}, {data:[[5, 6],[7, 8]]});
            expect(a.data[0][0]).toBe(19);
            expect(a.data[0][1]).toBe(22);
            expect(a.data[1][0]).toBe(43);
            expect(a.data[1][1]).toBe(50);
        });

        test("3x2 - 2x3", () => {
            const a = multiply({data:[[1,2],[3,4], [5, 6]]}, {data:[[1,2, 3],[4,5, 6]]});
            expect(a.data[0][0]).toBe(9);
            expect(a.data[0][1]).toBe(12);
            expect(a.data[0][2]).toBe(15);
            expect(a.data[1][0]).toBe(19);
            expect(a.data[1][1]).toBe(26);
            expect(a.data[1][2]).toBe(33);
            expect(a.data[2][0]).toBe(29);
            expect(a.data[2][1]).toBe(40);
            expect(a.data[2][2]).toBe(51);
        });

        test("wrong size, 3x4 - 3x3", () => {
            expect(() => {
                multiply({data:[[1,2, 3, 4],[4,5, 6, 3], [7, 8, 9, 4]]}, {data:[[1,2, 3],[4,5, 6], [7, 8, 9]]});
            }).toThrow();

        });
    })

    describe("Scalar multiply", () => {

        test("1x1 * 2", () => {
            const a = scalarMultiply({data:[[1]]}, 2);
            expect(a.data[0][0]).toBe(2);
        });

        test("2x2 * 2", () => {
            const a = scalarMultiply({data:[[1, 2],[3, 4]]}, 2);
            expect(a.data[0][0]).toBe(2);
            expect(a.data[0][1]).toBe(4);
            expect(a.data[1][0]).toBe(6);
            expect(a.data[1][1]).toBe(8);
        });

        test("3x2 * 234", () => {
            const a = scalarMultiply({data:[[1,2, 3],[4,5,6 ]]}, 234);
            expect(a.data[0][0]).toBe(234);
            expect(a.data[0][1]).toBe(468);
            expect(a.data[0][2]).toBe(702);
            expect(a.data[1][0]).toBe(936);
            expect(a.data[1][1]).toBe(1170);
            expect(a.data[1][2]).toBe(1404);

        });

    })

})