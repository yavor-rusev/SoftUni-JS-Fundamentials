function airPollution(mapOfSofia, forces) {
    let sofiaAsNumberMatrix = [];

    for (let line of mapOfSofia) {
        let numberArray = line.split(" ").map(Number);
        sofiaAsNumberMatrix.push(numberArray);
    }

    for (let force of forces) {
        let forceAsArray = force.split(" ");
        let currentForceName = forceAsArray[0];
        let forceIndex = 0;
        let forceValue = 0;

        if (currentForceName === 'breeze' || currentForceName === 'gale') {
            forceIndex = Number(forceAsArray[1]);
        } else if (currentForceName === 'smog') {
            forceValue = Number(forceAsArray[1]);
        }

        switch (currentForceName) {
            case 'breeze':
                let rowToBreeze = sofiaAsNumberMatrix.splice(forceIndex, 1);
                rowToBreeze = rowToBreeze[0];

                let breezedRow = rowToBreeze.map((a) => {
                    a -= 15;

                    if (a < 0) {
                        a = 0;
                    }

                    return a;
                });

                sofiaAsNumberMatrix.splice(forceIndex, 0, breezedRow);
                break;

            case 'gale':
                sofiaAsNumberMatrix = sofiaAsNumberMatrix.map((currentRow) => {

                    let galedRow = currentRow.map((currentCol, colIndex) => {

                        let galedCol = currentCol;

                        if (colIndex === forceIndex) {
                            galedCol = currentCol - 20;

                            if (galedCol < 0) {
                                galedCol = 0;
                            }
                        }

                        return galedCol;
                    })

                    return galedRow;
                });

                break;

            case 'smog':
                sofiaAsNumberMatrix = sofiaAsNumberMatrix.map((currentRow) => {

                    let smoggedRow = currentRow.map((currentCol) => {
                        let smoggedCol = currentCol + forceValue;
                        return smoggedCol;
                    })

                    return smoggedRow;
                });

                break;
        }
    }

    let pollutedCoordinatesArray = [];

    let pollutionCheck = sofiaAsNumberMatrix.map((currentRow, rowIndex) => {
        let inspectedRow = currentRow;

        let pollutedCol = inspectedRow.map((currentCol, colIndex) => {
            if (currentCol >= 50) {
                pollutedCoordinatesArray.push([`${rowIndex}-${colIndex}`]);
            }
        })
    })

    if (pollutedCoordinatesArray.length > 0) {
        console.log(`Polluted areas: [${pollutedCoordinatesArray.join("], [")}]`);

    } else {
        console.log("No polluted areas");
    }
}

airPollution([
    '5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'], ['breeze 1', 'gale 2', 'smog 25']);