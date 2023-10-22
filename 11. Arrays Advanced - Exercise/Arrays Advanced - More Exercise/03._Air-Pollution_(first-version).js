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
                for (let row = 0; row < sofiaAsNumberMatrix.length; row++) {

                    let currentRow = sofiaAsNumberMatrix.splice(row, 1);
                    currentRow = currentRow[0];

                    let colToGale = currentRow[forceIndex];
                    let galedCol = colToGale - 20;

                    if (galedCol < 0) {
                        galedCol = 0;
                    }

                    currentRow.splice(forceIndex, 1, galedCol);
                    sofiaAsNumberMatrix.splice(row, 0, currentRow);
                };

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

    for (let y = 0; y < sofiaAsNumberMatrix.length; y++) {
        let inspectedRow = sofiaAsNumberMatrix[y];

        for (let x = 0; x < inspectedRow.length; x++) {

            let inspectedCol = inspectedRow[x];

            if (inspectedCol >= 50) {
                let coordinatesPollutedBlock = `[${y}-${x}]`;
                pollutedCoordinatesArray.push(coordinatesPollutedBlock);

            }
        }
    };

    if (pollutedCoordinatesArray.length > 0) {
        console.log(`Polluted areas: ${pollutedCoordinatesArray.join(", ")}`);

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