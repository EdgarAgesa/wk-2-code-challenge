// function that accepts a string as input and swaps the case of each character.
function caseChanger(input){
    return input.split('').map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    }).join('');
}
const input = 'The Quick Brown Fox';
const output = caseChanger(input);
console.log(output);