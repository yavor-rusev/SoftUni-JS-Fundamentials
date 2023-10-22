function EqualNeighbors(matrix) {
    let equalNeighborsCounter = 0;

    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        let nextRow = matrix[i + 1];

        if (i < matrix.length - 1) {

            for (let j = 0; j < currentRow.length; j++) {
                let currentRowCurrentElement = currentRow[j];
                let nextRowCurrentElement = nextRow[j];

                if (currentRowCurrentElement === nextRowCurrentElement) {
                    equalNeighborsCounter++;

                }
            }

            for (let j = 0; j < currentRow.length - 1; j++) {
                let currentElementInCurrentRow = currentRow[j];
                let nextElementInCurrentRow = currentRow[j + 1];

                if (currentElementInCurrentRow === nextElementInCurrentRow) {
                    equalNeighborsCounter++;

                }
            }

        } else {

            for (let j = 0; j < currentRow.length - 1; j++) {
                let currentElementInCurrentRow = currentRow[j];
                let nextElementInCurrentRow = currentRow[j + 1];

                if (currentElementInCurrentRow === nextElementInCurrentRow) {
                    equalNeighborsCounter++;

                }
            }
        }
    }

    console.log(equalNeighborsCounter);
}

EqualNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]);