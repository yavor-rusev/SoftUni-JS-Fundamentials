function sumEvenNumbers(array) {
    let sumEvenNums = 0;

    for (let i = 0; i < array.length; i++) {
        let currNum = Number(array[i]);

        if (currNum % 2 === 0) {
            sumEvenNums += currNum;

        }
    }

    console.log(sumEvenNums);

}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);