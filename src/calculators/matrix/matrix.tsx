export class Matrix {
    data: number[][]
}

class MatrixCalculator {
    static Add = (a: Matrix, b: Matrix): Matrix => {
        if (MatrixCalculator.IsDifferentSize(a, b))
            throw "Matrix dimensions differ"
        
        return {data: a.data.map((ai, i) => ai.map((aij, j) => aij + b.data[i][j]))};
    }

    static Subtraction = (a: Matrix, b: Matrix): Matrix => {
        if (MatrixCalculator.IsDifferentSize(a, b))
            throw "Matrix dimensions differ"
        return {data: a.data.map((ai, i) => ai.map((aij, j) => aij - b.data[i][j]))};

    }

    static Multiply = (a: Matrix, b: Matrix): Matrix => {
        if (MatrixCalculator.IsDifferentSizeForMultiply(a, b))
            throw "Matrix dimensions differ"
        const result = new Array(a.data.length).fill(0).map(row => new Array(b.data[0].length).fill(0));

        return {data: result.map((row, i) => {
            return row.map((val, j) => {
                return a.data[i].reduce((sum, elm, k) => sum + (elm*b.data[k][j]) ,0)
            })})};
    }


    static IsDifferentSize = (a: Matrix, b: Matrix): boolean =>{
        return a.data.length == 0 || b.data.length == 0
            || a.data[0].length == 0 || b.data[0].length == 0
            || a.data.length !== b.data.length
            || a.data[0].length !== b.data[0].length;
    }


    static IsDifferentSizeForMultiply = (a: Matrix, b: Matrix): boolean =>{
        return a.data.length === 0 || b.data.length === 0
            || a.data[0].length === 0 || b.data[0].length === 0
            || a.data[0].length !== b.data.length;

}
}

export default MatrixCalculator;