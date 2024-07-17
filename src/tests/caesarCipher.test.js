const caesarCipher = require('../scripts/caesarCipher')

test("Cipher a simple word", () => {
    expect(caesarCipher("hello", 3)).toBe("khoor");
    expect(caesarCipher("world", 3)).toBe("zruog");
});

test("Cipher two words", () => {
    expect(caesarCipher("hello world", 3)).toBe("khoor zruog")
})

test("Cipher a simple world with the first Uppercase", () => {
    expect(caesarCipher("Hello", 3)).toBe("Khoor");
    expect(caesarCipher("World", 3)).toBe("Zruog");
})

test("Cipher two words with UpperCase", () => {
    expect(caesarCipher("heLLo woRLd", 3)).toBe("khOOr zrUOg")
})

test("Cipher a simple world with a special character", () => {
    expect(caesarCipher("Hello!", 3)).toBe("Khoor!");
    expect(caesarCipher("World!", 3)).toBe("Zruog!");
})
