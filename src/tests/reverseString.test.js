const reverseString = require('../scripts/reverseString')

test("Reverse a simple word", () => {
    expect(reverseString("Alphabet")).toBe("Tebahpla");
    expect(reverseString("Hello")).toBe("Olleh");
});

test("Reverse two words", () => {
    expect(reverseString("Two words")).toBe("Sdrow owt");
    expect(reverseString("Whatever man")).toBe("Nam revetahw");
});

test("Reverse n words", () => {
    expect(reverseString("One two three")).toBe("Eerht owt eno");
});

test("Edge case: Reverse with improperly formatted string with whitespace", () => {
    expect(reverseString("  leading spaces")).toBe("Secaps gnidael");
    expect(reverseString("trailing spaces   ")).toBe("Secaps gniliart");
    expect(reverseString("middle      spaces")).toBe("Secaps elddim");
})
