function sumEvenNumbers(array) {
    let sumEvenNums = 0;

    for (let i = 0; i < array.length; i++) {
        let currNum = Number(array[i]);

        sumEvenNums += currNum % 2 === 0 ? currNum : 0;
    }

    console.log(sumEvenNums);

}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);