const unsortedArray = [34, 7, 23, 32, 5, 62, -9, -1, 45, 19];

const smallest = findSmallest(unsortedArray);
console.log(unsortedArray[smallest]);

function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    // Changed loop condition
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  let newArr = [];
  const originalLength = arr.length; // Avoid dynamic length changes
  for (let i = 0; i < originalLength; i++) {
    // Corrected loop
    let smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]); // Extract the value from the returned array
  }
  return newArr;
}

console.log(selectionSort(unsortedArray));
