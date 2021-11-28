function zip(...iterables) {
    let res = []
    let gen1 = gen(iterables)
        //console.log(gen1);
    console.log(gen1.next());
    Array.from(gen1).forEach(element => {
        res.push(element)
    });

    //console.log(res);
    return res;
}


function* gen(val) {
    yield val
}
let assert = require('assert');
const { log } = require('console');

//assert.deepEqual([...zip("abc", [1, 2, 3])], ['a', 1, 'b', 2, 'c', 3])
//assert.deepEqual([...zip("abcd", "123", "+-")], ['a', '1', '+', 'b', '2', '-', 'c', '3', 'd'])

function* zip1(...iterables) {
    const its = Array.from(iterables, e => e[Symbol.iterator]());
    console.log(its);
    let res = []

    while (true) {
        const es = its.map(it => it.next());
        if (es.some(e => e.done)) return;
        yield es.map(e => e.value);
    }
    return res
};

zip1("abc", [1, 2, 3])
assert.deepEqual([...zip1("abc", [1, 2, 3])], ['a', 1, 'b', 2, 'c', 3])