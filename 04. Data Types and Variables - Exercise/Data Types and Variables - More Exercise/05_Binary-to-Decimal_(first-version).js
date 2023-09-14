function binaryToDecimal(binary) {
    let binaryAsString = binary.toString();
    let binaryAsStringLength = binaryAsString.length;
    let binaryReversed = "";
    let decimalNumber = 0;

    for (let index = binaryAsStringLength - 1; index >= 0; index--) {
        let binaryPosition = binaryAsString[index];
        binaryReversed += binaryPosition;

    }

    for (let index = 0; index < binaryAsStringLength; index++) {
        let positionBinaryValue = Number(binaryReversed[index]);
        let positionDecimalValue = Math.pow(2, index) * positionBinaryValue;
        decimalNumber += positionDecimalValue;

    }

    console.log(decimalNumber);
}

binaryToDecimal(11110000);