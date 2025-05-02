keyid = "key";

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
    return shift_text(plainText, key * (decode ? -1 : 1));
}

function vigenere_cipher(plainText, key, decode) {
    let cipherText = [];
    let skipped = 0;
    for (let i = 0 ; i < plainText.length ; i++) {
        let cipherChar = plainText.charAt(i);
        let cipherCharCode = cipherChar.charCodeAt(0);
        let keyChar = key.charCodeAt((i - skipped) % key.length);
        if (keyChar >= 65 && keyChar <= 90) {
            cipherChar = shift_text(cipherChar, (keyChar - 65) * (decode ? -1 : 1));
        } else if (keyChar >= 97 && keyChar <= 122) {
            cipherChar = shift_text(cipherChar, (keyChar - 97) * (decode ? -1 : 1));
        }
        if (!((cipherCharCode >= 65 && cipherCharCode <= 90) || (cipherCharCode >= 97 && cipherCharCode <= 122))) {
            skipped ++;
        }
        cipherText.push(cipherChar);
    }
    return cipherText.join("");
}

function current_cipher (){}
current_cipher = caesar_cipher;

function set_caesar() {
    current_cipher = caesar_cipher;
    document.getElementById("caesarkey").hidden = false;
    document.getElementById("vigenerekey").hidden = true;
    document.getElementById("reverse").checked = true;
    keyid = "key";
    update_latest();
}

function set_vigenere() {
    current_cipher = vigenere_cipher;
    document.getElementById("vigenerekey").hidden = false;
    document.getElementById("caesarkey").hidden = true;
    document.getElementById("reverse").checked = false;
    keyid = "textkey";
    update_latest();
}

function update_plaintext() {
    document.getElementById("ciphertext").value = current_cipher(document.getElementById("plaintext").value, document.getElementById(keyid).value, (document.getElementById("reverse").checked));
    update_latest = update_plaintext;
}

function update_ciphertext() {
    document.getElementById("plaintext").value = current_cipher(document.getElementById("ciphertext").value, document.getElementById(keyid).value, !(document.getElementById("reverse").checked));
    update_latest = update_ciphertext;
}

function update_latest() {}
update_latest = update_plaintext;

module.exports = {shift_text, caesar_cipher, vigenere_cipher};