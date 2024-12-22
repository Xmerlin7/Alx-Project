const arr = [1, 2, 3, 4, 5, 43];
console.log(binarySerach(arr, 43));

function binarySerach(arr, num) {
  const len = arr.length;
  let start = 0;
  let end = len - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      return mid + 1;
    }
    if (arr[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
