function reverse(word) {
  return word.split("").reverse().join("")
}

function isPalindrome(word) {
  const reversedWord = reverse(word)
  return word === reversedWord;
}
/* 
  Add your pseudocode here
// reverse the input string
  // if the reversed string is the same as the input
  //   return true
  // else
  //   return false


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eye"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("KILLMONGER"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
}

module.exports = isPalindrome;
