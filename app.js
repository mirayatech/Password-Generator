// SELECTOR
const input = document.querySelector("input");
const button = document.querySelector("button");

// EVENT
button.addEventListener("click", () => {
  input.value = generatePassword(16);
});

// FUNCTION

function generatePassword(length = 16) {
  // Generated Characters as String
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijlkmnopqrstuvwxyz0123456789@#$";

  let password = "";

  for (let i = 0; i < length; ++i) {
    let at = Math.floor(Math.random() * (charset.length + 1));

    password += charset.charAt(at);
  }

  return password;
}
