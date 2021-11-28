function padLeft(char, str, quantity) {
    let res = '';
    let pad = '';
    do {
        pad = char + pad;
        res = pad + str;
    } while (res.length !== quantity);
    return res
}
const res = padLeft("a", "deux", 7)
console.log(res);

function padZeros(str, quantity) { return padLeft("0", str, quantity); }

function padSpaces(str, quantity) { return padLeft(" ", str, quantity); }



const resPadZeros = padZeros("Sami", 8)
const resPadSpaces = padSpaces("Sami", 8)

console.log(resPadSpaces);
console.log(resPadZeros);