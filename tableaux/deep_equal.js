function deepEqual(a1, a2) {

    let a = a1.flat();
    let b = a2.flat();

    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

const a1 = [1, 2, [3, 4], 5];
// const a2 = JSON.parse(JSON.stringify(a1)); // Deep copy
const a2 = [1, 2, 2, [4], 5];
let assert = require('assert');

try {
    assert.deepEqual(a1, b2);
} catch (error) {
    console.log("Error: ", error)
}

console.log(a1);
console.log(a2);
console.log(a1 === a2);; // => false
let res = deepEqual(a1, a2); // => true
console.log(res);