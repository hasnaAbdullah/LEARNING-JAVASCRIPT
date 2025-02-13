let height = 80;
function feetHeight(height) {
  let intHeight = parseInt(height / 12);
  let remainingHeight = height % 12;
  let fullHeight = intHeight + " ft " + remainingHeight + " inch";
  return fullHeight;
}
const newHeight = feetHeight(height);
console.log(newHeight);
