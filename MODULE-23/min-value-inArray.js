/* who is the tallest ? you have been given some height of persons in an array. find the tallest one. Height(inch)
 */
const personsHeight = [60, 70, 58, 65, 72, 57, 64];

function minHeight(heights) {
  let min = heights[0];
  let i = 1;
  let heightLength = heights.length;

  while (i < heightLength) {
    if (!(heights[i] > min)) {
      min = heights[i];
    }
    i++;
  }
  return min;
}

let shortestPerson = minHeight(personsHeight);
console.log(shortestPerson);
