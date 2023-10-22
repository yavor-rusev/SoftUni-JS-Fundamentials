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

    if (Math.trunc(firstPointToZeroPoint) === firstPointToZeroPoint) {
        console.log(`{${x1}, ${y1}} to {${x0}, ${x0}} is valid`);

    } else {
        console.log(`{${x1}, ${y1}} to {${x0}, ${x0}} is invalid`);
    }

    if (Math.trunc(secondPointToZeroPoint) === secondPointToZeroPoint) {
        console.log(`{${x2}, ${y2}} to {${x0}, ${x0}} is valid`);

    } else {
        console.log(`{${x2}, ${y2}} to {${x0}, ${x0}} is invalid`)

    }

    if (Math.trunc(firstPointToSecondPoint) === firstPointToSecondPoint) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);

    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

    }
}

pointsValidation([2, 1, 1, 1]);