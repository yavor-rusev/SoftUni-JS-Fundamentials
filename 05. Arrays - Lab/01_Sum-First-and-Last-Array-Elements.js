function sumOfFirstAndLastElement(array) {
    let sumOfFirstAndLastNum = Number(array[0]) + Number(array[array.length - 1]);

    console.log(sumOfFirstAndLastNum);

}

sumOfFirstAndLastElement([20, 30, 40]);
console.log('------------');
sumOfFirstAndLastElement([10, 17, 22, 33]);
console.log('------------');
sumOfFirstAndLastElement([11, 58, 69]);
