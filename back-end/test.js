const arr = [1, 2, 3, 4, 5, 43];
console.log(binarySerach(arr, 1));

function binarySerach(arr, num) {
  const len = arr.length;
  let start = 0;
  let end = len;
  let mid = Math.floor((start + end) / 2)
  while (start <= end) {
    if (arr[mid] === num) {
      return mid;
    }
    if (arr[mid] > num) {
      end = mid;
      mid = Math.floor((start + end) / 2)
    }
    if (arr[mid] < num) {
      start = mid;
      mid = Math.floor((start + end) / 2)
    }
  }
  return -1;
}
