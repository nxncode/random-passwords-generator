const crypto = require("crypto");

const generateRandomNumbers = (charactersString) => {
  // randomNumber = Math.floor(Math.random() * charactersString.length);
  randombytes = crypto.randomBytes(256);
  return randombytes[0] % charactersString.length;
};

module.exports = generateRandomNumbers;
