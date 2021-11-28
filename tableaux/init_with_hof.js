function initWith(...params) {
    if (params.length > 1) {
        initFrom(params[0], params[1])
    } else {
        initWithZeros(params[0])
    }
}

function initWithZeros(size) {
    let tab = new Array(size)
    for (let i = 0; i < tab.length; i++) {
        tab[i] = 0;

    }
    console.log(tab);
    return tab
}

function initFrom(size, nb) {
    let tab = new Array(size)
    for (let i = 0; i < tab.length; i++, nb++) {
        tab[i] = nb;

    }
    console.log(tab);
    return tab

}

const initZeroRes = initWith(5);
const initFromRes = initWith(5, 10);