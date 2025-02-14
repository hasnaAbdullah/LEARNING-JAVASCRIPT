/* 
remove duplicate items from an array
*/

const fruits = ['banana','apple', 'watermelon', 'orange', 'apple', 'mango', 'banana', 'orange', 'pineapple', 'dragon' ]

function remove_Duplicate_Items(items) {
    const emptyArr = [];
    for(const item of items) {
        if(!(emptyArr.includes(item))) {
            emptyArr.push(item);
        }
    }
    return emptyArr;
}
let newFruits = remove_Duplicate_Items(fruits);
console.log(newFruits)