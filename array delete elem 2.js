function slice(array, from, to) {
    const newArray = [];

    if (from > 0) {
        for (let i = from; i < to; i++) {
            newArray.push(array[i]);
        }
    } else {
        for (let i = to; i < from; i--) {
            newArray.push(array[-i]);
        }
    }

    return newArray;
}

const array = [1, 2, 3, 4];
console.log(slice(array, 2, 1));


