const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const copyButton = document.getElementById("copy-button");
const inputText = document.getElementById("input-text");
const result = document.getElementById("result");

const encryptionKey = {
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat"
};

const decryptKey = {
  "enter": "e",
  "imes": "i",
  "ai": "a",
  "ober": "o",
  "ufat": "u"
};

function encrypt(text) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    if (letter in encryptionKey) {
      encryptedText += encryptionKey[letter];
    } else {
      encryptedText += letter;
    }
  }
  return encryptedText;
}

function decrypt(text) {
  let decryptedText = "";
  let currentWord = "";
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    if (letter in decryptKey) {
      currentWord += letter;
    } else {
      if (currentWord in decryptKey) {
        decryptedText += decryptKey[
            currentWord];
      } else {
        decryptedText += currentWord;
      }
      currentWord = "";
      decryptedText += letter;
    }
  }
  if (currentWord in decryptKey) {
    decryptedText += decryptKey[currentWord];
  } else {
    decryptedText += currentWord;
  }
  return decryptedText;
}

encryptButton.addEventListener("click", function() {
  const input = inputText.value;
  result.textContent = encrypt(input);
});

decryptButton.addEventListener("click", function() {
  const input = inputText.value;
  result.textContent = decrypt(input);
});

copyButton.addEventListener("click", function() {
  const input = inputText.value;
  const encryptedInput = encrypt(input);
  navigator.clipboard.writeText(encryptedInput);
});

