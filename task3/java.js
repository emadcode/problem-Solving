//Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

//The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ')



function toWeirdCase(str) {
    // Split the string into an array of words
    const words = str.split(' ');
    
    // Map over each word and apply the transformation
    const transformedWords = words.map(word => {
        // Split the word into an array of characters
        const characters = word.split('');
        
        // Map over each character and apply the transformation
        const transformedCharacters = characters.map((char, index) => {
            // Check if the index is even or odd
            if (index % 2 === 0) {
                // If even, convert to uppercase
                return char.toUpperCase();
            } else {
                // If odd, convert to lowercase
                return char.toLowerCase();
            }
        });
        
        // Join the characters back into a word
        return transformedCharacters.join('');
    });
    
    // Join the words back into a string and return
    return transformedWords.join(' ');
}

// Test cases
console.log(toWeirdCase("String")); // Output: "StRiNg"
console.log(toWeirdCase("Weird string case")); // Output: "WeIrD StRiNg CaSe"
