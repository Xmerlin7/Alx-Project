var createCounter = function (n) {
  return function () {
    return n++;
  };
};

let fn = createCounter(10);
fn();
fn();
console.log(fn());
