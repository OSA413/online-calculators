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

    static ScalarMultiply = (m: Matrix, scalar: number): Matrix => {
        return {data: m.data.map((ai, i) => ai.map((aij, j) => aij * scalar))}
    }

    static Transpose = (m: Matrix): Matrix =>{
        const res = new Array(m.data[0].length).fill(0).map(row => new Array(m.data.length).fill(0));
        m.data.map((row, i) => row.map((aij, j) => res[j][i] = aij))
        return {data: res};
    }

    static Determinant = (m: Matrix): number =>{
        if (m.data.length === 2){
            return ((m.data[0][0] * m.data[1][1]) - (m.data[0][1] * m.data[1][0]));
        }
        let res = 0;
        for (let i = 0; i < m.data.length; i++){
            res += Math.pow(-1, i) * m.data[0][i] * this.Determinant(this.DeleteRowAndColumn(m, i));
        }
        return res;
    }

    static DeleteRowAndColumn = (m: Matrix, colNumber: number): Matrix =>{
        let res = new Array(m.data.length - 1).fill(0).map(row => new Array(m.data[0].length - 1).fill(0));
        let newCol = 0;
        let newRow = 0;
        for (let i = 1; i < m.data.length; i++){
            for (let j = 0; i < m.data[1].length; j++){
                if (j === colNumber){
                    continue;
                }
                res[newRow][newCol] = m.data[i][j];
                newCol++;
            }
            newRow++;
        }
        return {data: res}
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

   static IsSquare = (matrix: Matrix): boolean =>{
        return matrix.data.length === matrix.data[0].length && matrix.data.length !== 0;
   }
}

export default MatrixCalculator;