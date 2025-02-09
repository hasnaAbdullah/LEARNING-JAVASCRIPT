let fruit = "pineapple";
let fruits = ["Banana", "Orange", "Orange", "Mango", "Orange", "Apple"];
fruits.forEach((value, index, arr) => {
  let insideFruits = [
    "Blackcurrant",
    "Blueberry",
    "Lime",
    "Lychee",
    "Muskmelon",
    "Jackfruit",
  ];
  fruits[index] = insideFruits[index];
});
console.log(fruits);
