// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope


  function caesar(input, shift, encode = true) {
    // your solution code here
    let result = '';
    const SHIFT_COMP = 26;

    // Check if we need to decode
    if(!encode) shift *= -1;

    // Check if there is a shift value or if it goes out of bounds. If it does, return false
    if(shift > 25 || shift < -25 || !shift || shift == 0) return false;

    // Convert input to lowercase
    const message = input.toLowerCase();

    // Loop through the string
    for(const currChar of message){
      let currCharCode = currChar.charCodeAt();

      // Check if the current value is a letter, then code/decode
      if(currChar.match(/[a-z]/)){
        // Apply shift
        currCharCode += shift;

        // Check if the char code goes out of bounds after the shift has been applied and compensate with the SHIFT_COMP variable
        if(currCharCode < 97) currCharCode += SHIFT_COMP;
        if(currCharCode > 122) currCharCode -= SHIFT_COMP;

        // Convert the charCode to a string and concatenate it to the 'result' string
        result += String.fromCharCode(currCharCode);
      
      // Else just add the current character to the resulting string without any changes
      }else{
        result += currChar;
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
