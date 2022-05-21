export default class Matrix {
    data: number[][]
}

export function add(a: Matrix, b: Matrix): Matrix{
    if (isDiffSize(a, b))
        throw "Matrix dimensions differ"
    return {data: a.data.map((ai, i) => ai.map((aij, j) => aij + b.data[i][j]))};
}

export function subtraction(a: Matrix, b: Matrix): Matrix{
    if (isDiffSize(a, b))
        throw "Matrix dimensions differ"
    return {
        data: a.data.map((ai, i) => ai.map((aij, j) => aij - b.data[i][j]))};
}

export function multiply(a: Matrix, b: Matrix): Matrix{
    if (isDiffSizeForMultiply(a, b))
        throw "Matrix dimensions differ"
    const result = createDoubleArray(a.data.length, b.data[0].length);

    return {data: result.map((row, i) => {
            return row.map((val, j) => {
                return a.data[i].reduce((sum, elm, k) => sum + (elm*b.data[k][j]) ,0)
            })})};
}

export function scalarMultiply(matrix: Matrix, scalar: number): Matrix{
    return {data: matrix.data.map((ai) => ai.map((aij) => aij * scalar))}
}

export function transpose(m: Matrix): Matrix{
    const res = createDoubleArray(m.data[0].length, m.data.length);
    m.data.map((row, i) => row.map((aij, j) => res[j][i] = aij))
    return {data: res};
}

export function determinant(m: Matrix): number{
    if (!isSquare(m)) {
        throw "Matrix dimensions differ"
    }
    if (m.data.length === 1){
        return m.data[0][0];
    }
    if (m.data.length === 2){
        return ((m.data[0][0] * m.data[1][1]) - (m.data[0][1] * m.data[1][0]));
    }
    let res = 0;
    for (let i = 0; i < m.data.length; i++){
        res += Math.pow(-1, i) * m.data[0][i] * determinant(deleteRowAndColumn(m, i, 0));
    }
    return res;
}

export function inverseMatrix(m: Matrix): Matrix {
    if (!isSquare(m)) {
        throw "Matrix dimensions differ"
    }
    const transposedMatrixOfCofactors = transpose(matrixOfCofactors(m));
    const inverseDeterminant = 1 / determinant(m);
    return scalarMultiply(transposedMatrixOfCofactors, inverseDeterminant);
}

export function matrixOfCofactors(m: Matrix): Matrix{
    const res = new Array(m.data.length).fill(0).map(() => new Array(m.data[0].length).fill(0));
    for (let i = 0; i < m.data.length; i++){
        for (let j = 0; j < m.data[0].length; j++){
            const removedRowAndColumnSubmatrix = deleteRowAndColumn(m, j, i);
            res[i][j] = Math.pow(-1, i+j) * determinant(removedRowAndColumnSubmatrix);
        }
    }
    return {data: res};
}

function deleteRowAndColumn(m: Matrix, colNumber: number, rowNumber: number): Matrix{
    const res = new Array(m.data.length - 1).fill(0).map(() => new Array(m.data[0].length - 1).fill(0));
    let newCol = 0;
    let newRow = 0;
    for (let i = 0; i < m.data.length; i++){
        if (i === rowNumber){
            continue;
        }
        for (let j = 0; j < m.data[1].length; j++){
            if (j === colNumber){
                continue;
            }
            res[newRow][newCol] = m.data[i][j];
            newCol++;
        }
        newRow++;
        newCol = 0;
    }
    return {data: res}
}

function createDoubleArray(n: number, m: number): number[][]{
    return new Array(n).fill(0).map(() => new Array(m).fill(0));
}


function isDiffSize(a: Matrix, b: Matrix): boolean{
    return a.data.length == 0 || b.data.length == 0
        || a.data[0].length == 0 || b.data[0].length == 0
        || a.data.length !== b.data.length
        || a.data[0].length !== b.data[0].length;
}

function isDiffSizeForMultiply(a: Matrix, b: Matrix): boolean{
    return a.data.length === 0 || b.data.length === 0
        || a.data[0].length === 0 || b.data[0].length === 0
        || a.data[0].length !== b.data.length;
}

function isSquare(matrix: Matrix){
    return matrix.data.length === matrix.data[0].length && matrix.data.length !== 0;
}


function isSquare(matrix: Matrix)


