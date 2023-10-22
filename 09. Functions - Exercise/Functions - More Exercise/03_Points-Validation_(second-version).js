function pointsValidation([x1, y1, x2, y2]) {
    let x0 = 0;
    let y0 = 0;

    function distanceBetweenPoints(fourElementsArray) {
        let sideXX = fourElementsArray[0] - fourElementsArray[2];
        let sideYY = fourElementsArray[1] - fourElementsArray[3];

        let distance = Math.sqrt((sideXX * sideXX) + (sideYY * sideYY));
        return distance;
    }

    let firstPointToZeroPoint = distanceBetweenPoints([x1, y1, x0, y0]);
    let secondPointToZeroPoint = distanceBetweenPoints([x2, y2, x0, y0]);
    let firstPointToSecondPoint = distanceBetweenPoints([x1, y1, x2, y2]);

    function distanceValidation(distance) {
        let distanceIsValid;

        if (Math.trunc(distance) === distance) {
            distanceIsValid = true;

        } else {
            distanceIsValid = false;

        }

        return distanceIsValid;
    }

    let firstPointToZeroPointIsValid = distanceValidation(firstPointToZeroPoint);
    let secondPointToZeroPointIsValid = distanceValidation(secondPointToZeroPoint);
    let firstPointToSecondPointIsValid = distanceValidation(firstPointToSecondPoint);

    function printValidation([a1, b1, a2, b2], distance) {
        if (distance === true) {
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is valid`);

        } else {
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is invalid`);

        }
    }

    printValidation([x1, y1, x0, y0], firstPointToZeroPointIsValid);
    printValidation([x2, y2, x0, y0], secondPointToZeroPointIsValid);
    printValidation([x1, y1, x2, y2], firstPointToSecondPointIsValid);
}

pointsValidation([2, 1, 1, 1]);