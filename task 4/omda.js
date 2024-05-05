
//1. The code starts by defining the `toCamelCase` function, which takes one parameter, the string containing words separated by dashes or underscores.

//2. The `split` function is used to split the string into an array of words using the pattern `/[-_]/`. This pattern matches either a dash or an underscore as a separator between words.

//3. A variable `camelCaseStr` is created to store the final output string after converting it to camel case format.

//4. The `forEach` function iterates over each word in the `words` array. In each iteration, it checks if this word is the first word in the string. If it's the first word, it won't be processed, and it will be added to `camelCaseStr` as it is without any changes.

//5. If the word is not the first one, it will be converted to the camel case format (i.e., the first character will be converted to uppercase, and the rest of the characters will be converted to lowercase) using `word.charAt(0).toUpperCase()` for the first character and `word.slice(1).toLowerCase()` for the rest of the characters.

//6. Finally, the fully processed string `camelCaseStr`, containing words converted to camel case format, is returned.

//7. The function is tested with various strings to ensure its correctness.

// this problem solving in crose code 


function toCamelCase(str) {
    // Split the string by dash or underscore
    let words = str.split(/[-_]/);
    
    // Initialize camel case string
    let camelCaseStr = '';
    
    // Capitalize each word and append to the camel case string
    words.forEach((word, index) => {
        if (index === 0) {
            // Maintain capitalization of the first word
            camelCaseStr += word;
        } else {
            // Capitalize the remaining words
            camelCaseStr += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    });
    
    return camelCaseStr;
}

// Test cases
console.log(toCamelCase("the-stealth-warrior")); // Output: "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // Output: "TheStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")); // Output: "TheStealthWarrior"
