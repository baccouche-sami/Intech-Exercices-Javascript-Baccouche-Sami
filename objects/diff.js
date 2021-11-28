function diff(source, propertyNames) {
    let keys = Object.keys(propertyNames)
    keys.forEach(element => {
        delete source[element]
    });
    return source
}

let o1 = { r: 0, g: 0, b: 0, a: 0 };
let withoutOpacity = { a: null };
let objectWithoutOpacity = diff(o1, withoutOpacity);

console.log(withoutOpacity === objectWithoutOpacity);

console.log(objectWithoutOpacity);