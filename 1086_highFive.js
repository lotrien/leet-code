/**
 * 1086. High Five
 * 
 * Given a list of scores of different students, return the average score of
 * each student's top five scores in the order of each student's id. Each entry
 * items[i] has items[i][0] the student's id, and items[i][1] the student's
 * score.  The average score is calculated using integer division.
 * 
 * Example:
 * Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
 * Output: [[1,87],[2,88]]
 * Explanation: 
 * The average of the student with id = 1 is 87.
 * The average of the student with id = 2 is 88.6. But with integer division
 * their average converts to 88.
 */
const highFiveSum = function(arr) {
  return arr.sort((a, b) => b - a).reduce((acc, val, i) => i <= 4 ? acc + val : acc, 0);
}

const highFive = function(items) {
  const FIVE = 5;
  const map = {};

  items.forEach(([id, score]) => {
    if (!map[id]) {
      map[id] = [score];
    } else {
      map[id].push(score);
    }
  });

  return Object.keys(map).map(id => {
    const average = Math.floor(highFiveSum(map[id]) / FIVE);
    return [Number(id), average];
  })
}
