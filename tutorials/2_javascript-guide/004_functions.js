// function square (num) {
//     return num * num;
// }

// function myFunc(theObject) {
//     theObject.make = 'Toyota';
//   }

//   const mycar = {
//     make: 'Honda',
//     model: 'Accord',
//     year: 1998,
//   };

//   // x gets the value "Honda"
//   const x = mycar.make;

//   // the make property is changed by the function
//   myFunc(mycar);
//   // y gets the value "Toyota"
//   const y = mycar.make;

// const square = function (number) {
//     return number * number
// }

// console.log( square(4));

// const factorial = function fac(n) {
//     return n < 2 ? 1 : n * fac(n - 1)
// }

// console.log(factorial(4));

// function map(f, a) {
//     const result = new Array(a.length);

//     for (let i = 0; i < a.length; i ++) {
//         result[i] = f(a[i]);
//     }

//     return result;
// }

// const f = function (x) {
//     return x * x * x;
// }

// const numbers = [0, 1, 2, 3];

// const cube = map(f, numbers);

// console.log(cube);

// console.log(map((a) => Math.pow(a, 3), [1,2,3]))

// function loop(x) {
//     if (x >= 10) {
//         return;
//     }

//     console.log(x);

//     loop(x + 1);
// }

// function foo(i) {
//     if (i < 0) {
//         return;
//     }

//     console.log(`begin: ${i}`)
//     foo(i - 1);
//     console.log(`end: ${i}`)
// }

// foo(3);

// function addSquares(a, b) {
//     function squre(x) {
//         return x * x;
//     }

//     return squre(a) + squre(b);
// }

// function outside(x) {
//     function inside(y) {
//         return x + y;
//     }
//     return inside;
// }
// console.log(outside(5)(3));

//  const createPet = function (name) {
//     let sex;

//     const pet = {
//         setName(newName) {
//             name = newName;
//         },

//         getName() {
//             return name;

//         },

//         getSex() {
//             return sex;
//         },

//         setSex(newSex) {
//             if (typeof newSex === 'string' && newSex.toLowerCase() === 'male' | 'female') {
//                 sex = newSex;
//             }
//         }
//     }

//     return pet;
//  }

//  const pet = createPet('Bob');
//  pet.setSex('male');
//  console.log(pet);

// function myConcat(separator) {
//     let result = '';

//     for (let i = 1; i < arguments.length; i++) {
//         result += arguments[i] + separator;
//     }

//     return result;
// }

// console.log(myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley'));

// function multiply(a, b = 1) {
//     return a * b;
// }

// console.log(multiply(3,3));

// function multiply(multplier, ...theArgs) {
//     return theArgs.map((arg) => multplier * arg);
// };

// const arr = multiply(2, 1, 2, 3);

// console.log(arr);

// const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// const a2 = a.map(function(s) {return s.length});

// const a3 = a.map(s => s.length);

// console.log(a3);