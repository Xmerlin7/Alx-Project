const recursive = (n) => {
  if (n <= 0) {
    return; // Base case: stop recursion when n reaches 0 or less
  }
  console.log(n); // Print the current value of n
  recursive(n - 1); // Call the function with n-1
}

recursive(5); // Example call with n = 5
