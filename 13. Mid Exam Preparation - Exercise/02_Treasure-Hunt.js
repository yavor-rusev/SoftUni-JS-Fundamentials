function treasureHunt(input) {
    let chest = [];
    let initialLoot = input.shift().split("|");

    chest.push(...initialLoot);

    let command = input.shift().split(" ");
    let action = command.shift();

    while (action !== "Yohoho!") {

        if (action === 'Loot') {
            let newTypeLoots = command.filter(item => !chest.includes(item));
            newTypeLoots.forEach(item => chest.unshift(item));

        } else if (action === 'Drop') {
            let index = Number(command[0]);

            if (chest[index] !== undefined) {
                let droppedItem = chest.splice(index, 1)[0];
                chest.push(droppedItem);

            } else {
                command = input.shift().split(" ");
                action = command.shift();
                continue;
            }

        } else if (action === 'Steal') {
            let itemsCount = Number(command[0]);
            let stolenItems = chest.splice(-itemsCount);
            console.log(stolenItems.join(", "));

        }

        command = input.shift().split(" ");
        action = command.shift();
    }

    let sumItemsLength = chest.reduce((acc, val) => acc + val.length, 0);
    let averageGain = sumItemsLength / chest.length;

    if (chest.length !== 0) {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);

    } else {
        console.log("Failed treasure hunt.");

    }
}

treasureHunt([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
]);

// treasureHunt([
//     "Diamonds|Silver|Shotgun|Gold",
//     "Loot Silver Medals Coal",
//     "Drop -1",
//     "Drop 1",
//     "Steal 6",
//     "Yohoho!"
// ]);
