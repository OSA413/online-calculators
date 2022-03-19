export class Matrix {
    data: number[][]
}

class MatrixCalculator {
    static Add = (a: Matrix, b: Matrix): Matrix => {
        if (a.data.length == 0 || b.data.length == 0
            || a.data[0].length == 0 || b.data[0].length == 0
            || a.data.length !== b.data.length
            || a.data[0].length !== b.data[0].length)
            throw "Matrix dimensions differ"
        
        return {data: a.data.map((ai, i) => ai.map((aij, j) => aij + b.data[i][j]))};
    }
}

export default MatrixCalculator;