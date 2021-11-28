class Range {
    // Initialise l'objet


    constructor(from, to) {
        this.obj = { from: from, to: to }
    }

    // Dit si `x` tombe dans l'interval [from; to]
    includes(x) {
        var list = [];
        for (var i = this.obj.from; i <= this.obj.to; i++) {
            list.push(i);
        }
        return list.includes(x)
    };

    // Produit une chaîne de caractère sous la forme "(from...to)", par exemple "(2...8)"
    toString() {
        return `( ${this.obj.from} ... ${this.obj.to})`
    }

    // Analyse une chaîne de caractère au format "(from...to)" et retourne une nouvelle instance
    static parse(s) {


        let res1 = s.match(this.integerRangePattern)
        let from = parseInt(res1[0])
        let to = parseInt(res1[1])
        let range = new Range(from, to)
        return range

    }

    // RegExp pour analyser la chaîne avec parse
    static integerRangePattern = /\d+/g

}



let r = Range.parse("(1...4)")

console.log(r);

console.log(r.includes(2));
console.log(r.toString());
class Span extends Range {
    constructor(from, to) {
        super(from, to)
    }

    toString() {
        return `( ${Math.abs(this.obj.from)} ... ${Math.abs(this.obj.to)})`
    }

}

let p = Span.parse('(1...-9)')

console.log(p);

console.log(p.includes(2));
console.log((new Span(12, -8)).toString());