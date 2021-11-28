/** This is a description of the foo function. */

/**
 * Represents a Split.
 * @constructor
 * @param {string} str - STR
 * @param {string} sep - STP.
 */
function split(str, sep) {
    let res = ['']
    let j = 0;
    let m = ''

    let lenSep = sep.length;
    console.log(lenSep);
    if (lenSep === 1) {
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === sep) {
                j++;
                res.push('')
            } else {
                res[j] += str.charAt(i)
            }

        }
    } else {
        for (let i = 0; i < str.length; i++) {
            //console.log(str.substring(i, sep.length - 1));
            if (str.substring(i, sep.length - 1) === sep) {
                j++;
                res.push('')
            } else {
                m += str.charAt(i)
                    //res[j] += str.substring(i, sep.length - 1)
            }

        }
    }

    return res
}


const res = split("S,A,M,I", ",")
    //const res2 = split("Bonjour, je m'appelle Jean !", " "); // => ["Bonjour,", "je", "m'appelle", "Jean", "!"]

console.log(res);
//console.log(res2);