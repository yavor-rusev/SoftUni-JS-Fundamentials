function threeBitSwitch(binaryAsDecimal, position) {
    let switchingMaskForSearchedThreePositions = 7 << position;

    let switchedBinaryAsDecimal = binaryAsDecimal ^ switchingMaskForSearchedThreePositions;

    console.log(switchedBinaryAsDecimal);
}

threeBitSwitch(44444, 4);