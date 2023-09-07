function nonDecreasingSubset(array) {
    let arrayLength = array.length;
    let biggestNumber = 0;
    let extractedArray = [];

    for (let index = 0; index < arrayLength; index++) {

        let currentNumber = Number(array[index]);

        if (currentNumber >= biggestNumber) {
            extractedArray.push(currentNumber);
            biggestNumber = currentNumber;

        }
    }

    console.log(extractedArray.join(" "));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);