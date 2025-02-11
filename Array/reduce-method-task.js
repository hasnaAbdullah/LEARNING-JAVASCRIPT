/* task 01: Calculate the Total Price of Products in a Cart. For example=>
    const cart = [
  { product: "Laptop", price: 800 },
  { product: "Mouse", price: 20 },
  { product: "Keyboard", price: 50 },
  { product: "Monitor", price: 200 }
];
*/
const cart = [
  { product: "Laptop", price: 800 },
  { product: "Mouse", price: 20 },
  { product: "Keyboard", price: 50 },
  { product: "Monitor", price: 200 },
];
let totalProductPrice = cart.reduce((prevProduct, currentProduct, i) => {
  let newTotalPrice = prevProduct.price + currentProduct.price;
  prevProduct = { ...currentProduct };
  prevProduct.price = newTotalPrice;
//   currentProduct = cart[i + 1];
  return prevProduct;
});

// let totalProductPrice = cart.reduce((total, item) => total + item.price, 0);
console.log("your total products price is:", totalProductPrice.price);
