// SELECTOR

//  getting the input by the <input> tag
const input = document.querySelector("input");

// getting the button by the <button> tag
const button = document.querySelector("button");

// EVENT

/**
 * generate a random password on button click
 * and set it as a value of the input
 */
button.addEventListener("click", () => {
  input.value = generatePassword(16);
});

// FUNCTION

/**
 * Generate a Random String as Password
 * $Param {Number} [length] length of the generated password
 * $Return {String} generated string with random charachters (password)
 */
function generatePassword(length = 16) {
  // Generated Characters as String
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijlkmnopqrstuvwxyz0123456789@#$";

  //Generated Charachters as String
  let password = "";

  /**
   * Running the for loop x times
   * x = length
   *
   * using ++ in front of i to increase the i value
   * before the block gets executed
   *
   * so i is starting with 1 insted of 0 because otherwise
   * the first charachter would be always a (0)
   */
  for (let i = 0; i < length; ++i) {
    /**
     * Generating a random number
     * between 0 and the cha  z ETWVPSrset length to get
     * a random character from the whole string
     * $Type {Number}
     */
    let at = Math.floor(Math.random() * (charset.length + 1));

    /**
     * Getting a random char from the charset
     * and append it to the password variable
     */
    password += charset.charAt(at);
  }

  /**
   * returning the password
   */

  return password;
}
