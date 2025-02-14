const phones = [
  {
    name: "samsung",
    price: 30000,
    camera: "12mp",
    color: "black",
  },
  {
    name: "oppo",
    price: 40000,
    camera: "12mp",
    color: "black",
  },
  {
    name: "honor",
    price: 13000,
    camera: "12mp",
    color: "black",
  },
  {
    name: "xoami",
    price: 12000,
    camera: "12mp",
    color: "black",
  },
  {
    name: "walton",
    price: 25000,
    camera: "12mp",
    color: "black",
  },
  {
    name: "iphone",
    price: 100000,
    camera: "12mp",
    color: "black",
  },
];

function cheapestPhone(mobiles) {
  let cheapest = mobiles[0];
  for (const mobile of mobiles) {
    if (mobile.price < cheapest.price) {
      cheapest = mobile;
    }
  }
  return cheapest;
}
let cheapest = cheapestPhone(phones);
console.log(cheapest);
