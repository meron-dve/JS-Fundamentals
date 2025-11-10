#!/usr/bin/node

// Get the first command-line argument and convert it to an integer
const size = parseInt(process.argv[2]);

// Check if size is a valid positive number
if (isNaN(size)) {
  console.log('Missing size');
} else if (size > 0) {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}

