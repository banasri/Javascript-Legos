const fs = require('fs');
const path = require('path');

// Path to the input text file
const inputFilePath = path.join(__dirname, 'abc.txt');

// Path to the output text file
const outputFilePath = path.join(__dirname, 'xyz.txt');

// Read the file asynchronously
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the data by lines
  const lines = data.split('\n');

  // Extract the numbers
  const numbers = lines.map(line => {
    // Split by '=>'
    const parts = line.split('=>');

    // Trim whitespace and get the second part (number)
    if (parts.length > 1) {
      return parts[1].trim();
    }

    return null;
  }).filter(num => num !== null); // Filter out null values

  // Join the numbers with a newline character for writing to the output file
  const outputData = numbers.join('');

  // Write the extracted numbers to the output file
  fs.writeFile(outputFilePath, outputData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }
    console.log('Numbers successfully written to xyz.txt');
  });
});
