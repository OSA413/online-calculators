export class Matrix {
    data: number[][]
}

class MatrixCalculator {
    static Add = (a: Matrix, b: Matrix): Matrix => {
        if (a.data.length !== b.data.length)
            throw "Matrix dimensions differ"
        
        return {data: a.data.map((ai, i) => ai.map((aij, j) => aij + b.data[i][j]))};
    }
}

export default MatrixCalculator;