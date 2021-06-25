function arrayToList(array) {
    let list = new Object;
    for (let i = (array.length - 1); i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        };
    }
    return list;
}

function listToArray(list) {
    let array = new Array;
    while (list.rest) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

function prepend(el,list) {
    let prependList = new Object;
    prependList = {
        value: el,
        rest: list
    }
    return prependList;
}

function nth(list, num) {
    let counter = -1;
    let currentValue = 0;
    for (let key in list) {
        counter++;
        currentValue = list.value;
        list = list.rest;
        if (counter == num) {
            return currentValue;
        }
    }
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20