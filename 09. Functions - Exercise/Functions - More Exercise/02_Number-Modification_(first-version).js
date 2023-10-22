function numberModification(num) {
    let numAsString = num.toString();
    let averageIsHigherThan5 = false;

    while (!averageIsHigherThan5) {
        let sumDigits = 0;
        let digitCounter = 0;

        for (let index = 0; index < numAsString.length; index++) {
            let currentDigit = Number(numAsString[index]);
            sumDigits += currentDigit;
            digitCounter++;


        }

        if (sumDigits / digitCounter <= 5) {
            numAsString += "9";

        } else {
            averageIsHigherThan5 = true;

        }
    }

    console.log(Number(numAsString));
}

numberModification(101);