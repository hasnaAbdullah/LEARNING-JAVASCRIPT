class User {
    constructor(name, age, email, phone, address) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.phone = phone;
      this.address = address;
    }
  }
  
  // moderator
  class Moderator {
    #name;
    #age;
    #email;
    #phone;
    #address;
    constructor(name, age, email, phone, address) {
      this.#name = name;
      this.#age = age;
      this.#email = email;
      this.#phone = phone;
      this.#address = address;
    }
    getAddress() {
      return this.#address;
    }
  }
  const moderator1 = new Moderator(
    "Hasan Nayeem",
    26,
    "mdhasanayeem@gmail.com",
    "01861470639",
    "ctg, Bangladesh"
  );
  // user 02
  const moderator2 = new Moderator(
    "Abul Nayeem",
    36,
    "abulnayeem@gmail.com",
    "018614704539",
    "Dhaka, Bangladesh"
  );
  // user 03
  const moderator3 = new Moderator(
    "Abu Nayeem",
    30,
    "abul@gmail.com",
    "018614704550",
    "Rongpur, Bangladesh"
  );
  
  console.log(moderator1.getAddress());
  
  /*====> following objects are  user <====*/
  // user 01
  const user1 = new User(
    "Hasan Nayeem",
    26,
    "mdhasanayeem@gmail.com",
    "01861470639",
    "ctg, Bangladesh"
  );
  // user 02
  const user2 = new User(
    "Abul Nayeem",
    36,
    "abulnayeem@gmail.com",
    "018614704539",
    "Dhaka, Bangladesh"
  );
  // user 03
  const user3 = new User(
    "Abu Nayeem",
    30,
    "abul@gmail.com",
    "018614704550",
    "Rongpur, Bangladesh"
  );
  