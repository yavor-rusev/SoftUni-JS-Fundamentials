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
            let row = matrixAsNumbers[y];

            let detonationStartX = bombXIndex - 1;
            let detonationEndX = bombXIndex + 1;

            if (bombXIndex === 0) {
                detonationStartX = 0;
            }

            if (bombXIndex === row.length) {
                detonationEndX--;
            }

            for (let x = detonationStartX; x <= detonationEndX; x++) {

                let currentPositionValue = matrixAsNumbers[y][x];
                currentPositionValue -= bombDamageValue;
                matrixAsNumbers[y][x] = currentPositionValue;

            }
        }
    }

    for (let i = 0; i < matrixAsNumbers.length; i++) {

        let currentRow = matrixAsNumbers[i];

        for (let j = 0; j < currentRow.length; j++) {
            let currentPoints = currentRow[j];

            if (currentPoints > 0) {
                snowBallDamageSum += currentPoints;
                otherBuniesKillCounter++;

            }
        }
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