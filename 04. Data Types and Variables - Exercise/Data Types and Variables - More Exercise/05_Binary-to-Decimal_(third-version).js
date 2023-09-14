function binaryToDecimal(binary) {
    let binaryAsString = binary.toString();
    let binaryAsStringLength = binaryAsString.length;
    let decimalNumber = 0;

    for (let index = 0; index < binaryAsStringLength; index++) {
        let positionBinaryValue = Number(binaryAsString[binaryAsStringLength - 1 - index]);

        if (positionBinaryValue === 1) {
            let positionDecimalValue = Math.pow(2, index);
            decimalNumber += positionDecimalValue;

        }
    }

    console.log(Math.trunc(decimalNumber));
}

binaryToDecimal(11111111);