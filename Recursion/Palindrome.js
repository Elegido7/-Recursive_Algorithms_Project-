function isPalindrome(word) {
  // Base case: if the string is empty or has one character, it's a palindrome
  if (word.length <= 1) {
    return true;
  }
  // Compare the first and last characters
  if (word[0] === word[word.length - 1]) {
    // Check the substring without the first and last characters
    return isPalindrome(word.slice(1, -1));
  }
  // If the first and last characters don't match, it's not a palindrome
  return false;
}

// Example usage
console.log(isPalindrome('madam'));
console.log(isPalindrome('level'));
console.log(isPalindrome('Chicken'));
