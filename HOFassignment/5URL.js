// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. Print a message indicating if the input matches the conditions or not.

const url = "https://pwskills.com/Aditya%20Gupta";
const pattern = /^(http:\/\/|https:\/\/)[\w\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;

// Check if input matches the regex pattern
if (pattern.test(url)) {
  console.log("The input is a valid URL");
} else {
  console.log("The input is not a valid URL");
}