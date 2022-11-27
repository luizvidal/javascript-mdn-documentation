// const arr1 = new Array(element0, element1, /* … ,*/ elementN);
// const arr2 = Array(element0, element1, /* … ,*/ elementN);
// const arr3 = [element0, element1, /* … ,*/ elementN];

// const obj = {};
// obj.prop = [1,2,3,4,5];

// const arr = [9]
// console.log(arr)
// This creates an array with only one element: the number 42.
// const arr = [42];

// // This creates an array with no elements and arr.length set to 42.
// const arr = Array(42);

// // This is equivalent to:
// const arr = [];
// arr.length = 42;

// const wiseArray = Array.of(1.2);
// console.log(wiseArray)

// const emp = [];
// emp[0] = 'a';
// emp[1] = 'b';
// emp[2] = 'c';

// const cats = ['cat1', 'cat2', 'cat3'];
// console.log(cats.length);
// cats.length = 2;
// console.log(cats);

// const colors = ["red", "green", "blue"];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }

// const divs = document.getElementsByTagName('div');
// for (let i = 0, div; div = divs[i]; i++) {
//   /* Process div in some way */
// }

// colors.forEach(color => console.log(color))

// const sparseArray = [1, 2, 3, , 5];
// sparseArray.forEach((item, index, array) => {
//   console.log(item);
// });

// const string = 'adsf';
// const string2 = 'jkllç';
// console.log(string.concat(string2))

// let myArray = [1,2,3]
// myArray = myArray.concat(4,5,6);
// console.log(myArray);

// const myArray = ['a', 'b', 'c'];
// const list = myArray.join(',');
// const toString = myArray.toString()
// console.log(toString);

// const myArray = [1,2,3];
// myArray.push(0);
// console.log(myArray)

// const myArray = [1,2,3];
// const removedItemLast = myArray.pop();
// console.log(removedItemLast, myArray);

// const myArray = [1,2,3];
// const removedFirstItem = myArray.shift();
// console.log(removedFirstItem, myArray);

// const myArray = [4,5,6];
// myArray.unshift(1,2,3);
// console.log(myArray);

// let myArray = [1,2,3,4,5];
// myArray = myArray.slice(0,3);
// console.log(myArray);

// let myArray = ['a', 'b', 'c', 'd', 'e'];
// myArray.at();

// const myArray = [1,2,3,4,5,6];
// myArray.splice(1,3, 'a','b');
// console.log(myArray);

// const myArray = [1,2,3];
// myArray.reverse();
// console.log(myArray);//[3,2,1]

// let myArray = [1, 2, [3, 4]];
// myArray = myArray.flat();
// const myObj = { a: 1, b: 2, c: 3 };
// let arrObj = Object.entries(myObj);

// const myArray = [661,345,552,442];
// myArray.sort();
// console.log(myArray);

// const a = ['a','b','a','b','a'];
// console.log(a.lastIndexOf('b'))

// const a1 = ["a", "b", "c"];
// const a2 = a1.map((item) => {
//   return item.toUpperCase();
// });

// console.log(a2);

// const arr = [
//     1, 2, [
//         3, 4, [
//             5, 6, [
//                 7, 8, [9]
//             ]
//         ]
//     ]
// ];
// console.log(arr.flat(4));

// const a1 = ['a','b','c'];

// const a2 = a1.flatMap(
//     item => [item.toUpperCase(), item.toLowerCase()]
// )

// console.log(a2);

// const a3 = a1.map(item => [item.toUpperCase(), item.toLowerCase()])

// const a1 = ["a", 1, "b", 2, "c", 3];
// const a2 = a1.filter((item) => typeof item === "number");
// console.log(a2); // [1, 2, 3];

// const i = a1.find(item => typeof item === 'string');
// console.log(i)

// const i = a1.findIndex((item) => typeof item === "number")
// console.log(i)

// function isNumber(value) {
//   return typeof value === "number";
// }

// const a1 = [1, 2, 3];
// console.log(a1.every(isNumber));
// const a2 = ["1", 2, 3, 4, 5];
// console.log(a2.some((a) => typeof a === "string"));

// const a = [10, 20, 30];
// const total = a.reduce((acumulator, currentValue) => {
//     return acumulator + currentValue
// })
// console.log(total)

// const a = new Array(4);

// for (let i = 0; i < 4; i++) {
//     a[i] = new Array(4);
//     for (let j = 0; j < 4; j++) {
//         a[i][j] = `[${i},${j}]`;
//     }
// }

// const arr = [1, 2, 3];
// arr.property = "Value";

// function printArguments(...args) {
//     Array.prototype.forEach.call(arguments, arg => console.log(arg))
// }

// printArguments(1,2,34)

// const str = 'a string with a lot of characters...';
// const arr = Array.prototype.flatMap.call(str, (st, a) => [st, a]);
// console.log(arr)
