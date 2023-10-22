function numberModification(num) {
    let numAsString = num.toString();

    let sumDigits = 0;
    let digitCounter = 0;

    for (let index = 0; index < numAsString.length; index++) {
        let currentDigit = Number(numAsString[index]);
        sumDigits += currentDigit;
        digitCounter++;


    }

    if (sumDigits / digitCounter > 5) {
        console.log(Number(numAsString));

    } else {
        numberModification(num + "9");

    }
}

numberModification(5835);