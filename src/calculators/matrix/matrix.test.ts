import MatrixCalculator from "./matris";

test('renders learn react link', () => {
    let a = MatrixCalculator.Add({data:[[1]]}, {data:[[2]]});
    expect(a.data[0][0]).toBe(3);
});
