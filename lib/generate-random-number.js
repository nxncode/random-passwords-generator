const crypto = require("crypto");

const generateRandomNumbers = (upperLimit) => {
  // randomNumber = Math.floor(Math.random() * charactersString.length);
  randombytes = crypto.randomBytes(256);
  return randombytes[0] % upperLimit;
};

module.exports = generateRandomNumbers;
