const password = require("./index");

options = {
  LENGTH: 10,
  // ALLOW_ALPHABETS: false,
  // ALLOW_UPPERCASE: true,
  // ALLOW_NUMBERS: true,
  // ALLOW_SPECIAL_CHARACTERS: false,
  // EXCEPTIONS: "",
};
passwords = password(options);
console.log(passwords);
