function bitDestroyer(binaryAsDecimal, position) {
    let destroyingMaskForSearchedPosition = ~(1 << position);

    let newBinaryNum = binaryAsDecimal & destroyingMaskForSearchedPosition;

    console.log(newBinaryNum);
}

bitDestroyer(231, 2);