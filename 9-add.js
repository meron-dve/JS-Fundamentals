#!/usr/bin/node

// Get the two command-line arguments
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

// Define the add function
function add(a, b) {
  return a + b;
}

// Print the result
console.log(add(a, b));
