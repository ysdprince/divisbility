// Function to print numbers divisible by 3 but not by 2
function printDivisibleBy3NotBy2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      
      // Check if the number is divisible by 2
      if (number % 2 === 0) {
        continue; // Skip to the next iteration if divisible by 2
      }
      
      // Check if the number is divisible by 3
      if (number % 3 === 0) {
        console.log(number);
      }
    }
  }
  
  // Example usage with an array of numbers
  const numbers = [1, 2, 3, 6, 9, 12, 15, 17];
  
  printDivisibleBy3NotBy2(numbers);
  