function binaryDigitsCount(binaryAsDecimal, searchedDigit) {
    let count = 0;

    while (binaryAsDecimal > 0) {
        let remainder = binaryAsDecimal % 2;

        if (remainder === searchedDigit) {
            count++;
        }

        binaryAsDecimal = Math.trunc(binaryAsDecimal / 2);
    }

    console.log(count);
}

binaryDigitsCount(15, 1);