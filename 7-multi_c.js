#!/usr/bin/node

// Get the first command-line argument and convert it to an integer
const x = parseInt(process.argv[2]);

// Check if x is a valid number
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else if (x > 0) {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
