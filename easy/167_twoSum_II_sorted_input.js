/**
 * 167. Two Sum II - Input array is sorted
 */
const twoSum = function(numbers, target) {
  let low = 0;
  let high = numbers.length - 1;

  while (low < high) {
    const sum = numbers[low] + numbers[high];
    if (sum === target) {
      return [low + 1, high + 1];
    } else if (sum < target) {
      low++;
    } else {
      high--;
    }
  }
}
