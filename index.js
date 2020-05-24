const generateString = require("./lib/string-generator.js");
const generateRandomNumber = require("./lib/generate-random-number");

var options = {};

const passwordGenerator = (options) => {
  //If No parameter is passed as an Option, then default values will be taken.
  if (typeof options == "undefined") {
    options = {
      LENGTH: 10,
      ALLOW_ALPHABETS: true,
      ALLOW_UPPERCASE: true,
      ALLOW_NUMBERS: true,
      ALLOW_SPECIAL_CHARACTERS: false,
      EXCEPTIONS: "",
    };
  }
  const charactersString = generateString(options);

  //If the length of the password to be generated is not specified, then the length will be taken as default value of 10
  options.LENGTH = options.LENGTH || 10;

  var password = "";

  for (i = 0; i < options.LENGTH; i++) {
    randomNumber = generateRandomNumber(charactersString);
    password = password + charactersString[randomNumber];
  }

  return password;
};

module.exports = passwordGenerator;
