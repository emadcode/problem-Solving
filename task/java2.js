function rot13(str) {
    return str.replace(/[A-Za-z]/g, function(char) {
        //This function iterates through each character in the input string and applies the ROT13 transformation to alphabetical characters, leaving non-alphabetical characters unchanged.
      return String.fromCharCode((char <= "Z" ? 90 : 122) >= (char = char.charCodeAt(0) + 13) ? char : char - 26);
    });
  }
  
  // Test examples
  console.log(rot13("EBG13 rknzcyr.")); // "ROT13 "
  console.log(rot13("This is my first ROT13 excercise"));
  