function test(figureWidthInCols, figureHightInRows) {
    let twoDimensionalArray = Array(figureHightInRows);

    for (let index = 0; index < figureHightInRows; index++) {
        twoDimensionalArray[index] = Array(figureWidthInCols);

    }

    let outputRows = figureHightInRows;

    let spirakDirectionsCount = 0;

    if (figureWidthInCols >= figureHightInRows) {
        spirakDirectionsCount = (figureHightInRows + figureHightInRows) - 1;

    } else {
        spirakDirectionsCount = figureWidthInCols + figureWidthInCols;

    }

    let currentNumber = 0;
    let colIndex = -1;
    let rowIndex = 0;

    for (let directions = 1; directions <= spirakDirectionsCount; directions++) {

        if (directions % 2 !== 0 && directions !== 1) {
            figureWidthInCols--;

        } else if (directions % 2 === 0) {
            figureHightInRows--;

        }

        if (directions % 4 === 1) {

            for (let right = 0; right < figureWidthInCols; right++) {
                currentNumber++;
                twoDimensionalArray[rowIndex][++colIndex] = currentNumber;

            }

        } else if (directions % 4 === 2) {

            for (let down = 0; down < figureHightInRows; down++) {
                currentNumber++;
                twoDimensionalArray[++rowIndex][colIndex] = currentNumber;

            }

        } else if (directions % 4 === 3) {

            for (let left = 0; left < figureWidthInCols; left++) {
                currentNumber++;
                twoDimensionalArray[rowIndex][--colIndex] = currentNumber;

            }

        } else if (directions % 4 === 0) {

            for (let up = 0; up < figureHightInRows; up++) {
                currentNumber++;
                twoDimensionalArray[--rowIndex][colIndex] = currentNumber;

            }
        }
    }

    for (let printLine = 0; printLine < outputRows; printLine++) {
        console.log(twoDimensionalArray[printLine].join(" "));

    }
}

test(5, 5);
