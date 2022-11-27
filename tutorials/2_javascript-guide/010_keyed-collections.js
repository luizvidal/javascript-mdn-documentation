// const sayings = new Map();
// sayings.set('dog', 'woof');
// sayings.set('cat', 'meow');
// sayings.set('elephant', 'toot');
// sayings.size; // 3
// sayings.get('dog'); // woof
// sayings.get('fox'); // undefined
// sayings.has('bird'); // false
// sayings.delete('dog');
// sayings.has('dog'); // false

// for (const [key, value] of sayings) {
//     console.log(`${key} goes ${value}`)
// }
// // "cat goes meow"
// // "elephant goes toot"
// // sayings.clear();

const mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');
mySet.has(1)//true;
mySet.delete('foo')
mySet.size// 2]
const arr = Array.from(mySet);
const arr2 = [...mySet]
console.log(arr2)
const mySet2 = new Set([1,2,3,4])
console.log(mySet2)
