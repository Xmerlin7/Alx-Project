const unsortedArray = [34, 7, 23, 32, 5, 62, -9, -1, 45, 19];

const smallest = findSmallest(unsortedArray);
console.log(unsortedArray[smallest]);
function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}
