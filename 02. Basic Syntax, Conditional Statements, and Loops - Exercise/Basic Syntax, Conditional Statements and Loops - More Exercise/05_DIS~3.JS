function distanceBetweenPoints(x1, y1, x2, y2) {
    let sideXX = Math.max(x1, x2) - Math.min(x1, x2);
    let sideYY = Math.max(y1, y2) - Math.min(y1, y2);

    let hypotenuseDistance = Math.sqrt((sideXX * sideXX) + (sideYY * sideYY));

    console.log(hypotenuseDistance);

}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);