

// Get the first argument
const arg = process.argv[2];

// Check if argument exists
if (arg === undefined) {
  console.log('No argument');
} else {
  console.log(arg);
}
