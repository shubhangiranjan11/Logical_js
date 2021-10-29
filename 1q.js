// function sum(...args) {
//     let total = 0;
// for (const a of args) {
//          total += a;
//     }
//     console.log(total);
//     console.log(typeof(args))
//     console.log(...args)
// }

// sum(1, 2, 3);





// var arr = [1, 2];
// Object.freeze(arr);
// // Object.isFrozen(arr);  
// arr[0] = 10;
// arr;                       
// console.log(arr)








function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name=0;
    callback(name);
  }
  
  processUserInput(greeting)
