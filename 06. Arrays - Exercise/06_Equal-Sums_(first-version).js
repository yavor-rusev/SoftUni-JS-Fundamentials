function equalSums(array) {
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;

    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++) {

        let currentElement = Number(array[index]);

        for (let leftSideIndex = 0; leftSideIndex < index; leftSideIndex++) {

            let leftSideElement = Number(array[leftSideIndex]);
            leftSum += leftSideElement;

        }

        for (let rightSideIndex = index + 1; rightSideIndex < arrayLength; rightSideIndex++) {

            let rightSideElement = Number(array[rightSideIndex]);
            rightSum += rightSideElement;

        }

        if (leftSum === rightSum) {
            isEqual = true;
            console.log(index);
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