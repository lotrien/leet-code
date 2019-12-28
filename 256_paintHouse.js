/**
 * 256. Paint House
 */
const minCost = function(costs) {
  let red = 0;
  let green = 0;
  let blue = 0;

  for (let house of costs) {
    const tempRed = red;
    red = Math.min(green, blue) + house[0];
    const tempGreen = green;
    green = Math.min(tempRed, blue) + house[1];
    blue = Math.min(tempRed, tempGreen) + house[2];
  }

  return Math.min(red, green, blue);
}
