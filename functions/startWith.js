function startWith(str, start) {

    return str.substring(0, start.length) === start ? true : false;

}

const res1 = startWith("Sami", "Sa")
const res2 = startWith("Sami", "I")
console.log(res1);
console.log(res2);