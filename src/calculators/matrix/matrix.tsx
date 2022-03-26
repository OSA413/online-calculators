export class Matrix {
    data: number[][]
}

class MatrixCalculator {
    static Add = (a: Matrix, b: Matrix): Matrix => {
        if (MatrixCalculator.IsSameSize(a, b))
            throw "Matrix dimensions differ"
        
        return {data: a.data.map((ai, i) => ai.map((aij, j) => aij + b.data[i][j]))};
    }

    static Subtraction = (a: Matrix, b: Matrix): Matrix => {
        if (MatrixCalculator.IsSameSize(a, b))
            throw "Matrix dimensions differ"
        return {data: a.data.map((ai, i) => ai.map((aij, j) => aij - b.data[i][j]))};

    }

    static IsSameSize = (a: Matrix, b: Matrix): boolean =>{
        return a.data.length == 0 || b.data.length == 0
            || a.data[0].length == 0 || b.data[0].length == 0
            || a.data.length !== b.data.length
            || a.data[0].length !== b.data[0].length;
    }
}

export default MatrixCalculator;