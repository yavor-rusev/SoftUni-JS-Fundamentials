function magicSum(array, rightNum) {
    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++) {

        let firstNum = Number(array[index]);

        for (let j = index + 1; j < arrayLength; j++) {

            let secondNum = Number(array[j]);
            let sum = firstNum + secondNum;

            if (sum === rightNum) {
                console.log(`${firstNum} ${secondNum}`);

            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);