function mergeArrays(firstArray, secondArray) {
    let resultArray = [];
    let firstArrayLenght = firstArray.length;

    for (let index = 0; index < firstArrayLenght; index++) {
        let firstArrayElement = firstArray[index];
        let secondArrayElement = secondArray[index];

        if (index % 2 === 0) {
            let resultArrayElement = Number(firstArrayElement) + Number(secondArrayElement);
            resultArray.push(resultArrayElement);


        } else {
            let resultArrayElement = firstArrayElement + secondArrayElement;
            resultArray.push(resultArrayElement);

        }
    }

    console.log(resultArray.join(" - "));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);