export class Matrix {
    data: number[][]
}

class MatrixCalculator {
    static Add = (a: Matrix, b: Matrix): Matrix => {
        if (a.data.length !== b.data.length)
            throw "Matrix dimensions differ"
        
        let newData = a.data.map((ai, i) => ai.map((aij, j) => aij + b.data[i][j]));
        return {data: newData};
    }
}

export default MatrixCalculator;