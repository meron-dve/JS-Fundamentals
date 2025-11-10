#!/usr/bin/node

// Get the first command-line argument
const arg = process.argv[2];

// Convert to integer
const num = parseInt(arg);

// Check if it's a valid number
if (isNaN(num)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${num}`);
}

