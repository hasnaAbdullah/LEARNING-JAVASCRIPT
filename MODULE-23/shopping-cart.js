const products = [
    {
      name: "shampoo",
      price: 300,
      quantity: 5
    },
    {
      name: "chiruni",
      price: 100,
      quantity: 2
    },
    {
      name: "shirt",
      price: 700,
      quantity: 2
    },
    {
      name: "pant",
      price: 1200,
      quantity: 3
    },
  ];
  
  function getTotalCost(items) {
    let sumOfProducts = 0;
    for (const item of items) {
      let count = 1;
      let itemQuantity = item.quantity;
      while(count <= itemQuantity){
        sumOfProducts += item.price;
        count++;
      }
    }
    return sumOfProducts;
  }
  let totalCost = getTotalCost(products);
  console.log(totalCost);
  