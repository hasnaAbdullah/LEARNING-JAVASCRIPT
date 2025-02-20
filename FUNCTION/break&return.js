function validNumber(numbers) {
  let i = 0;
  while (i < numbers.length) {
    console.log(numbers[i]);
    // return numbers[i]
    break;
  }
  return numbers[i];
}
let validation = validNumber([23, 34, 65, 77]);
console.log(validation);
