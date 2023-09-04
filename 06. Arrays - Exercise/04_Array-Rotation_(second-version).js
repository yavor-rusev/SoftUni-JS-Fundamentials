function arrayRotation(originalArray, rotations) {
    for (let index = 0; index < rotations; index++) {
        let rotatedArray = [];
        let arrayLength = originalArray.length;
        let = currentElement = originalArray[0];

        for (let j = 1; j < arrayLength; j++) {
            let nextElement = originalArray[j];
            rotatedArray[rotatedArray.length] = nextElement;

        }

        rotatedArray[rotatedArray.length] = currentElement;
        originalArray = rotatedArray;

    }

    console.log(originalArray.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);