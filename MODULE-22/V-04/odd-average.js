/*
calculate the average of the odd number in an array
*/
const oddArr = [82, 37, 4, 21, 3, 8, 91];
/*
function oddAverage(numbers) {
    let oddNumbers = [];
    for(const number of numbers) {
        if(number % 2 === 1) {
            oddNumbers.push(number);
        }
    }
    let sum = 0;
    for(const odd of oddNumbers) {
        sum += odd;
    }
    return sum;
}
    */

function oddAverage(numbers) {
    let len = 0;
    let sum = 0;
    for(const number of numbers) {
        if(number % 2 === 1) {
            sum += number;
            len++;
        }
    }
    let average = parseInt(sum / len);
    return [average, len];
}
let averageResult = oddAverage(oddArr);
console.log('length is:', averageResult[1], 'and average is:', averageResult[0])