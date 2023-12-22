function race(arr) {
    let racersList = arr.shift().split(", ");
    let objOfRacers = {};

    for (let racer of racersList) {
        if (!objOfRacers.hasOwnProperty(racer)) {
            objOfRacers[racer] = 0;
        }
    }

    let namesRegex = /[A-Za-z]/g;
    let digitsRegex = /[0-9]/g;

    let currentLine = arr.shift();

    while (currentLine !== 'end of race') {
        let currentName = currentLine.match(namesRegex).join("");
        let currentDistance = currentLine.match(digitsRegex).reduce((acc, val) => acc += Number(val), 0);

        if (objOfRacers.hasOwnProperty(currentName)) {
            objOfRacers[currentName] += currentDistance;
        }

        currentLine = arr.shift();
    }

    let racersSortedByDistance = Object.entries(objOfRacers).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${racersSortedByDistance[0][0]}`);
    console.log(`2nd place: ${racersSortedByDistance[1][0]}`);
    console.log(`3rd place: ${racersSortedByDistance[2][0]}`)
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);