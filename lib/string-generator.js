// prettier-ignore
const generateArray = (options)=>{

    characterString = "";
    const {ALLOW_ALPHABETS, ALLOW_UPPERCASE, ALLOW_NUMBERS, ALLOW_SPECIAL_CHARACTERS, EXCEPTIONS} = options;
    characterString = ALLOW_ALPHABETS || true ? characterString+"abcdefghijklmnopqrstuvwxyz" : characterString;
    characterString = ALLOW_UPPERCASE && ALLOW_ALPHABETS || true? characterString+"ABCDEFGHIJKLMNOPQRSTUVWXYZ" : characterString;
    characterString = ALLOW_NUMBERS || true ? characterString+"0123456789" : characterString;
    characterString = ALLOW_SPECIAL_CHARACTERS || true ? characterString+"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" : characterString;
    if(EXCEPTIONS){
        EXCEPTIONS.split('').forEach(char => {
            characterString = characterString.replace(char,'');        
        });
    }
    
    return characterString;
}

module.exports = generateArray;
