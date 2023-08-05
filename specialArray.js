function specialArray(array) {
  let increasing = true;
  let inflectionPoint = -1;

  for (let i = 1; i < array.length; i++) {
    if (increasing && array[i] <= array[i - 1]) {
      increasing = false;
      inflectionPoint = i - 1;
    } else if (!increasing && array[i] >= array[i - 1]) {
      return false;
    }
  }
  if (
    inflectionPoint !== -1 &&
    inflectionPoint !== 0 &&
    inflectionPoint !== array.length - 2
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(specialArray([5, 4])); // false
console.log(specialArray([2, 5, 6])); // false
console.log(specialArray([0, 2, 3, 2, 1])); // true
console.log(specialArray([1, 5, 9, 7, 5, 3])); // true
console.log(specialArray([1, 5, 9, 7, 5, 3, 9])); // false
