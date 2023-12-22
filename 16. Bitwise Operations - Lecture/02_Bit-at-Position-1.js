function bitAtPosition1(binaryAsDecimal) {
    let position = 1;
    let evaluatingMask = 1;

    let lsb = binaryAsDecimal >> position;

    let bitAtPosition = lsb & evaluatingMask;

    console.log(bitAtPosition);
}

bitAtPosition1(51);