function perfectNumber(num) {
    let sumDivisors = 0;

    for (let divisor = 1; divisor <= num / 2; divisor++) {

        if (num % divisor === 0) {
            sumDivisors += divisor;

        }
    }

    if (sumDivisors === num) {
        console.log("We have a perfect number!");

    } else {
        console.log("It's not so perfect.");

    }
}

perfectNumber(1);