function dump(obj) {
    let res = '';
    res += '{';
    for (const key in obj) {
        const value = obj[key];

        res += `${key}: `;

        if (typeof obj[key] === 'object') {
            res += `${dump(value)}`;
        } else if (typeof obj[key] === 'array') {
            res += `${dump(value)}`;
        } else if (typeof value === 'string') {
            res += `"${value}"`;
        } else if (typeof obj[key] === 'number') {
            res += `${value}`;
        }

        res += `, `;

    }
    res += '}';
    return res;
}

let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23, { a: 1 }];
let res = dump(obj);
console.log(res);