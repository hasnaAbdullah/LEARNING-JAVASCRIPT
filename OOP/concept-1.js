/* Suppose, we want to create a software and it is cricket game software.
As it is a cricket game software, there must be thousands of player. So we need to be create thousands of player object. 
*/
// object template

class Human {
    constructor (name) {
        this.name = name,
        this.hands = 2;
        this.legs = 2;
    }
}

class Baby extends Human{
    constructor(name) {
        super(name)
        this.cry = 'waa waa'
    }
}
const bulbul = new Baby ('bulbul');
console.log(bulbul.name)