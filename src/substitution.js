// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function encodeMessage(message, abc, alphabet) {
    let res = '';
    for (const currChar of message) {
      // get index of the current character according to the 'abc' array
      let currCharIndex = abc.indexOf(currChar);

      // Check if the current value is a letter, then code/decode
      if (currChar.match(/[a-z]/)) {
        res += alphabet[currCharIndex];

        // Else just add the current character to the resulting string without any changes
      } else {
        res += currChar;
      }
    }
    return res;
  }

  
  function decodeMessage(message, abc, alphabet) {
    let result = '';
    for (const currChar of message) {
      // get index of the current character according to the 'alphabet' string
      let currCharIndex = alphabet.indexOf(currChar);

      // Check if the current value is not a space
      if (!currChar.match(/\s+/g)) {
        result += abc[currCharIndex];

        // Else just add the current character to the resulting string without any changes
      } else {
        result += currChar;
      }
    }
    return result;
  }


  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    const message = input.toLowerCase();
    let result = '';

    // Check if an alphabet is being passed in or if it is exactly 26 characters
    if (!alphabet || alphabet.length !== 26 || !input) return false;

    // Check if 'alphabet' has any repeated characters
    let anyDuplicates = new Set(alphabet)
    if ([...anyDuplicates].length !== 26) return false;

    // Check if we need to encode, if so execute encodeMessage(), else execute decodeMessage()
    if (encode) {
      result = encodeMessage(message, abc, alphabet);
      return result;
    }
    
    // Decode if encode is false
    return result = decodeMessage(message, abc, alphabet);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
