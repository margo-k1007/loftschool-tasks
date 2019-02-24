const deleteArrayItem = function (array, a) {
    const newArray = [];
    
    for (let i = 0; i <= array.length; i++) {

        if ((a === 'odd') && (array[i] % 2)) {
            delete array[i];        
        } else if ((a === 'even') && !(array[i] % 2)) {
            delete array[i];        
        } 

    }

    for (let i in array) {
        newArray.push(array[i]);
    }

    console.log(array);
    console.log(newArray);
}

const array = [0, 1, 2, 3, 5, 6, 7];

deleteArrayItem (array, 'odd');