function simpleCalculator(numOne, numTwo, operator) {
    switch (operator) {
        case 'multiply':
            let multiply = (a, b) => a * b;
            console.log(multiply(numOne, numTwo));
            return;

        case 'divide':
            let divide = (a, b) => a / b;
            console.log(divide(numOne, numTwo));
            return;

        case 'add':
            let add = (a, b) => a + b;
            console.log(add(numOne, numTwo));
            return;

        case 'subtract':
            let subtract = (a, b) => a - b;
            console.log(subtract(numOne, numTwo));
            return;

    }
}

simpleCalculator(5, 5, 'subtract');