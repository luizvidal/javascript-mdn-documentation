/* function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iteratorCount = 0;

    const rangeIterator = {
        next() {
            let result;

            if (nextIndex < end) {
                result = { value: nextIndex, done: false};
                nextIndex += step;
                iteratorCount++
                return result
            }
            return { value: iteratorCount, done: true }
        }
    }
    return rangeIterator;
}

const it = makeRangeIterator(1, 10, 2)

let result = it.next();
while (!result.done) {
    console.log(result.value);
    result = it.next()
}

console.log('Iterated over sequence of size: ', result.value) */

/* function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iteratorCount = 0;
    for (let i = start; i < end; i += step) {
        iteratorCount++
        yield i;
    };
    return iteratorCount;
} */

/* function* makeIterator() {
    yield 1;
    yield 2;
}

const it = makeIterator();

for (const itItem of it) {
    console.log(itItem);
}

console.log(it[Symbol.iterator]() === it); */

/* const myIterable = {
    *[Symbol.iterator]() {
      yield 1;
      yield 2;
      yield 3;
    }
  }

for (const value of myIterable) {
    console.log(value);
}

console.log(myIterable) */

/* for (const value of ['a', 'b', 'c']) {
    console.log(value)
}

console.log([...'abc'])

function* gen() {
    yield ['a', 'b', 'c'];
}

console.log(gen().next());

[a, b, c] = new Set(['a', 'b', 'c']);
console.log(a, b, c) */

function* fibonacci() {
    let current = 0;
    let next = 1;
    while (true) {
        const reset = yield current;
        [current, next] = [next, next + current];
        if (reset) {
            current = 0;
            next = 1;
        }
    } 
}

const sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2