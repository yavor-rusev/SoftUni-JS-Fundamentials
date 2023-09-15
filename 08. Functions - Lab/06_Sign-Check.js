function sighCheck(numOne, numTwo, numThree) {
    let numsAsArray = [numOne, numTwo, numThree];
    let numsAsArrayLength = numsAsArray.length;

    let negativeNumbersCount = 0;
    let numsProductIsPositive = true;

    for (let index = 0; index < numsAsArrayLength; index++) {

        let currentNum = Number(numsAsArray[index]);

        if (currentNum < 0) {
            negativeNumbersCount++;

        }
    }

    if (negativeNumbersCount % 2 !== 0) {
        numsProductIsPositive = false;

    }

    if (numsProductIsPositive) {
        console.log("Positive");

    } else {
        console.log("Negative");

    }
}

sighCheck(5, 12, -15);