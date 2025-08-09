const findSecondLargest = (arr) => {
  let largest = 0;
  let secondLargest = 0;

  for (const element of arr) {
    if (element > largest) {
      largest = element;
    } else if (element < largest && element > secondLargest) {
      secondLargest = element;
    }
  }
  return secondLargest;
};

const input = [10, 2, 100, 10, 40, 22, 99, 3, 100];
console.log(findSecondLargest(input));
