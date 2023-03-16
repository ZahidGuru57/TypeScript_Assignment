function calculateFactorial(num: number): number {
    let factorial: number = 1;
  
    for (let i = num; i >= 1; i--) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  // Test the function with different numbers
  console.log("Factorial of 5 is: " + calculateFactorial(5));
  console.log("Factorial of 8 is: " + calculateFactorial(8));
  console.log("Factorial of 3 is: " + calculateFactorial(3));
  