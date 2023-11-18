// Write a 3 functions - reverseVowelsAndReplaceL(), reverseVowelsAndReplaceO(), reverseVowelsAndReplaceS(). Apply the following rules:

// Each function will receive a string, sometimes provided by other functions
// Each function should reverse the vowels
// Each function should console.log the reversed vowels
// Use .split(), .join(), .includes() and .replace()
// The input string may contain uppercase and lowercase letters, spaces, and punctuation. You should preserve the position of other characters.

// reverseVowelsAndReplaceL():
// Replaces all 'L's (uppercase and lowercase) with '1's (ones)
// Calls reverseVowelsAndReplaceO() while providing it reverseVowelsAndReplaceL’s reversed string
// reverseVowelsAndReplaceO():
// Takes reverseVowelsAndReplaceL’s reversed string and reverses it AGAIN
// Replaces all 'O's (uppercase and lowercase) with '0's (zeros)
// Calls reverseVowelsAndReplaceS() while providing it reverseVowelsAndReplaceO’s reversed string
// reverseVowelsAndReplaceS():
// Replaces all 'S's (uppercase and lowercase) with '5's (fives)
// Consoles and returns the final reversed string




function reverseVowelsAndReplaceL(inputString) {
  function isVowel(char) {
    return "aeiouAEIOU".includes(char);
  }

  const characters = inputString.split("");
  const vowels = characters.filter(char => isVowel(char));
  vowels.reverse();
  console.log(vowels);

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === "l" || characters[i] === "L") {
      characters[i] = "1";
    }
  }

  let vowelIndex = 0;
  for (let i = 0; i < characters.length; i++) {
    if (isVowel(characters[i])) {
      characters[i] = vowels[vowelIndex];
      vowelIndex++;
    }
  }
  const result = characters.join("");
  return result;
}

function reverseVowelsAndReplaceO(inputString) {
  function isVowel(char) {
    return "aeiouAEIOU".includes(char);
  }

  const characters = inputString.split("");
  const vowels = characters.filter(char => isVowel(char));
  vowels.reverse();
  console.log(vowels);

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === "O" || characters[i] === "o") {
      characters[i] = "0";
    }
  }

  let vowelIndex = 0;
  for (let i = 0; i < characters.length; i++) {
    if (isVowel(characters[i])) {
      characters[i] = vowels[vowelIndex];
      vowelIndex++;
    }
  }
  const result = characters.join("");
  return result;
}


function reverseVowelsAndReplaceS(inputString) {
  function isVowel(char) {
    return "aeiouAEIOU".includes(char);
  }

  const characters = inputString.split("");
  const vowels = characters.filter(char => isVowel(char));
  vowels.reverse();
  console.log(vowels);

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === "s" || characters[i] === "S") {
      characters[i] = "5";
    }
  }

  let vowelIndex = 0;
  for (let i = 0; i < characters.length; i++) {
    if (isVowel(characters[i])) {
      characters[i] = vowels[vowelIndex];
      vowelIndex++;
    }
  }
  const result = characters.join("");
  return result;
}




function reverseVowelsAndReplaceLetters(inputString) {
  let replaceL = reverseVowelsAndReplaceL(inputString);
  let replaceO = reverseVowelsAndReplaceO(replaceL);
  let replaceS = reverseVowelsAndReplaceS(replaceO);
  return replaceS;
}

console.log(reverseVowelsAndReplaceLetters("This is a test string. Lol"));










