function addAndSubtract(array) {
    let sumOriginalArray = 0;
    let sumModifiedArray = 0;
    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++) {
        let currentNum = Number(array[index]);
        sumOriginalArray += currentNum;

        if (currentNum % 2 === 0) {
            array[index] = currentNum + index;
            sumModifiedArray += array[index];

        } else {
            array[index] = currentNum - index;
            sumModifiedArray += array[index];

        }
    }

    console.log(array);
    console.log(sumOriginalArray);
    console.log(sumModifiedArray);
}

addAndSubtract([5, 15, 23, 56, 35]);