const deleteArrayItem = function (array, a) {
    var newArray = [];
    
    for (let i = 0; i <= array.length; i += 2) {
        if (a === 'odd') {
            delete array[i];        
        } else if (a === 'even') {
            delete array[i + 1];  
        }
    }

    for (let i in array) {
        if (array[i]) {
            newArray.push(array[i]);
        } 
    }

    console.log(array);
    console.log(newArray);
}

const array = [1, 2, 3, 5, 6, 7];

deleteArrayItem (array, 'even');