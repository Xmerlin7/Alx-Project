const recursive = (n) => {
  if (n <= 0) {
    return;
  }
  recursive(n - 1);
  console.log(n);
};

recursive(5);
