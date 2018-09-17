describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    expect(split([5, 3, 8, 2])).toEqual([[5, 3], [8, 2]]);
    expect(split([5, 3, 8, 2, 1])).toEqual([[5, 3], [8, 2, 1]]);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    expect(merge([[1, 2, 3], [4, 5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("Merge Sort function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    expect(mergeSort([[4, 5, 6], [1, 2, 3]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
