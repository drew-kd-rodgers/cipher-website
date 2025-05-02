# Cipher Encoder/Decoder

Type a message into the plaintext to encode, or the ciphertext to decode.
Reverse/left setting changes the direction a key shifts text. So normally, "B" shifted by 1 is "C", but with the reverse setting toggled it would be "A".

Caesar cipher uses a simple numeric key shift. Typically it uses a key of 3 and shifts left.

Vigenere cipher uses a keyword. For each letter in the plaintext it cycles through the letters in the keyword and shifts the plaintext accordingly ("A" shifts by 0, "B" shifts by 1, so on). Since the numeric shift changes for each letter, it is more complex than the caesar cipher and harder to crack without knowing the key. 
