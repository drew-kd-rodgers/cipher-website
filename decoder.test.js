const {shift_text, caesar_cipher, vigenere_cipher} = require("./decoder")

test("test alphabet shift", () => {
    expect(shift_text("a", 3)).toBe("d");
    expect(shift_text("a", -1)).toBe("z");
    expect(shift_text(" ", 4)).toBe(" ");
    expect(shift_text("a", 26)).toBe(shift_text("a", 0));
    expect(shift_text("Z", 1)).toBe("A");
    expect(shift_text("AAAAAA", 1)).toBe("BBBBBB");
})

test("test caesar cipher", () => {
    expect(caesar_cipher("DDD", 2, false)).toBe("BBB");
    expect(caesar_cipher("DDD", 2, true)).toBe("FFF");
    expect(caesar_cipher("Secret message", 3, false)).toBe("Pbzobq jbppxdb");
})

test("test vigenere cipher", () => {
    expect(vigenere_cipher("Secret message", "messagesecret", false)).toBe("Gakzen imoqjcl");
})