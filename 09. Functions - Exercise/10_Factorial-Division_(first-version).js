function factorialDivision(firstNum, secondNum) {
    let firstNumFactorial = 1;
    let secondNumFactorial = 1;

    let biggestNum = Math.max(firstNum, secondNum);

    for (let multiplier = 2; multiplier <= biggestNum; multiplier++) {
        if (multiplier <= firstNum) {
            firstNumFactorial *= multiplier;

        }

        if (multiplier <= secondNum) {
            secondNumFactorial *= multiplier;

        }
    }

    let result = firstNumFactorial / secondNumFactorial;
    console.log(result.toFixed(2));
}

factorialDivision(5, 2);