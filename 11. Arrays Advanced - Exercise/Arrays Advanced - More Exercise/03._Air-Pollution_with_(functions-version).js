function airPollution(mapOfSofia, forces) {
    let sofiaAsNumberMatrix = mapOfSofia.map((stringLine) => {
        let arrayOfNumbers = stringLine.split(" ").map(Number);
        return arrayOfNumbers;

    });

    function breeze(map, index) {
        let breezedMap = map;

        let rowToBreeze = breezedMap.splice(index, 1);
        rowToBreeze = rowToBreeze[0];

        let breezedRow = rowToBreeze.map((a) => {
            a -= 15;

            if (a < 0) {
                a = 0;
            }

            return a;
        });

        breezedMap.splice(index, 0, breezedRow);
        return breezedMap;
    }

    function gale(map, index) {
        let galedMap = map.map((currentRow) => {

            let galedRow = currentRow.map((currentCol, colIndex) => {

                let galedCol = currentCol;

                if (colIndex === index) {
                    galedCol = currentCol - 20;

                    if (galedCol < 0) {
                        galedCol = 0;
                    }
                }

                return galedCol;
            })

            return galedRow;
        });

        return galedMap;
    }

    function smog(map, value) {
        let smoggeMap = map.map((currentRow) => {

            let smoggedRow = currentRow.map((currentCol) => {
                let smoggedCol = currentCol + value;
                return smoggedCol;
            })

            return smoggedRow;
        });

        return smoggeMap;
    }

    function pollutionCheck(map) {
        let pollutedCoordinatesArray = [];

        let pollutionCheck = map.map((currentRow, rowIndex) => {
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
                sofiaAsNumberMatrix = breeze(sofiaAsNumberMatrix, forceIndex);
                break;

            case 'gale':
                sofiaAsNumberMatrix = gale(sofiaAsNumberMatrix, forceIndex);
                break;

            case 'smog':
                sofiaAsNumberMatrix = smog(sofiaAsNumberMatrix, forceValue);
                break;
        }
    }

    pollutionCheck(sofiaAsNumberMatrix);
}

airPollution([
    '5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'], ['breeze 1', 'gale 2', 'smog 25']);