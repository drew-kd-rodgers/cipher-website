function shift_text(plainText, key) {
    let shiftText = [];
    for (let i = 0 ; i < plainText.length ; i++) {
        let shiftChar = plainText.charCodeAt(i);
        if (shiftChar >= 65 && shiftChar <= 90) {
            shiftChar = (((shiftChar - 65) + key) % 26);
            shiftChar += (shiftChar < 0 ? 26 : 0);
            shiftChar += 65;
        } else if (shiftChar >= 97 && shiftChar <= 122) {
            shiftChar = (((shiftChar - 97) + key) % 26);
            shiftChar += (shiftChar < 0 ? 26 : 0);
            shiftChar += 97;
        }
        shiftText.push(String.fromCharCode(shiftChar));
    }
    return shiftText.join("");
}

function caesar_cipher(plainText, key, decode) {
    // Caesar cipher shifts backwards, so we multiply the key by -1 unless we're decoding
    return shift_text(plainText, key * (decode ? 1 : -1));
}

function update_plaintext() {
    document.getElementById("ciphertext").value = caesar_cipher(document.getElementById("plaintext").value, document.getElementById("key").value, !(document.getElementById("reverse").checked));
}

function update_ciphertext() {
    document.getElementById("plaintext").value = caesar_cipher(document.getElementById("ciphertext").value, document.getElementById("key").value, (document.getElementById("reverse").checked));
}

module.exports = {shift_text, caesar_cipher};