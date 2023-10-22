function bunnyKill(matrix) {
    let bombCoordinatesAsString = matrix.splice(matrix.length - 1, 1).toString();
    let bombCoordinatesArray = bombCoordinatesAsString.split(" ");

    let bombBuniesKillCounter = 0;
    let otherBuniesKillCounter = 0;

    let snowBallDamageSum = 0;

    let matrixAsNumbers = [];

    for (let line of matrix) {
        let rowOfStringNums = line.split(" ").map(Number);
        matrixAsNumbers.push(rowOfStringNums);
    }

    for (let index = 0; index < bombCoordinatesArray.length; index++) {

        let bombPositionAsArray = bombCoordinatesArray[index].split(",");
        let bombXIndex = Number(bombPositionAsArray[1]);
        let bombYIndex = Number(bombPositionAsArray[0]);
        let bombDamageValue = matrixAsNumbers[bombYIndex][bombXIndex];

        if (bombDamageValue <= 0) {
            continue;
        }

        bombBuniesKillCounter++;
        snowBallDamageSum += bombDamageValue;

        let detonationStartY = bombYIndex - 1;
        let detonationEndY = bombYIndex + 1;

        if (bombYIndex === 0) {
            detonationStartY = 0;
        }

        if (bombYIndex === matrixAsNumbers.length - 1) {
            detonationEndY--;
        }

        for (let y = detonationStartY; y <= detonationEndY; y++) {
            let row = matrixAsNumbers.splice(y, 1);
            row = row[0];

            let detonationStartX = bombXIndex - 1;
            let detonationEndX = 3;

            if (bombXIndex === 0) {
                detonationStartX = 0;
                detonationEndX--;
            }

            if (bombXIndex === row.length) {
                detonationEndX--;
            }

            let positionsToDetonate = row.splice(detonationStartX, detonationEndX);
            let detonatedPositions = positionsToDetonate.map(a => a -= bombDamageValue);

            while (detonatedPositions.length > 0) {
                let positionToActualize = detonatedPositions.pop();
                row.splice(detonationStartX, 0, positionToActualize);

            }

            matrixAsNumbers.splice(y, 0, row);
        }
    }

    for (let i = 0; i < matrixAsNumbers.length; i++) {

        let currentRow = matrixAsNumbers[i];
        let sumPositions = 0;

        currentRow.map(a => {
            if (a > 0) {
                sumPositions += a;
                otherBuniesKillCounter++;
            }
        })

        snowBallDamageSum += sumPositions;
    }

    let snowBallKills = bombBuniesKillCounter + otherBuniesKillCounter;

    console.log(snowBallDamageSum);
    console.table(snowBallKills);
}

bunnyKill([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']
);