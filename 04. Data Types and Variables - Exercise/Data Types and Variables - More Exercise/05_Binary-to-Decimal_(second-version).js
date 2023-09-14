function binaryToDecimal(binary) {
    let binaryAsString = binary.toString();
    let binaryAsStringLength = binaryAsString.length;
    let decimalNumber = 0;

    for (let index = 0; index < binaryAsStringLength; index++) {
        let positionBinaryValue = Number(binaryAsString[binaryAsStringLength - 1 - index]);
        let positionDecimalValue = Math.pow(2, index) * positionBinaryValue;
        decimalNumber += positionDecimalValue;

    }

    console.log(decimalNumber);
}

binaryToDecimal(11110000);