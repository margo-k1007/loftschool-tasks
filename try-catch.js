function div(a, b) {
    if (b < 0) {
        throw new Error('b должен быть положительным');
    } else if (b == 0) {
        throw new Error('На ноль делить нельзя');
    } else if (b == undefined) {
        throw new Error('b должен быть передан');
    } else if (!isFinite(b)) {
        throw new Error('b должен быть числом');
    }

    return a / b;
}

try {
    var result = div(10, 5);
    console.log(result);
} catch (e) {    
    console.log(e.message); 
}