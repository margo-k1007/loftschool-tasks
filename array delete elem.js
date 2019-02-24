const deleteArrayItem = function (array, i) {
    delete array[i];
    var newArray = [];
    
    for (let i in array) {
        if (array[i]) {
            newArray.push(array[i]);
        } 
    }
    console.log(array);
    console.log(newArray);
}

const array = [1, 2, 3];

deleteArrayItem (array, 1);