class EzArray extends Array {

    constructor() {
        super()
    }

    get first() {
        return this[0]
    }

    get last() {
        return this[this.length - 1]
    }

}

let a = new EzArray();
a.push(1, 2, 3, 4); // a.length == 4; méthodes hérités
a.pop() // => 4
console.log(a);
console.log(a instanceof EzArray); // => true: instance de EzArray
console.log(a instanceof Array); // => true: instance de Array aussi
console.log(a.first); // => 1: first getter
console.log(a.last); // => 3: last getter
console.log(a[1]); // => 2: syntaxe habituelle d'accès aux élément du tableau
console.log(Array.isArray(a)); // => true
console.log(EzArray.isArray(a)); // => true