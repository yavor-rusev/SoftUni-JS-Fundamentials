function division(number) {
    let divisor = "";

    if (number % 10 === 0) {
        divisor = 10;

    } else if (number % 7 === 0) {
        divisor = 7;

    } else if (number % 6 === 0) {
        divisor = 6;

    } else if (number % 3 === 0) {
        divisor = 3;

    } else if (number % 2 === 0) {
        divisor = 2;

    }

    if (divisor !== "") {
        console.log("The number is divisible by " + divisor);

    } else {
        console.log("Not divisible");

    }
}

division(1643);