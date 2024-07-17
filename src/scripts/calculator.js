const calculator = (function() {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => {
        if (b == 0) {
            throw new Error("Cannot divide by zero");
        } else {
            return a / b;
        }
    };
    return { add, sub, mul, div };
})();


module.exports = calculator;
