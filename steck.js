function fn1() {
    console.log('до вызова fn2');
    fn2();
    console.log('после вызова fn2');
}

function fn2() {
    console.log('до вызова fn3');
    fn3();
    console.log('после вызова fn3');
}

// function fn3() {
//     console.log('внутри fn3');
// }

function fn3() {
    console.log('внутри fn3');
    throw new Error('Ошибка!!!');
}

// console.log('до вызова fn1');
// fn1();
// console.log('после вызова fn1');

try {
    console.log('до вызова fn1');
    fn1();
    console.log('после вызова fn1');
} catch (e) {
    console.log(e.message);
}