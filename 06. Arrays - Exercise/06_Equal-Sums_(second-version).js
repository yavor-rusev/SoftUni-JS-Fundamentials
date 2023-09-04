function equalSums(array) {
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;

    let arrayLength = array.length;

    for (let splitIndex = 0; splitIndex < arrayLength; splitIndex++) {

        for (let j = 0; j < arrayLength; j++) {

            let currentElement = array[j];

            if (j < splitIndex) {
                leftSum += currentElement;

            }

            if (j > splitIndex) {
                rightSum += currentElement;

            }

        }

        if (leftSum === rightSum) {
            isEqual = true;
            console.log(splitIndex);
            break;

        }

        leftSum = 0;
        rightSum = 0;

    }

    if (isEqual === false) {
        console.log("no");

    }
}

equalSums([1, 2, 3, 3]);