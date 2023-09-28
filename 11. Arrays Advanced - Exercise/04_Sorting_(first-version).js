function sorting(arr) {
    let sortedArray = [];
    let arrAsNumbers = arr.map(Number);
    let arrAsNumbersLength = arrAsNumbers.length;

    for (let index = 0; index < arrAsNumbersLength / 2; index++) {
        if (arrAsNumbers.length === 1) {
            let lastNumber = arrAsNumbers.shift();
            sortedArray.push(lastNumber);
            break;

        }

        let indexOfCurrentBiggestNumber = arrAsNumbers.indexOf(Math.max(...arrAsNumbers));
        let indexOfCurrentSmallestNumber = arrAsNumbers.indexOf(Math.min(...arrAsNumbers));

        if (indexOfCurrentBiggestNumber < indexOfCurrentSmallestNumber) {
            indexOfCurrentSmallestNumber--;

        }

        let currentBiggestNumber = Number(arrAsNumbers.splice(indexOfCurrentBiggestNumber, 1));
        let currentSmallestNumber = Number(arrAsNumbers.splice(indexOfCurrentSmallestNumber, 1));

        sortedArray.push(currentBiggestNumber, currentSmallestNumber);
    }

    console.log(sortedArray.join(" "));
}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47, 9]);