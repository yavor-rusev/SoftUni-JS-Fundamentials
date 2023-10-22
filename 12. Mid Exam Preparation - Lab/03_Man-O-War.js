function thirdTask(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let manOWar = input.shift().split(">").map(Number);
    let maxHealt = Number(input.shift());

    let commandLineAsArray = input.shift().split(" ");
    let command = commandLineAsArray[0];

    while (command !== "Retire") {
        if (command === "Fire") {
            let index = Number(commandLineAsArray[1]);
            let damage = Number(commandLineAsArray[2]);

            if (manOWar[index] === undefined) {
                commandLineAsArray = input.shift().split(" ");
                command = commandLineAsArray[0];
                continue;
            }

            manOWar[index] -= damage;

            if (manOWar[index] <= 0) {
                console.log("You won! The enemy ship has sunken.");
                return;
            }

        } else if (command === "Defend") {
            let startIndex = Number(commandLineAsArray[1]);
            let endIndex = Number(commandLineAsArray[2]);
            let damage = Number(commandLineAsArray[3]);

            if (pirateShip[startIndex] === undefined || pirateShip[endIndex] === undefined) {
                commandLineAsArray = input.shift().split(" ");
                command = commandLineAsArray[0];
                continue;
            }

            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= damage;

                if (pirateShip[i] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    return;
                }
            }

        } else if (command === "Repair") {
            let index = Number(commandLineAsArray[1]);
            let health = Number(commandLineAsArray[2]);

            if (pirateShip[index] === undefined) {
                commandLineAsArray = input.shift().split(" ");
                command = commandLineAsArray[0];
                continue;
            }

            pirateShip[index] += health;

            if (pirateShip[index] > maxHealt) {
                pirateShip[index] = maxHealt
            }

        } else if (command === "Status") {
            let sectionsToRepear = pirateShip.filter(section => section < maxHealt * 0.20);
            console.log(`${sectionsToRepear.length} sections need repair.`);

        }

        commandLineAsArray = input.shift().split(" ");
        command = commandLineAsArray[0];
    }

    let pirateShipSum = 0;
    let manOWarSum = 0;

    for (let section of pirateShip) {
        pirateShipSum += section;
    }

    for (let section of manOWar) {
        manOWarSum += section;
    }

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${manOWarSum}`);
}


// thirdTask([
//     "12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"
// ]);
thirdTask([
    "2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"
]);
