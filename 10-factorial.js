#!/usr/bin/node

// Get the first command-line argument and cast to integer
const num = parseInt(process.argv[2]);

// Recursive factorial function
function factorial(n) {
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Print the result
console.log(factorial(num));

