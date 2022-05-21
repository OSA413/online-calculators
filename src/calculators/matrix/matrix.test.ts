import {
    add,
    determinant,
    inverseMatrix, isDiffSize, isDiffSizeForMultiply,
    matrixOfCofactors,
    multiply, pow,
    scalarMultiply,
    subtraction,
    transpose
} from "./matrix";

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

        test("wrong size, 2x3 - 3x3", () => {
            expect(() => {
                add({data:[[1,2],[4,5], [7, 8]]}, {data:[[1,2, 3],[4,5, 6], [7, 8, 9]]});
            }).toThrow("Matrix dimensions differ");

        });

        test("wrong size, 0x0", () => {
            expect(() => {
                add({data:[[]]}, {data:[[1,2, 3],[4,5, 6], [7, 8, 9]]});
            }).toThrow("Matrix dimensions differ");

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
            }).toThrow("Matrix dimensions differ");

        });

        test("wrong size, 0x0", () => {
            expect(() => {
                subtraction({data:[[1,2],[4,5], [7, 8]]}, {data:[[]]});
            }).toThrow("Matrix dimensions differ");

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
            }).toThrow("Matrix dimensions differ");

        });

        test("wrong size, 0x0 left", () => {
            expect(() => {
                multiply({data:[[]]}, {data:[[1,2, 3],[4,5, 6], [7, 8, 9]]});
            }).toThrow("Matrix dimensions differ");

        });

        test("wrong size, 0x0 right", () => {
            expect(() => {
                multiply({data:[[1,2, 3],[4,5, 6], [7, 8, 9]]}, {data:[[]]});
            }).toThrow("Matrix dimensions differ");

        });
    })
    describe("Pow", () => {

        test("2x2 ^ 1", () => {
            const a = pow({data:[[1, 2],[3, 4]]}, 1);
            expect(a.data[0][0]).toBe(1);
            expect(a.data[0][1]).toBe(2);
            expect(a.data[1][0]).toBe(3);
            expect(a.data[1][1]).toBe(4);
        });

        test("2x2 ^ 2", () => {
            const a = pow({data:[[1, 2],[3, 4]]}, 2);
            expect(a.data[0][0]).toBe(1);
            expect(a.data[0][1]).toBe(2);
            expect(a.data[1][0]).toBe(3);
            expect(a.data[1][1]).toBe(4);
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

    describe("Transpose", () => {

        test("1x1", () => {
            const a = transpose({data:[[1]]});
            expect(a.data[0][0]).toBe(1);
        });


        test("3x3", () => {
            const a = transpose({data:[[1,2, 3],[4,5,6 ], [7, 8, 9]]});
            expect(a.data[0][0]).toBe(1);
            expect(a.data[0][1]).toBe(4);
            expect(a.data[0][2]).toBe(7);
            expect(a.data[1][0]).toBe(2);
            expect(a.data[1][1]).toBe(5);
            expect(a.data[1][2]).toBe(8);
            expect(a.data[2][0]).toBe(3);
            expect(a.data[2][1]).toBe(6);
            expect(a.data[2][2]).toBe(9);

        });

    })

    describe("Determinant", () => {

        test("1x1", () => {
            const a = determinant({data:[[1]]});
            expect(a).toBe(1);
        });

        test("2x2", () => {
            const a = determinant({data:[[1, 2], [3, 4]]});
            expect(a).toBe(-2);
        });


        test("3x3 with det != 0", () => {
            const a = determinant({data:[[14,2, 3534],[4534,545,6 ], [7, 538, 9]]});
            expect(a).toBe(8606917668);

        });

        test("3x3 with det = 0", () => {
            const a = determinant({data:[[1,2, 3],[4,5,6 ], [7, 8, 9]]});
            expect(a).toBe(0);

        });

        test("wrong size, 3x4", () => {
            expect(() => {
                determinant({data:[[1,2, 3, 4],[4,5, 6, 3], [7, 8, 9, 4]]});
            }).toThrow("Matrix dimensions differ");

        });

        test("wrong size, 0x0", () => {
            expect(() => {
                determinant({data:[[]]});
            }).toThrow("Matrix dimensions differ");

        });
    })

    describe("Inverse", () => {

        test("wrong size, 1x1", () => {
            expect(() => {
                inverseMatrix({data:[[1]]});
            }).toThrow("Matrix dimensions differ");

        });

        test("wrong size, 0x0", () => {
            expect(() => {
                inverseMatrix({data:[[]]});
            }).toThrow("Matrix dimensions differ");

        });

        test("3x3", () => {
            const a = inverseMatrix({data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]});

            expect(Number((a.data[0][0]).toFixed(1))).toBe(0.6);
            expect(Number((a.data[0][1]).toFixed(1))).toBe(0.7);
            expect(Number((a.data[0][2]).toFixed(1))).toBe(-0.1);
            expect(Number((a.data[1][0]).toFixed(1))).toBe(-0.4);
            expect(Number((a.data[1][1]).toFixed(1))).toBe(0.2);
            expect(Number((a.data[1][2]).toFixed(1))).toBe(0.4);
            expect(Number((a.data[2][0]).toFixed(1))).toBe(0.8);
            expect(Number((a.data[2][1]).toFixed(1))).toBe(0.1);
            expect(Number((a.data[2][2]).toFixed(1))).toBe(-0.3);

        });

        test("wrong size, 3x4", () => {
            expect(() => {
                inverseMatrix({data:[[1,2, 3, 4],[4,5, 6, 3], [7, 8, 9, 4]]});
            }).toThrow("Matrix dimensions differ");

        });
    })

    describe("Matrix of cofactors", () => {

        test("wrong size, 1x1", () => {
            expect(() => {
                matrixOfCofactors({data:[[1]]});
            }).toThrow("Matrix dimensions differ");

        });

        test("3x3", () => {
            const a = matrixOfCofactors({data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]});

            expect(a.data[0][0]).toBe(6);
            expect(a.data[0][1]).toBe(-4);
            expect(a.data[0][2]).toBe(8);
            expect(a.data[1][0]).toBe(7);
            expect(a.data[1][1]).toBe(2);
            expect(a.data[1][2]).toBe(1);
            expect(a.data[2][0]).toBe(-1);
            expect(a.data[2][1]).toBe(4);
            expect(a.data[2][2]).toBe(-3);

        });


        test("wrong size, 3x4", () => {
            expect(() => {
                matrixOfCofactors({data:[[1,2, 3, 4],[4,5, 6, 3], [7, 8, 9, 4]]});
            }).toThrow("Matrix dimensions differ");

        });

    })

    describe("Matrix with diff size", () => {


        test("wrong size for additional, 0x0 - 3x3", () => {
            const a = isDiffSize({data:[[]]}, {data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]});
            expect(a).toBe(true);

        });

        test("wrong size for additional, 3x3 - 0x0", () => {
            const a = isDiffSize({data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]}, {data:[[]]});
            expect(a).toBe(true);

        });

        test("wrong size for additional, 1x1 - 3x3", () => {
            const a = isDiffSize({data:[[1]]}, {data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]});
            expect(a).toBe(true);

        });

        test("wrong size for additional,  3x3 - 1x1 ", () => {
            const a = isDiffSize({data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]}, {data:[[1]]});
            expect(a).toBe(true);

        });

        test("wrong size  for additional, 1x2 - 3x3", () => {
            const a = isDiffSize({data:[[1], [3]]}, {data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]});
            expect(a).toBe(true);

        });

        test("wrong size  for additional, 1x3 - 3x3", () => {
            const a = isDiffSize({data:[[1], [3], [2]]}, {data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]});
            expect(a).toBe(true);

        });

        test("right size for additional, 3x3 - 3x3", () => {
            const a = isDiffSize({data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]}, {data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]});
            expect(a).toBe(false);

        });

        test("wrong size for multiply, 1x1 - 3x3", () => {
            const a = isDiffSize({data:[[1]]}, {data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]});
            expect(a).toBe(true);

        });

        test("wrong size for multiply, 0x0 - 3x3", () => {
            const a = isDiffSizeForMultiply({data:[[]]}, {data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]});
            expect(a).toBe(true);

        });


        test("wrong size for multiply, 3x3 - 0x0 ", () => {
            const a = isDiffSizeForMultiply({data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]}, {data:[[]]});
            expect(a).toBe(true);

        });

        test("wrong size for multiply, 3x3 - 1x1 ", () => {
            const a = isDiffSizeForMultiply({data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]}, {data:[[1]]});
            expect(a).toBe(true);

        });

        test("right size for multiply, 3x3 - 1x1 ", () => {
            const a = isDiffSizeForMultiply({data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]}, {data:[[-1, 2, 3],[2, -1, -2 ], [-2, 5, 4]]});
            expect(a).toBe(false);

        });


    })

})