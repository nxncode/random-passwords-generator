const passwords = require("./lib/password-generator.js");
const generateRandomNumber = require("./lib/generate-random-number");
const errorCheck = require("./lib/check-options-error");
const processOptions = require("./lib/process-options");

var options = {};

const passwordGenerator = (options) => {
  options = processOptions(options);

  errorCheck(options);
  const pswd = passwords(options);

  return pswd;
};

module.exports = passwordGenerator;
