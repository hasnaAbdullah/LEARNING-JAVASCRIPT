import { User as Customer, Moderator as Seller } from "./encapsulation.js";
// console.log(User)

const customer1 = new Customer(
  "Abid hasan",
  34,
  "abidhasan@gmai.com",
  "018640530",
  "Cumilla, Bangladesh"
);
const seller_01 = new Seller(
  "Sakib hasan",
  44,
  "hasansakib@gmai.com",
  "019640230",
  "Khulna, Bangladesh"
);
console.log(seller_01.getAddress());
