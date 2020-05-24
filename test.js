const password = require("./index");

options = {
  LENGTH: 25,
  ALLOW_ALPHABETS: true,
  ALLOW_UPPERCASE: true,
  ALLOW_NUMBERS: true,
  ALLOW_SPECIAL_CHARACTERS: false,
  EXCEPTIONS: "abcde",
};
passwords = password(options);
console.log(passwords);
