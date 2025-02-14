const products = [
  {
    name: "shampoo",
    price: 300,
  },
  {
    name: "chiruni",
    price: 100,
  },
  {
    name: "shirt",
    price: 700,
  },
  {
    name: "pant",
    price: 1200,
  },
];

function getTotalCost(items) {
  let sumOfProducts = 0;
  for (const item of items) {
    sumOfProducts += item.price;
  }
  return sumOfProducts;
}
let totalCost = getTotalCost(products);
console.log(totalCost);
