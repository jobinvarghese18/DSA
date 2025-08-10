const findSecondLargest = (arr) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const element of arr) {
    if (element > largest) {
      secondLargest = largest;
      largest = element;
    } else if (element < largest && element > secondLargest) {
      secondLargest = element;
    }
  }
  return secondLargest;
};

const input = [1, 30, 1, 40, 22, 100, 10];
console.log(findSecondLargest(input));
