/* how to iterate in array */
let fruits = ["Banana", "Orange", "Orange", "Mango", "Orange", "Apple"];

/*method 1 : any kinds of for loop we can use
for (let fruit of fruits) {
  console.log(fruit);
}
*/


/* method 2 : looping by forEach 
let returnFruits = fruits.forEach( (value, index, arr) =>{
    console.log(value)
})
console.log(returnFruits)
*/

let returnFruits = fruits.map( (value, index, arr) =>{
    console.log(value)
    return index;
})
console.log(returnFruits)
/* method 3

*/

/* method 4

*/

/* method 5

*/