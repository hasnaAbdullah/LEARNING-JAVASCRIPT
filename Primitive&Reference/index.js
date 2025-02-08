/*
let a = 10;
let b = a; //hard copy
a = 15;
console.log(a);
console.log(b);
*/
/*
let person = { name: "Sakib", age: 36, arr: ["bat", "ball"] };
// let player = person; // how to solve ?
// we can solve using spread operator
let player = { ...person }; // it is copied top layer means not deeply. if we need to copy deeply then we should use third party package like lodash
person.country = "Bangladesh";
person.arr[person.arr.length] = "stamp";
console.log(person);
console.log(player);
*/

let person = { name: "Sakib", age: 36, arr: ["bat", "ball"] };

let player = _.cloneDeep(person);
person.country = "Bangladesh";
person.arr[person.arr.length] = "stamp";
console.log(person);
console.log(player);
