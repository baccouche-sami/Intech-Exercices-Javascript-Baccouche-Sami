function filter(iterable, fun) {

    return {
        [Symbol.iterator]() {
            const iterator = iterable[Symbol.iterator]();
            return {
                next() {
                    const val = iterator.next();
                    if (val.done)
                        return {
                            done: true,
                        };
                    else if (fun(val.value)) {
                        return {
                            value: val.value,
                            done: false,
                        };
                    } else {
                        return {
                            value: filter(iterator, fun).next().value,
                            done: false,
                        };
                    }

                }
            }
        }

    }[Symbol.iterator]()
}

const iterator = filter("hello", v => "aeiouy".includes(v));

console.log(iterator.next().value); // => "e"
console.log(iterator.next().value); // => "o"
console.log(iterator.next().done); // => true