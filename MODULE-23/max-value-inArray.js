/* who is the tallest ? you have been given some height of persons in an array. find the tallest one. Height(inch)
 */
const personsHeight = [60, 70, 58, 65, 72, 57, 64];
/*
function maxHeight(heights) {
  let max = heights[0];
  let i = 1;
  let heightLength = heights.length;
 for(const height of heights) {
        if(height > max) {
            max = height;
        }
    }
  while (i < heightLength) {
    if (heights[i] > max) {
      max = heights[i];
    }
    i++;
  }
  return max;
} */
function maxHeight(heights) {
    let sortedHeights = heights.sort((a, b)=> {
        return a - b;
    })
    return sortedHeights.pop()
}
let tallestPerson = maxHeight(personsHeight);
console.log(tallestPerson);
