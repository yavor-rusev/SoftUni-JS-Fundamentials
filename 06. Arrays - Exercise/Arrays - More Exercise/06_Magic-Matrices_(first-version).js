function magicMatrices(square) {
    let isMagical = false;

    let arrayLength = square.length;
    let sumsArray = [];

    for (let row = 0; row < arrayLength; row++) {

        let currentRowSum = 0;

        for (let rowIndex = 0; rowIndex < arrayLength; rowIndex++) {

            let currentRowNum = Number(square[row][rowIndex]);
            currentRowSum += currentRowNum;

        }

        sumsArray.push(currentRowSum);

    }

    for (let colIndex = 0; colIndex < arrayLength; colIndex++) {

        let currentColSum = 0;

        for (let col = 0; col < arrayLength; col++) {

            let currentColNum = Number(square[col][colIndex]);
            currentColSum += currentColNum;

        }

        sumsArray.push(currentColSum);

    }

    for (let index = 1; index < sumsArray.length; index++) {
        let currentSum = sumsArray[index - 1];
        let nextSum = sumsArray[index];

        if (currentSum === nextSum) {
            isMagical = true;

        } else {
            isMagical = false;
            break;

        }
    }

    console.log(isMagical);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
