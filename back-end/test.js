const recursive = (n) => {
  if (n <= 0) {
    return;
  }
  console.log(n);
  recursive(n - 1);
};

recursive(5);
