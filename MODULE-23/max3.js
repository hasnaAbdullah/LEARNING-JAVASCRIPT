function maxOfThree(person1, person2, person3) {
  if (person1 > person2 && person1 > person3) {
    return ("person 1 is oldest");
  } else if (person2 > person1 && person2 > person3) {
    return ("person 2 is oldest");
  }
  return ("person 3 is oldest");
}
let age1 = 23;
let age2 = 45;
let age3 = 55;
let maxPerson = maxOfThree(age1, age2, age3);
console.log(maxPerson)
