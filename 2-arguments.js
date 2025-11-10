#!/usr/bin/node

// Count how many arguments are passed (excluding the first two: node and script path)
const count = process.argv.length - 2;

// Print message based on number of arguments
if (count === 0) {
  console.log('No argument');
} else if (count === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
