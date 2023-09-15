function simpleCalculator(numOne, numTwo, operator) {
    switch (operator) {
        case 'multiply':
            let multiply = (a, b) => a * b;
            return multiply(numOne, numTwo);

        case 'divide':
            let divide = (a, b) => a / b;
            return divide(numOne, numTwo);

        case 'add':
            let add = (a, b) => a + b;
            return add(numOne, numTwo);

        case 'subtract':
            let subtract = (a, b) => a - b;
            return subtract(numOne, numTwo);

    }
}

console.log(simpleCalculator(5, 5, 'add'));