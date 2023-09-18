function factorialDivision(firstNum, secondNum) {

    function factorial(number) {
        let factorialResult = 1;

        for (let multiplier = 2; multiplier <= number; multiplier++) {
            factorialResult *= multiplier;

        }

        return factorialResult;
    }

    let firstNumFactorial = factorial(firstNum);
    let secondNumFactorial = factorial(secondNum);

    console.log((firstNumFactorial / secondNumFactorial).toFixed(2));
}

factorialDivision(5, 2);