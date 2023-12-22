function oddTimes(binariesAsDecimals) {
    let arrayOfBinariesAsDecimals = binariesAsDecimals.split(" ").map(Number);
    let theNumberWithOddTimeOccurances = 0;

    for (let binaryAsDecimal of arrayOfBinariesAsDecimals) {
        theNumberWithOddTimeOccurances = theNumberWithOddTimeOccurances ^ binaryAsDecimal;
    }

    console.log(theNumberWithOddTimeOccurances);
}

oddTimes("5 7 2 7 5 2 5");