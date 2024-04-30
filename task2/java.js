
//It must start with a hashtag (#).
//All words must have their first letter capitalized.
//If the final result is longer than 140 chars it must return false.
//If the input or the result is an empty string it must return false.
function generateHashtag(str) {
    // Trim the input string to remove leading and trailing whitespace
    str = str.trim();
    
    // Check if the input or the result is an empty string
    if (str === '') return false;
    
    // Split the string into an array of words
    const words = str.split(/\s+/);
    
    // Capitalize the first letter of each word and join them together
    const hashtag = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    
    // Prepend a "#" symbol
    const result = '#' + hashtag;
    
    // Check if the resulting hashtag is longer than 140 characters
    if (result.length > 140) return false;
    
    return result;
  }
  
  // Test cases
  console.log(generateHashtag(" Hello there thanks for trying my Kata")); // Output: #HelloThereThanksForTryingMyKata
  console.log(generateHashtag("    Hello     omda   ")); // Output: #HelloWorld
  console.log(generateHashtag("")); // Output: false
  