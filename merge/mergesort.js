function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const firstHalf = wholeArray.slice(0, wholeArray.length / 2);
  const secondHalf = wholeArray.slice(wholeArray.length / 2);

  return [firstHalf, secondHalf];
}

console.log(split([1, 2, 3, 4, 5]));

function merge(array) {
  return [].concat(...array);
}

console.log(merge([[1], [2], [3], [4]]));

function mergeSort(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].length > 1) {
        return split(arr[i][j]);
      } else {
        newArr.push([arr[i][j]]);
      }
    }
  }

  for (let i = 0; i <)
}

console.log(mergeSort([[1, 2, 3], [4, 5, 6]]));
