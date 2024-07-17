const analyzeArray = require('../scripts/analyzeArray')

test("Analyze exercise example", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
})

test("Analyze simple array", () => {
    expect(analyzeArray([1,1,1,1,1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 5
    });
})

test("Edge case: Array contains non-numeric values", () => {
    expect(() => {analyzeArray(['a', 2, 3, 4, 5])}).toThrow("Array contains non-numeric values.");
})
