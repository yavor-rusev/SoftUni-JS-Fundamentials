function diagonalAttack(square) {
    let squareLength = square.length;

    let squareAsTwoDimentionalArray = [];
    let currentSquareIndex;

    for (let index = 0; index < squareLength; index++) {
        currentSquareIndex = square[index].split(" ");
        squareAsTwoDimentionalArray.push(currentSquareIndex);

    }

    let sumLeftDiagonal = 0;
    let sumRightDiagonal = 0;

    for (let row = 0; row < squareLength; row++) {

        for (let col = 0; col < squareLength; col++) {

            let currentLeftDiagonalNumber = Number(squareAsTwoDimentionalArray[row][col]);
            let currentRigthDiagonalNumber = Number(squareAsTwoDimentionalArray[row][squareLength - 1 - col]);

            if (row === col) {
                sumLeftDiagonal += currentLeftDiagonalNumber;
                sumRightDiagonal += currentRigthDiagonalNumber;

            }
        }
    }

    if (sumLeftDiagonal === sumRightDiagonal) {

        for (let row = 0; row < squareLength; row++) {

            for (let col = 0; col < squareLength; col++) {

                let currentLeftDiagonalNumber = Number(squareAsTwoDimentionalArray[row][col]);
                let currentRigthDiagonalNumber = Number(squareAsTwoDimentionalArray[row][squareLength - 1 - col]);

                if (row === col || row === squareLength - 1 - col) {
                    squareAsTwoDimentionalArray[row][col] = currentLeftDiagonalNumber;
                    squareAsTwoDimentionalArray[row][squareLength - 1 - col] = currentRigthDiagonalNumber;

                } else {
                    squareAsTwoDimentionalArray[row][col] = sumLeftDiagonal;
                    squareAsTwoDimentionalArray[row][squareLength - 1 - col] = sumRightDiagonal;

                }
            }
        }
    }

    for (let printLine = 0; printLine < squareLength; printLine++) {
        console.log(squareAsTwoDimentionalArray[printLine].join(" "));

    }  
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);