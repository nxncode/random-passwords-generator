const processOption = (options) => {
  if (typeof options == "undefined") {
    options = {
      LENGTH: 10,
      ALLOW_ALPHABETS_LOWERCASE: true,
      ALLOW_ALPHABETS_UPPERCASE: true,
      ALLOW_NUMBERS: true,
      ALLOW_SPECIAL_CHARACTERS: true,
      EXCEPTIONS: "",
      FIRST_CHARACTER_LOWERCASE: true,
      FIRST_CHARACTER_UPPERCASE: false,
      FIRST_CHARACTER_NUMBER: false,
      FIRST_CHARACTER_SPECIAL_CHARACTER: false,
      MIN_ALPHABETS_LOWERCASE: 1,
      MIN_ALPHABETS_UPPERCASE: 1,
      MIN_NUMBERS: 1,
      MIN_SPECIAL_CHARACTERS: 1,
    };
  } else {
    options.LENGTH = typeof options.LENGTH == "undefined" ? 10 : options.LENGTH;

    options.ALLOW_ALPHABETS_LOWERCASE =
      typeof options.ALLOW_ALPHABETS_LOWERCASE == "undefined"
        ? true
        : options.ALLOW_ALPHABETS_LOWERCASE;

    options.ALLOW_ALPHABETS_UPPERCASE =
      typeof options.ALLOW_ALPHABETS_UPPERCASE == "undefined"
        ? true
        : options.ALLOW_ALPHABETS_UPPERCASE;

    options.ALLOW_NUMBERS =
      typeof options.ALLOW_NUMBERS == "undefined"
        ? true
        : options.ALLOW_NUMBERS;

    options.ALLOW_SPECIAL_CHARACTERS =
      typeof options.ALLOW_SPECIAL_CHARACTERS == "undefined"
        ? true
        : options.ALLOW_SPECIAL_CHARACTERS;

    if (options.ALLOW_ALPHABETS_LOWERCASE) {
      options.FIRST_CHARACTER_LOWERCASE =
        typeof options.FIRST_CHARACTER_LOWERCASE == "undefined"
          ? true
          : options.FIRST_CHARACTER_LOWERCASE;
      options.MIN_ALPHABETS_LOWERCASE =
        typeof options.MIN_ALPHABETS_LOWERCASE == "undefined"
          ? 1
          : options.MIN_ALPHABETS_LOWERCASE;
    } else {
      options.FIRST_CHARACTER_LOWERCASE = false;
      options.MIN_ALPHABETS_LOWERCASE = 0;
    }

    if (options.ALLOW_ALPHABETS_UPPERCASE) {
      options.FIRST_CHARACTER_UPPERCASE =
        typeof options.FIRST_CHARACTER_UPPERCASE == "undefined"
          ? false
          : options.FIRST_CHARACTER_UPPERCASE;
      options.MIN_ALPHABETS_UPPERCASE =
        typeof options.MIN_ALPHABETS_UPPERCASE == "undefined"
          ? 1
          : options.MIN_ALPHABETS_UPPERCASE;
    } else {
      options.FIRST_CHARACTER_UPPERCASE = false;
      options.MIN_ALPHABETS_UPPERCASE = 0;
    }

    if (options.ALLOW_NUMBERS) {
      options.FIRST_CHARACTER_NUMBER =
        typeof options.FIRST_CHARACTER_NUMBER == "undefined"
          ? false
          : options.FIRST_CHARACTER_NUMBER;
      options.MIN_NUMBERS =
        typeof options.MIN_NUMBERS == "undefined" ? 1 : options.MIN_NUMBERS;
    } else {
      options.FIRST_CHARACTER_NUMBER = false;
      options.MIN_NUMBERS = 0;
    }

    if (options.ALLOW_SPECIAL_CHARACTERS) {
      options.FIRST_CHARACTER_SPECIAL_CHARACTER =
        typeof options.FIRST_CHARACTER_SPECIAL_CHARACTER == "undefined"
          ? false
          : options.FIRST_CHARACTER_SPECIAL_CHARACTER;
      options.MIN_SPECIAL_CHARACTERS =
        typeof options.MIN_NUMBERS == "undefined"
          ? 1
          : options.MIN_SPECIAL_CHARACTERS;
    } else {
      options.FIRST_CHARACTER_SPECIAL_CHARACTER = false;
      options.MIN_SPECIAL_CHARACTERS = 0;
    }

    options.EXCEPTIONS =
      typeof options.EXCEPTIONS == "undefined" ? "" : options.EXCEPTIONS;
  }
  return options;
};

module.exports = processOption;
