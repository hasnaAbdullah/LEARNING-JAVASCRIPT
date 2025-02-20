class Player {
  #name;
  #age;
  #skill;
  #experience;

  constructor(name, age, skill, experience) {
    this.#name = name;
    this.#age = age;
    this.#skill = skill;
    this.#experience = experience;
  }

  getFullInformation() {
    return `${this.#name} is ${this.#age} years old. He is ${
      this.#skill
    } and he has ${this.#experience} years experience `;
  }
}

class Cricketer extends Player {
  #centuries;
  constructor(name, age, skill, experience, centuries) {
    super(name, age, skill, experience);
    this.#centuries = centuries;
  }

  getCenturies() {
    return `${this.name} has ${this.#centuries} in his entire career`;
  }
}

const cricketer1 = new Cricketer('sakib', 35, "all-rounder", 15);
console.log(cricketer1.getFullInformation())


/* footballer class */
class Footballer extends Player {
  #goals;
  constructor(name, age, skill, experience, goals) {
    super(name, age, skill, experience);
    this.goals = goals;
  }
  getCenturies() {
    return `${this.name} has ${this.#goals} in his entire career`;
  }
}
