// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  var negatives_numbers = [];
  var integers_numbers = [];
  
  for (var i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      integers_numbers.push(input[i]);
    } else {
      negatives_numbers.push(input[i]);
    }
  }

  negatives_numbers = negatives_numbers.reduce((a, negatives_numbers) => a + negatives_numbers, 0)

  return [integers_numbers.length, negatives_numbers ]
};

