function maxNumber(array) {
    let topIntegers = [];
    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++) {

        let currentNumber = Number(array[index]);
        let isTopInteger = true;

        for (let j = index + 1; j < arrayLength; j++) {

            let nextNumber = Number(array[j]);

            if (currentNumber <= nextNumber) {
                isTopInteger = false;
                break;

            }
        }

        if (isTopInteger) {
            topIntegers.push(currentNumber);

        }
    }

    console.log(topIntegers.join(" "));

}

maxNumber([1]);