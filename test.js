const arr = [1, 2, 3, 5, 6, 8, 10];
console.log(binarySearch(arr, 8));

function binarySearch(arr, number) {
  let left = 0;
  let right = arr.length - 1;
  //   looooop
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let guess = arr[mid]; //5

    if (guess === number) {
      return mid;
    }
    if (guess > number) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}
