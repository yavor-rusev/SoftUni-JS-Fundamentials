function addAndSubtract(firstNum, secondNum, thirdNum) {

    function sumFirstTwoNumbers(firstNumber, secondNumber) {
        return firstNumber + secondNumber;

    }

    let returnedSum = sumFirstTwoNumbers(firstNum, secondNum);

    function subtractSumAndThirdNumber(sum, thirdNumber) {
        return sum - thirdNumber;

    }

    return subtractSumAndThirdNumber(returnedSum, thirdNum);
}

console.log(addAndSubtract(23, 6, 10)); 