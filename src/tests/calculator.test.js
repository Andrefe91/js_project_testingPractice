const calculator = require('../scripts/calculator');

test("Add two numbers", () => {
    expect(calculator.add(5, 3)).toBe(8);
    expect(calculator.add(10, 20)).toBe(30);
})

test("Substract two numbers", () => {
    expect(calculator.sub(10,5)).toBe(5);
    expect(calculator.sub(125, 48)).toBe(77);
});

test("Multiply two numbers", () => {
    expect(calculator.mul(10,10)).toBe(100);
    expect(calculator.mul(132,0)).toBe(0);
});

test("Divide two numbers", () => {
    expect(calculator.div(10,2)).toBe(5);
    expect(calculator.div(100,10)).toBe(10);
});

test("Edge case: Divition by zero", () => {
    expect(() => {calculator.div(2,0)}).toThrow("Cannot divide by zero");
});
