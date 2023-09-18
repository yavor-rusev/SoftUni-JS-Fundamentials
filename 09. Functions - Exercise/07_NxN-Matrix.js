function nxnMatrix(num) {
    function rowGenerator(colCount) {
        let row = "";

        for (let i = 1; i <= colCount; i++) {
            row += `${colCount} `;

        }

        return row;
    }

    let generatedRow = rowGenerator(num);

    function matrixGenerator(rowCount) {

        for (let j = 1; j <= rowCount; j++) {
            console.log(generatedRow);

        }
    }

    return matrixGenerator(num);
}

nxnMatrix(3);