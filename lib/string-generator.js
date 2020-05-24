// prettier-ignore
const generateArray = (options)=>{

    characterString = "";
    const {ALLOW_ALPHABETS, ALLOW_UPPERCASE, ALLOW_NUMBERS, ALLOW_SPECIAL_CHARACTERS, EXCEPTIONS} = options;
    console.log(ALLOW_ALPHABETS);
    characterString = ALLOW_ALPHABETS ? characterString+"abcdefghijklmnopqrstuvwxyz" : characterString;
    characterString = ALLOW_UPPERCASE && ALLOW_ALPHABETS ? characterString+"ABCDEFGHIJKLMNOPQRSTUVWXYZ" : characterString;
    characterString = ALLOW_NUMBERS ? characterString+"0123456789" : characterString;
    characterString = ALLOW_SPECIAL_CHARACTERS ? characterString+"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" : characterString;
    EXCEPTIONS.split('').forEach(char => {
        characterString = characterString.replace(char,'');        
    });
    return characterString;
}

module.exports = generateArray;
