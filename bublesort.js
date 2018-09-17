function bubbleSort(array) {
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; i++) {
      if (array[j] > array[i]) {
        temp = array[i];
      } else {
        temp = array[j];
      }
    }
  }
}

console.log(bubbleSort([5, 3, 8, 2]));
