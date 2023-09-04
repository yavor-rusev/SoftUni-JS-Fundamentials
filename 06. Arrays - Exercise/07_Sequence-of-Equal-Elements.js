function sequenceOfEqualElements(array) {
    let maxSequence = [array[0]];
    let maxCounter = 1;
    let currentSequence = [];
    let currentCounter = 0;

    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++) {

        let previousElement = array[index - 1];
        let currentElement = array[index];

        if (currentElement === previousElement) {
            currentSequence.push(currentElement);
            currentCounter++;

        }

        if (currentCounter > maxCounter) {
            maxSequence = currentSequence;
            maxCounter = currentCounter;

        }

        if (currentElement !== previousElement) {
            currentSequence = [];
            currentSequence.push(currentElement);
            currentCounter = 1;

        }

    }

    console.log(maxSequence.join(" "));

}

sequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);