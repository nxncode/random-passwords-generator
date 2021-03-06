const randomNumber = require("./generate-random-number");
const shuffleString = require("./shuffle-string");

const generatePassword = (options) => {
  var pswd = "";
  var pswdLength = 0;
  var index = 0;
  var minChar = "";
  let {
    LENGTH,
    ALLOW_ALPHABETS_LOWERCASE,
    ALLOW_ALPHABETS_UPPERCASE,
    ALLOW_NUMBERS,
    ALLOW_SPECIAL_CHARACTERS,
    FIRST_CHARACTER_LOWERCASE,
    FIRST_CHARACTER_UPPERCASE,
    FIRST_CHARACTER_NUMBER,
    FIRST_CHARACTER_SPECIAL_CHARACTER,
    MIN_ALPHABETS_LOWERCASE,
    MIN_ALPHABETS_UPPERCASE,
    MIN_NUMBERS,
    MIN_SPECIAL_CHARACTERS,
    EXCEPTIONS,
  } = options;

  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  lowercaseChar = removeExceptions(lowercaseChar, EXCEPTIONS);

  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  uppercaseChar = removeExceptions(uppercaseChar, EXCEPTIONS);

  var numbers = "0123456789";
  numbers = removeExceptions(numbers, EXCEPTIONS);

  var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_{|}~";
  specialChar = removeExceptions(specialChar, EXCEPTIONS);

  //Generating the First Character Based on the User Option Selection.
  upperLimit = lowercaseChar.length;
  if (FIRST_CHARACTER_LOWERCASE) {
    pswd = pswd + lowercaseChar.charAt(randomNumber(upperLimit));
    MIN_ALPHABETS_LOWERCASE = MIN_ALPHABETS_LOWERCASE - 1;
  }

  upperLimit = uppercaseChar.length;
  if (FIRST_CHARACTER_UPPERCASE) {
    pswd = pswd + uppercaseChar.charAt(randomNumber(upperLimit));
    MIN_ALPHABETS_UPPERCASE = MIN_ALPHABETS_UPPERCASE - 1;
  }

  upperLimit = numbers.length;
  if (FIRST_CHARACTER_NUMBER) {
    pswd = pswd + numbers.charAt(randomNumber(upperLimit));
    MIN_NUMBERS = MIN_NUMBERS - 1;
  }

  upperLimit = specialChar.length;
  if (FIRST_CHARACTER_SPECIAL_CHARACTER) {
    pswd = pswd + numbers.charAt(randomNumber(upperLimit));
    MIN_SPECIAL_CHARACTERS = MIN_SPECIAL_CHARACTERS - 1;
  }

  // Generating a minChar string that holds minimum number of characters on the User Option Selection.
  //The minCHar variable will store the minimum number of characters for each type - lowercase, uppercase,
  //special characters, numbers. Then, the minChar variable is shuffled to make the password random.

  upperLimit = lowercaseChar.length;
  for (i = 0; i < MIN_ALPHABETS_LOWERCASE; i++) {
    minChar = minChar + lowercaseChar.charAt(randomNumber(upperLimit));
  }

  upperLimit = uppercaseChar.length;
  for (i = 0; i < MIN_ALPHABETS_UPPERCASE; i++) {
    minChar = minChar + uppercaseChar.charAt(randomNumber(upperLimit));
  }

  upperLimit = numbers.length;
  for (i = 0; i < MIN_NUMBERS; i++) {
    minChar = minChar + numbers.charAt(randomNumber(upperLimit));
  }

  upperLimit = specialChar.length;
  for (i = 0; i < MIN_SPECIAL_CHARACTERS; i++) {
    minChar = minChar + specialChar.charAt(randomNumber(upperLimit));
  }

  //Shuffling the minChar to generate a password that holds minimum criteria.
  pswd = pswd + shuffleString(minChar);

  characterString = "";

  characterString = ALLOW_ALPHABETS_LOWERCASE
    ? characterString + lowercaseChar
    : characterString;

  characterString = ALLOW_ALPHABETS_UPPERCASE
    ? characterString + uppercaseChar
    : characterString;

  characterString = ALLOW_NUMBERS ? characterString + numbers : characterString;

  characterString = ALLOW_SPECIAL_CHARACTERS
    ? characterString + specialChar
    : characterString;

  remainingChar = options.LENGTH - pswd.length;

  upperLimit = characterString.length;

  for (i = 0; i < remainingChar; i++) {
    pswd = pswd + characterString.charAt(randomNumber(upperLimit));
  }
  return pswd;
};

const removeExceptions = (str, EXCEPTIONS) => {
  EXCEPTIONS.split("").forEach((char) => {
    str = str.replace(char, "");
  });
  return str;
};

module.exports = generatePassword;
