//The code that tests the palindrome while ignoring capital letters, spaces and punctuation

function isPalindrome(word) {
  // Preprocess the string: remove non-alphanumeric characters and convert to lowercase
  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  // code for: if the string is empty or has one character, it's a palindrome
  if (cleanedWord.length <= 1) {
    return true;
  }

  // Comparing the first and last characters
  if (cleanedWord[0] === cleanedWord[cleanedWord.length - 1]) {
    // Checking the substring without the first and last characters
    return isPalindrome(cleanedWord.slice(1, -1));
  }

  // If the first and last characters don't match, it fails
  return false;
}

//Test samples
console.log(isPalindrome('Madam'));
console.log(isPalindrome('level'));
console.log(isPalindrome('Chicken'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
