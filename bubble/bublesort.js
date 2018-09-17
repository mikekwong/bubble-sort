function bubbleSort(array) {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = false;
      }
    }
  } while (swap);
  return array;
}

console.log(bubbleSort([5, 3, 8, 2]));
