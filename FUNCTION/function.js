function myFunction(a, b) {
  let c = a + b; // a, b, c work as a local variable
  return c; /* return statement is the last 
              statement of function. If we don't return anything
              from function then js will return undefined by default*/
}
console.log(myFunction(2, 4));
