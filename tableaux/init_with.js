function initWith(size, f) {
    let fun = f;
    let tab = new Array(size)

    console.log(fun);

    if (fun === 0) {
        for (let i = fun; i < tab.length; i++) {
            tab[i] = fun
        }
    } else {
        for (let i = 0; i < tab.length; i++, fun++) {
            tab[i] = fun
        }
    }

    console.log(tab);
}

const withZero = () => 0;
const fromZero = index => index;
const from42 = index => 42 + index;
initWith(5, withZero()); // => [0, 0, 0, 0, 0]
initWith(5, fromZero(1)); // => [0, 1, 2, 3, 4]
initWith(5, from42(4)); // => [42, 43, 44, 45, 46]