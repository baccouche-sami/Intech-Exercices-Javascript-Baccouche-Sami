function padRight(char, str, quantity) {
    let res = '';
    let pad = '';
    do {
        pad = char + pad;
        res = str + pad;
    } while (res.length !== quantity);
    return res
}
const res = padRight("a", "deux", 7)
console.log(res);

function padZeros(str, quantity) { return padRight("0", str, quantity); }

function padSpaces(str, quantity) { return padRight(" ", str, quantity); }

const resPadZeros = padZeros("Sami", 8)
const resPadSpaces = padSpaces("Sami", 8)

console.log(resPadSpaces);
console.log(resPadZeros);