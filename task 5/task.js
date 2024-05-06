// Function to break camel case
function solution(s) {
    let result = "";
    for (let char of s) {
        if (char.toUpperCase() === char) {
            result += " " + char;
        } else {
            result += char;
        }
    }
    return result;
}

//The way the code works is that it defines a function called "solution" in the test text. This function breaks up the input string into separate words if it's in Camel Case, by inserting a space before each uppercase letter. If the input string doesn't contain Camel Case, it returns the input string unchanged.
console.log(solution("camelCasing"));  // Output: camel Casing
console.log(solution("identifier"));   // Output: identifier
console.log(solution(""));             // Output: ""
// output 
//camel casting
//identifer