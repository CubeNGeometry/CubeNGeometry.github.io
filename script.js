const morseCode = {
    A: "◻◼",
    B: "◼◻◻◻",
    C: "◼◻◼◻",
    D: "◼◻◻",
    E: "◻",
    F: "◻◻◼◻",
    G: "◼◼◻",
    H: "◻◻◻◻",
    I: "◻◻",
    J: "◻◼◼◼",
    K: "◼◻◼",
    L: "◻◼◻◻",
    M: "◼◼",
    N: "◼◻",
    O: "◼◼◼",
    P: "◻◼◼◻",
    Q: "◼◼◻◼",
    R: "◻◼◻",
    S: "◻◻◻",
    T: "◼",
    U: "◻◻◼",
    V: "◻◻◻◼",
    W: "◻◼◼",
    X: "◼◻◻◼",
    Y: "◼◻◼◼",
    Z: "◼◼◻◻",
    0: "◼◼◼◼◼",
    1: "◻◼◼◼◼",
    2: "◻◻◼◼◼",
    3: "◻◻◻◼◼",
    4: "◻◻◻◻◼",
    5: "◻◻◻◻◻",
    6: "◼◻◻◻◻",
    7: "◼◼◻◻◻",
    8: "◼◼◼◻◻",
    9: "◼◼◼◼◻",
    ".": "◻◼◻◼◼◻",
    ",": "◼◼◻◻◼◼",
    "?": "◻◻◼◼◼◻◻",
    "!": "◼◼◻◻◼◼◼",
    "'": "◻◼◼◼◼◼◻",
    "-": "◼◻◻◻◻◼",
    "/": "◼◻◻◼◻",
    "(": "◼◻◼◼◻",
    ")": "◼◻◼◼◻◼",
    "\"": "◻◼◼◼◼"
};

function translateToMorse() {
    const inputText = document.getElementById("input-text").value.trim().toUpperCase();
    let morseText = "";
    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        if (char in morseCode) {
            morseText += morseCode[char] + " ";
        } else {
            morseText += char + " ";
        }
    }
    document.getElementById("output-text").value = morseText.trim();
}

function translateToText() {
    const inputText = document.getElementById("input-text").value.trim();
    let text = "";
    const morseWords = inputText.split("  ");
    for (let i = 0; i < morseWords.length; i++) {
        const morseWord = morseWords[i];
        const morseChars = morseWord.split(" ");
        for (let j = 0; j < morseChars.length; j++) {
            const morseChar = morseChars[j];
            let found = false;
            for (const [key, value] of Object.entries(morseCode)) {
                if (value === morseChar) {
                    text += key;
                    found = true;
                    break;
                }
            }
            if (!found) {
                text += morseChar;
            }
        }
        text += " ";
    }
    document.getElementById("output-text").value = text.trim();
}
