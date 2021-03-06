const checkError = (options) => {
  const {
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

  //Checking if the sum of minimum characters of Lowercase, uppercase, numbers and special case is greater than the total password length.
  if (
    MIN_ALPHABETS_LOWERCASE +
      MIN_ALPHABETS_UPPERCASE +
      MIN_NUMBERS +
      MIN_SPECIAL_CHARACTERS >
    LENGTH
  ) {
    throw new Error(
      "Sum of Minimum Characters in the passwords greater than the length of the Password to be generated."
    );
  }

  //Checking if lowercase, uppercase , numbers and special characters have all been set to false.
  if (
    ALLOW_ALPHABETS_LOWERCASE == false &&
    ALLOW_ALPHABETS_UPPERCASE == false &&
    ALLOW_NUMBERS == false &&
    ALLOW_SPECIAL_CHARACTERS == false
  ) {
    throw new Error(
      "Alphabets, Numbers and Passwords are all set to False. No valid Characters to generate the Password."
    );
  }

  //Checking if first character option has been set to true for more than one option.
  if (
    FIRST_CHARACTER_LOWERCASE +
      FIRST_CHARACTER_UPPERCASE +
      FIRST_CHARACTER_NUMBER +
      FIRST_CHARACTER_SPECIAL_CHARACTER >
    1
  ) {
    throw new Error(
      "Multiple First Character Option has been enabled. Change Option."
    );
  }
};

module.exports = checkError;
