function smallestOfThreeNumbers(firstNum, secondNum, thirdNum) {
    let numsArray = [firstNum, secondNum, thirdNum];
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let index = 0; index < numsArray.length; index++) {

        let currentNumber = numsArray[index];

        if (currentNumber < minNumber) {
            minNumber = currentNumber;

        }
    }

    return minNumber;
}

console.log(smallestOfThreeNumbers(120, 25, 13));