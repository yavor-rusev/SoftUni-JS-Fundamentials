function pThBit(binaryAsDecimal, position) {
    let evaluatingMaskForSearchedPosition = 1 << position;

    let valueOfSerchedPosition = (binaryAsDecimal & evaluatingMaskForSearchedPosition) >> position;

    console.log(valueOfSerchedPosition);
}

pThBit(255, 7);