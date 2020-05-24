const generateString = require("./lib/string-generator.js");
const generateRandomNumber = require("./lib/generate-random-number");

/*Options
1) Number of Characters - default 10
2) Use Alphabets - default - TRUE
3) Use UpperCase - default - TRUE
4) Use Numbers - default - TRUE
5) Use Special Characters - default - TRUE
6) Alphabet/Character/Number Exception - "String Input" default - ""
*/

const passwordGenerator = (options) => {
  const charactersString = generateString(options);

  var password = "";

  for (i = 0; i < options.LENGTH; i++) {
    randomNumber = generateRandomNumber(charactersString);
    password = password + charactersString[randomNumber];
  }

  return password;
};

module.exports = passwordGenerator;
