const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseInput = document.getElementById("uppercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}<>?/|";

lengthInput.addEventListener("input", () => {
  lengthValue.textContent = lengthInput.value;
});

function getRandomChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}

function generatePassword() {
  let chars = lowerChars;

  if (uppercaseInput.checked) chars += upperChars;
  if (numbersInput.checked) chars += numberChars;
  if (symbolsInput.checked) chars += symbolChars;

  if (chars.length === 0) {
    passwordInput.value = "";
    return;
  }

  let password = "";
  for (let i = 0; i < lengthInput.value; i++) {
    password += getRandomChar(chars);
  }

  passwordInput.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (!passwordInput.value) return;

  navigator.clipboard.writeText(passwordInput.value);
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 1500);
});

generatePassword();