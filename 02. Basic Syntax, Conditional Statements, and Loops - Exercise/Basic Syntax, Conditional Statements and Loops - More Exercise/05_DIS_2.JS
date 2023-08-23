function distanceBetweenPoints(x1, y1, x2, y2) {
    let sideXX = x1 - x2;
    let sideYY = y1 - y2;

    let hypotenuseDistance = Math.sqrt((sideXX * sideXX) + (sideYY * sideYY));

    console.log(hypotenuseDistance);

}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);